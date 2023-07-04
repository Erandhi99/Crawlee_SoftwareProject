import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { MdIncompleteCircle } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { TbSum } from "react-icons/tb";
import { IoMdSchool } from "react-icons/io";
import { Container } from "../styles/componentStyles/TeacherCardsStyles";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const TeacherCards = () => {
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { user } = useContext(AuthContext);
  let filteredCourseArray = [];
  let filteredUsersArray = [];
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8800/api/courses`)
  //     .then(({ data }) => {
  //       setCourses(data);
  //       const filteredCourseArray = data.filter(
  //         (item) => item.instructor === user._id
  //       );
  //       setFilteredCourses(filteredCourseArray);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8800/api/courses`);
        const filteredCourses = data.filter((item) => item.instructor === user._id);
        setCourses(data);
        setFilteredCourses(filteredCourses);
  
        let totalCount = 0;
        const usersResponse = await axios.get(`http://localhost:8800/api/users`);
        const users = usersResponse.data;
  
        for (let i = 0; i < users.length; i++) {
          const enrolledCourses = users[i].enrolledCourses || [];
          for (let j = 0; j < enrolledCourses.length; j++) {
            const courseId = enrolledCourses[j].courseId;
            if (filteredCourses.some((course) => course._id === courseId)) {
              totalCount++;
            }
          }
        }
  
        setCount(totalCount);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  

  console.log("filteredCourseArray", filteredCourses);
  console.log(count)

  return (
    <Container>
      <>
        {/* <Card
          title={"Active Courses"}
          value={20}
          icon={<MdIncompleteCircle />}
        />
        <Card
          title={"Completed Courses"}
          value={10}
          icon={<AiOutlineFileDone />}
        /> */}
        <Card
          title={"Total Courses"}
          value={filteredCourses.length}
          icon={<TbSum />}
        />
        <Card title={"Total Students"} value={count} icon={<IoMdSchool />} />
      </>
    </Container>
  );
};

export default TeacherCards;
