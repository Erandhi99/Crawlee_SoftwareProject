import mongoose from "mongoose";
import Course from "../models/Course.js";
import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  console.log(req);
  try {
    const updateduser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updateduser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const enrollCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    const user = await User.findByIdAndUpdate(userId);

    const isEnrolled = user.enrolledCourses.some(
      (course) => course.courseId.toString() === courseId
    );
    if (isEnrolled) {
      return res
        .status(409)
        .json({ message: "User is already enrolled in the course" });
    }

    user.enrolledCourses.push({
      courseId,
      progress: 0,
      modifiedAt: Date.now(),
      updatedAt: Date.now(),
    });

    await user.save();

    return res.status(200).json({ message: "Course enrollment successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getTotalEnrolledCount = async (req, res) => {
  try {
    const courseId = req.params.courseId; // Assuming you pass the courseId as a route parameter

    // Find the course by its ID
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Aggregate the enrolledCourses array in the User model and count the number of matching documents
    const totalStudentCount = await User.aggregate([
      {
        $match: {
          enrolledCourses: {
            $elemMatch: { courseId: new mongoose.Types.ObjectId(courseId) },
          },
        },
      },
      {
        $group: {
          _id: null,
          count: { $sum: 1 },
        },
      },
    ]);

    // The totalStudentCount is an array containing a single object with the count
    const count = totalStudentCount.length > 0 ? totalStudentCount[0].count : 0;

    return res.status(200).json({ totalStudentCount: count });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getTotalCoursesCreated = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming you pass the userId as a route parameter

    // Count the number of courses where the user is the instructor
    const totalCoursesCreated = await Course.countDocuments({
      instructor: userId,
    });

    return res.status(200).json({ totalCoursesCreated });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//change user role
export const changeUserRole = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { isAdmin, isTeacher } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isAdmin = isAdmin;
    user.isTeacher = isTeacher;

    await user.save();

    return res.status(200).json({ message: "User role updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
