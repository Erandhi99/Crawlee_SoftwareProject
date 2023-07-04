import React, { useContext, useEffect, useState } from "react";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { CourseData } from "../data";
import { Container } from "../styles/componentStyles/PopularCoursesStyles";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Box, LinearProgress } from "@mui/material";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const { user } = useContext(AuthContext);
  let filteredArray = [];

  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/courses`)
      .then(({ data }) => {
        setCourses(data);
        if (courses.length != 0) {
          filteredArray = courses.filter(
            (item) => item.instructor === user._id
          );
        }
        setFilteredCourses(filteredArray);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [filteredCourses]);

  return (
    <Container>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>Course Name</th>
            <th>Enrolled</th>
            <th>Status</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredCourses.length !== 0 ? <>
            {filteredCourses.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={item.courseCover[0].url}
                      alt=""
                      style={{
                        width: "45px",
                        height: "45px",
                        objectFit: "cover",
                      }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{item.courseName}</p>
                    </div>
                  </div>
                </td>
                <td>Enrolled Amount</td>
                <td>
                  <MDBBadge color="success" pill>
                    Status
                  </MDBBadge>
                </td>
              </tr>
            ))}</>: <tr style={{color:'#f0634c'}}>You haven't created any courses.</tr>}
        </MDBTableBody>
      </MDBTable>
      
    </Container>
  );
};

export default PopularCourses;
