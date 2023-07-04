import React, { useContext, useEffect, useState } from "react";
import Course from "./Course";
import {
  Container,
  CourseContainer,
  Title,
  StyledLink
} from "../styles/componentStyles/RecentCoursesStyles";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";


const RecentCourses = () => {
  const { user } = useContext(AuthContext);
  const [courseData, setCourseData] = useState({
    items: [],
  });

  const [sortedData, setSortedData] = useState([]);

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
    // console.log("Use Effect Enrolled Courses", courseData);

    if (courseData.items.length === user.enrolledCourses.length) {
      setSortedData(
        [...courseData.items].sort(
          (a, b) => new Date(b.modifiedAt) - new Date(a.modifiedAt)
        )
      );
      console.log("sorted courses", sortedData);
    }
  }, [courseData]);

  console.log('sortedData',sortedData)

  return (
    <Container>
      <Title>Recently Accessed Courses</Title>
      <CourseContainer>
        {sortedData.length == 0 ? (
          <span style={{ color: "#f0634c" }}>
            You haven't enrolled to any course.
          </span>
        ) : (
          <>
            {sortedData.slice(0, 5).map((item, index) => (
              <StyledLink key={index} to={`/courses/${item.courseId}`}>
                <Course
    
                  image={item.courseCover[0].url}
                  category={item.courseCategory}
                  coursename={item.courseName}
                />
              </StyledLink>
            ))}
          </>
        )}
      </CourseContainer>
    </Container>
  );
};

export default RecentCourses;
