import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdIncompleteCircle } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { Container } from "../styles/componentStyles/StudentCardsStyles";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";



const StudentCards = () => {

  const [userDetails, setUserDetails] = useState("")
  const [enrolledCoursesCount, setEnrolledCoursesCount] = useState(null)
  const [activeCoursesCount, setActiveCoursesCount] = useState(null)
  const [incompleteCoursesCount, setIncompleteCoursesCount] = useState(null)

  const { user } = useContext(AuthContext);


  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/users/${user._id}`)
      .then(({ data }) => {
        console.log('updated user',data);
        setEnrolledCoursesCount(data.enrolledCourses.length)
        setUserDetails(data)
        // setUserEnrolledCourses(data.enrolledCourses);
 
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (userDetails && userDetails.enrolledCourses) {
      const countCompleteCourses = userDetails.enrolledCourses.filter(
        (course) => course.status === 'Complete'
      ).length;
      setActiveCoursesCount(countCompleteCourses);
      console.log("countCompleteCourses", countCompleteCourses);
    }
  }, [userDetails]);
  
  useEffect(() => {
    if (userDetails && userDetails.enrolledCourses) {
      const countIncompleteCourses = userDetails.enrolledCourses.filter(
        (course) => course.status === 'Incomplete'
      ).length;
      setIncompleteCoursesCount(countIncompleteCourses);
      console.log("countIncompleteCourses", countIncompleteCourses);
    }
  }, [userDetails]);


  // useEffect(() => {
  //   const countCompleteCourses = userDetails.enrolledCourses.filter(
  //     (course) => course.status === 'Complete'
  //   ).length;
  //   setActiveCoursesCount(countCompleteCourses);
  //   console.log("countCompleteCourses",countCompleteCourses)
  // }, []);

  // useEffect(() => {
  //   const countIncompleteCourses = userDetails.enrolledCourses.filter(
  //     (course) => course.status === 'Incomplete'
  //   ).length;
  //   setIncompleteCoursesCount(countIncompleteCourses);
  //   console.log("countIncompleteCourses",countIncompleteCourses)
  // }, []);

  return (
    <Container>
      <>
        <Card
          title={"Enrolled Courses"}
          value={enrolledCoursesCount}
          icon={<BsFillBookmarkFill />}
        />
        <Card
          title={"Active Courses"}
          value={incompleteCoursesCount}
          icon={<MdIncompleteCircle />}
        />
        <Card
          title={"Completed Courses"}
          value={activeCoursesCount}
          icon={<AiOutlineFileDone />}
        />
      </>
    </Container>
  );
};

export default StudentCards;
