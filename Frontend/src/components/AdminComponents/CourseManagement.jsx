import React, { useEffect, useState } from "react";
import InfoBox from "../../components/AdminComponents/InfoBox";
import {
  GlobalStyle,
  InfoRow,
  InfoTitle,
  TableBox,
  TopRow,
  UserList,
  Container,
  FilterRole,
} from "../../styles/componentStyles/Admin/AdminStyles";
import {
  FaBook,
  FaBan,
  FaTrashAlt,
} from "react-icons/fa";
import {
  VscVmActive
} from "react-icons/vsc";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "../../components/AdminComponents/Search";
import ChangeCourseStatus from "./ChangeCourseStatus";
import axios from 'axios';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Skeleton from "react-loading-skeleton";

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [totalCourses, setTotalCourses] = useState(0);
  const [activeCourses, setActiveCourses] = useState(0);
  const [suspendedCourses, setSuspendedCourses] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [numOfEnrolledStudents, setNumOfEnrolledStudents] = useState({});
  const [instructors, setInstructors] = useState({});
  const [filterStatus, setFilterStatus] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:8800/api/courses", {
        withCredentials: true,
      });
      setCourses(response.data);
      setTotalCourses(response.data.length);
      setActiveCourses(response.data.filter(course => !course.suspended).length);
      setSuspendedCourses(response.data.filter(course => course.suspended).length);

      // Fetch and store the enrolled student count for each course
      const enrolledStudentCounts = {};
      for (const course of response.data) {
        const count = await getEnrolledStudentCount(course._id);
        enrolledStudentCounts[course._id] = count;
      }
      setNumOfEnrolledStudents(enrolledStudentCounts);

      // Fetch and store the instructor's name for each course
      const instructorNames = {};
      for (const course of response.data) {
        const user = await axios.get(`http://localhost:8800/api/users/${course.instructor}`, {
          withCredentials: true,
        });

        instructorNames[course._id] = user.data.username;
      }
      setInstructors(instructorNames);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const getEnrolledStudentCount = async (courseId) => {
    try {
      const response = await axios.get(`http://localhost:8800/api/users/${courseId}/student-count`, {
        withCredentials: true,
      });
      return response.data.totalStudentCount;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterStatusChange = (status) => {
    setFilterStatus(status);
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearchQuery = course.courseName.toLowerCase().includes(searchQuery.toLowerCase());
    if (filterStatus === "all") {
      return matchesSearchQuery;
    } else if (filterStatus === "active") {
      return matchesSearchQuery && !course.suspended;
    } else if (filterStatus === "suspended") {
      return matchesSearchQuery && course.suspended;
    }
    return matchesSearchQuery;
  });

  const deleteCourse = async (courseId) => {
    try {
      confirmAlert({
        title: "Confirm Deletion",
        message: "Are you sure you want to delete this course?",
        buttons: [
          {
            label: "Yes",
            onClick: async () => {
              await axios.delete(
                `http://localhost:8800/api/courses/${courseId}`,
                {
                  withCredentials: true,
                }
              );
              // Fetch courses again after deletion
              fetchCourses();
            },
          },
          {
            label: "No",
            onClick: () => {
              // Do nothing if the user cancels deletion
            },
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <InfoTitle>Course stats</InfoTitle>
        <InfoRow>
          <InfoBox
            bgColor={"#ffe2e6"}
            circleColor={"#fa5a7c"}
            icon={<FaBook size={40} />}
            count={totalCourses.toString()}
            desc={"Total Courses"}
            className="course"
          />
          <InfoBox
            bgColor={"#fff4de"}
            circleColor={"#ff947a"}
            icon={<VscVmActive size={40} />}
            count={activeCourses.toString()}
            desc={"Active Courses"}
            className="course"
          />
          <InfoBox
            bgColor={"#dcfce7"}
            circleColor={"#3cd756"}
            icon={<FaBan size={40} />}
            count={suspendedCourses.toString()}
            desc={"Suspended Courses"}
            className="course"
          />

        </InfoRow>

        <UserList>
          <TopRow>
            <h3>Courses</h3>
            <Search
              placeholder="Search courses by name"
              value={searchQuery}
              onChange={handleSearch}
            />

          </TopRow>
          <FilterRole>
            <label htmlFor="filterRole">Filter by Status :  
            </label> &nbsp; 
            <select
              value={filterStatus}
              onChange={(e) => handleFilterStatusChange(e.target.value)}
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
            </select>
          </FilterRole>
          <br/>
          <TableBox>
            {isLoading ? (
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                      <th>
                        <Skeleton width={40} />
                      </th>
                      <th>
                        <Skeleton width={150} />
                      </th>
                      <th>
                        <Skeleton width={150} />
                      </th>
                      <th>
                        <Skeleton width={100} />
                      </th>
                      <th>
                        <Skeleton width={40} />
                      </th>
                      <td>
                        <Skeleton width={40} />
                      </td>
                    </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, index) => (
                    <tr key={index}>
                      <td>
                        <Skeleton width={40} />
                      </td>
                      <td>
                        <Skeleton width={150} />
                      </td>
                      <td>
                        <Skeleton width={150} />
                      </td>
                      <td>
                        <Skeleton width={100} />
                      </td>
                      <td>
                        <Skeleton width={40} />
                      </td>
                      <td>
                        <Skeleton width={40} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <Table striped bordered hover responsive>
                <thead>
                  <tr className="table-danger">
                    <th>Id</th>
                    <th>Course name</th>
                    <th>Instructor's name</th>
                    <th>Change status</th>
                    <th>Enrolled students</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCourses.map((course, index) => (
                    <tr key={course._id}>
                      <td>{index + 1}</td>
                      <td>{course.courseName}</td>
                      <td>{instructors[course._id] !== undefined ? instructors[course._id] : 'Loading...'}</td>
                      <td>
                        <ChangeCourseStatus
                          courseId={course._id}
                          initialStatus={course.suspended ? "suspended" : "active"}
                          fetchCourses={fetchCourses}
                        />
                      </td>
                      <td>
                        {numOfEnrolledStudents[course._id] !== undefined ? numOfEnrolledStudents[course._id] : 'Loading...'}
                      </td>
                      <th>
                        <FaTrashAlt
                          color="red"
                          onClick={() => deleteCourse(course._id)}
                          style={{ cursor: "pointer" }}
                        />
                      </th>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </TableBox>
        </UserList>
      </Container>
    </>
  );
};

export default CourseManagement;
