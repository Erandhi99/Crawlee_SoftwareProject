import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import NavbarHorizontal from "../components/NavbarHorizontal";
import axios from "axios";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";
import Accordion from "../components/CustomizedAccordions";
import CustomizedAccordions from "../components/CustomizedAccordions";
import { AuthContext } from "../context/AuthContext";
import {
  Container,
  Header,
  Top,
  TopWrapper,
  ImageContainer,
  InfoContainer,
  CourseName,
  CourseDesc,
  Ratings,
  InstructorName,
  EnrollBtn,
  Bottom,
} from "../styles/pageStyles/SingleCourseStyles";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const SingleCourse = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [course, setCourse] = useState("");
  const [courseLessonsLength, setCourseLessonsLength] = useState("");
  const [progress, setProgress] = useState("");
  const [userEnrolledCourses, setUserEnrolledCourses] = useState([]);
  const [toggle, setToggle] = useState(false);

  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/courses/${path}`
        );
        const data = response.data;
        // console.log("courseDetails", data);
        setCourse(data);
        setCourseLessonsLength(data.lessons.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/users/${user._id}`
        );
        const data = response.data.enrolledCourses;
        console.log("userEnrolledCourses", data);
        setUserEnrolledCourses(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [toggle]);

  const isCourseIdMatched = userEnrolledCourses.some(
    (item) => item.courseId === path
  );

  const matchedCourse = userEnrolledCourses.find(
    (item) => item.courseId === path
  );

  const isFinalStage = matchedCourse && parseInt(matchedCourse.progress) + 1 === courseLessonsLength;



  console.log("isCourseIdMatched", isCourseIdMatched);
  console.log("courseLessonsLength", courseLessonsLength);
  console.log(
    "progress", matchedCourse && parseInt(matchedCourse.progress) + 1
  );

  console.log("isFinalStage",isFinalStage);
  

  return (
    <>
      <NavbarHorizontal />
      {course && (
        <Container>
          <Header>
            <Top>
              <TopWrapper>
                <ImageContainer src={course.courseCover[0].url} alt="" />

                <InfoContainer>
                  <CourseName>{course.courseName}</CourseName>
                  <CourseDesc>{course.description}</CourseDesc>
                  <Ratings>
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }}>
                        {labels[hover !== -1 ? hover : value]}
                      </Box>
                    )}
                  </Ratings>
                  <InstructorName>
                    Instructor: {course.instructorName}
                  </InstructorName>
                </InfoContainer>
              </TopWrapper>

              {userEnrolledCourses.length !== 0 && (
                <>
                  {user ? (
                    isCourseIdMatched ? (
                      <></>
                    ) : (
                      <>
                        <EnrollBtn>Enroll Now</EnrollBtn>
                      </>
                    )
                  ) : (
                    <>
                      <EnrollBtn>Enroll Now</EnrollBtn>
                    </>
                  )}
                </>
              )}
            </Top>
            <Bottom>
              {course.lessons.length !== 0 &&
                course.lessons.map((item, index) => (
                  <CustomizedAccordions
                    key={index}
                    topic={item.title}
                    description={item.description}
                    disable={
                      (!user ||
                      (!isCourseIdMatched ||
                      (matchedCourse && matchedCourse.progress < index)))
                    }
                    video={item.material[0].url}
                    courseId={path}
                    toggle={toggle}
                    setToggle={setToggle}
                    buttonVisibility={
                      matchedCourse && matchedCourse.progress > index
                    }
                    isFinalStage={isFinalStage}
                  />
                ))}
            </Bottom>
          </Header>
        </Container>
      )}
    </>
  );
};

export default SingleCourse;
