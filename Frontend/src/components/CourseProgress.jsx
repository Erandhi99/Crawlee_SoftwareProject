import React, { useContext, useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { CourseData } from "../data";
import {
  Container,
  CourseCategory,
  CourseName,
  ImageContainer,
  InfoContainer,
  Wrapper,
  StyledLink,
} from "../styles/componentStyles/CourseProgressStyles";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const CourseProgress = ({filterName}) => {
  const [courseData, setCourseData] = useState({
    items: [],
  });
  let courses = [];
  const [userEnrolledCourses, setUserEnrolledCourses] = useState("");
  const [completedCourses,setCompletedCourses] = useState([])
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/users/${user._id}`)
      .then(({ data }) => {
        // console.log(data.enrolledCourses);
        // setUserEnrolledCourses(data.enrolledCourses);
        for (let index = 0; index < data.enrolledCourses.length; index++) {
          // console.log(data.enrolledCourses[index].courseId);
          let courseId = data.enrolledCourses[index].courseId;
          let courseProgress = data.enrolledCourses[index];

          axios
            .get(`http://localhost:8800/api/courses/${courseId}`)
            .then(({ data }) => {
              // console.log('courseProgress', courseProgress)
              let res = { ...data, ...courseProgress };
              // courses.push(res);
              setCourseData((prevState) => ({
                ...prevState,
                items: [...prevState.items, res],
              }));

              // setCourses(data);
            })
            .catch((e) => {
              console.log(e);
            });
        }
        // console.log("Enrolled Courses", courses)
        // setCourseData(courses)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (courseData && courseData.items.length > 0) {
      const filteredCourses = courseData.items.filter(
        (course) => course.status === "Complete"
      );
      setCompletedCourses(filteredCourses);
    }
  }, [courseData]);
  
  console.log("completedCourses", completedCourses);

  console.log('filterName',filterName)

  // if(filterName === 'completedCourses'){
  //   return (
  //     <Wrapper>
  //       {completedCourses.items.length !== 0 ? (
  //         <>
  //           {" "}
  //           {completedCourses.items.map((item, index) => (
  //             <StyledLink key={index} to={`/courses/${item.courseId}`}>
  //               <Container>
  //                 <ImageContainer src={item.courseCover[0].url} />
  //                 <InfoContainer>
  //                   <CourseCategory>{item.courseCategory}</CourseCategory>
  //                   <CourseName>{item.courseName}</CourseName>
  //                   <ProgressBar
  //                     now={(item.progress / item.lessons.length) * 100}
  //                     label={`${(item.progress / item.lessons.length) * 100}%`}
  //                   />
  //                 </InfoContainer>
  //               </Container>
  //             </StyledLink>
  //           ))}{" "}
  //         </>
  //       ) : (
  //         <span style={{ color: "#f0634c" }}>
  //           You haven't enrolled to any course.
  //         </span>
  //       )}
  //     </Wrapper>
  //   );
  // }
  
  return (
    <Wrapper>
      {courseData.items.length !== 0 ? (
        <>
          {" "}
          {courseData.items.map((item, index) => (
            <StyledLink key={index} to={`/courses/${item.courseId}`}>
              <Container>
                <ImageContainer src={item.courseCover[0].url} />
                <InfoContainer>
                  <CourseCategory>{item.courseCategory}</CourseCategory>
                  <CourseName>{item.courseName}</CourseName>
                  <ProgressBar
                    now={(item.progress / item.lessons.length) * 100}
                    label={`${(item.progress / item.lessons.length) * 100}%`}
                  />
                </InfoContainer>
              </Container>
            </StyledLink>
          ))}{" "}
        </>
      ) : (
        <span style={{ color: "#f0634c" }}>
          You haven't enrolled to any course.
        </span>
      )}
    </Wrapper>
  );
};

export default CourseProgress;
