import Course from "../models/Course.js";

export const createCourse = async (req, res, next) => {
  const newCourse = new Course(req.body);
  try {
    const savedCourse = await newCourse.save();
    res.status(200).json(savedCourse);
  } catch (err) {
    next(err);
  }
};

export const updateCourse = async (req, res, next) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCourse);
  } catch (err) {
    next(err);
  }
};

export const deleteCourse = async (req, res, next) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json("Course has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json(course);
  } catch (err) {
    next(err);
  }
};

export const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    next(err);
  }
};

//change course status
export const changeCourseStatus = async (req, res) => {
  const { courseId } = req.params;
  const { status } = req.body;

  try {
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    course.suspended = status;
    await course.save();

    res.status(200).json({ message: "Course status changed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCourseNames = async (req, res) => {
  try {
    const courses = await Course.find({}, 'courseName'); // Retrieve only the courseName field
    const courseNames = courses.map((course) => course.courseName);
    res.json(courseNames);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
