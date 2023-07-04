import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { BsFillShieldFill } from "react-icons/bs";
import { Alert, IconButton } from "@mui/material";
//import StudentChart from "../components/StudentChart";
import Form from "react-bootstrap/Form";
import CheckIcon from "@mui/icons-material/Check";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  BigContainer,
  ContainerMain,
  Container,
  UserBar,
  RightSection,
  UserIcon,
  UserInfo,
  UserName,
  UserRole,
  LeftSection,
  TickIcon,
  SettingsIcon,
  Container2,
  UserDetailContainer,
  RightSection2,
  UserDetailsSet,
  EmailSet,
  EmailText,
  Email,
  MobileNumberSet,
  MobileNumbeText,
  MobileNumber,
  EditButton,
  LeftSection2,
  EnrolledCoursesContainer,
  EnrolledCoursesItems,
  MainTag,
  CourseList,
  CourseName1,
  CourseName2,
  CourseName3,
  Container3,
  BadgeItems,
  BadgeText,
  BadgeIcons,
  BadgeIcon1,
  BadgeIcon2,
  BadgeIcon3,
} from "../styles/componentStyles/StudentProfileStyles";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import Toast from "react-bootstrap/Toast";
import StudentChart from "../components/StudentChart";

function StudentProfile(props) {
  //getting the context api values
  const { user } = useContext(AuthContext);

  const [login, setLogin] = useState(false);

  //Values of the credentials
  const [name, setName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [userRole, setUserRole] = useState("");
  const [number, setNumber] = useState("");

  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const [showD, setShowD] = useState(false);

  const [courseNames, setCourseNames] = useState({});

const fetchUsers = async (user) => {
  try {
    // Fetch and store the course names for each enrolled course
    const enrolledCourseNames = {};
    for (const enrolledCourse of user.enrolledCourses) {
      const courseResponse = await axios.get(
        `http://localhost:8800/api/courses/${enrolledCourse.courseId}`
      );
      enrolledCourseNames[enrolledCourse.courseId] =
        courseResponse.data.courseName;
    }
    setCourseNames(enrolledCourseNames);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    setUserRole(user.isTeacher ? "Teacher" : "Student");
    fetchUsers(user);
  },[]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  

  const handleClose = () => {
    setName(user.username);
    setEmail(user.email);
    setOpen(false);
    
  };

  const checkEmailFormat = () => {
  // Regular expression to check for valid email addresses
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Check if the email address matches the regular expression
  return regex.test(email);
};

const checkPhoneFormat = () => {
  const regex = /^\+94[0-9]{9}$/;

  // Check if the phone number matches the regular expression
  return regex.test(number);

};

  const ChangeUserName = async (event) => {
    if(name === "rushen"){
      setShowA(true);
      setName(user.username);
    }

    event.preventDefault();
    if (!checkEmailFormat()) {
      setShowB(true);
      setEmail(user.email);
    }


      event.preventDefault();
      if (!checkPhoneFormat()) {
        setShowC(true);
        setNumber("+94769771694");
      }
      
    try {
      const response = await axios.put(
        `http://localhost:8800/api/users/${user._id}`,
        {
          username: name,
          email: email 
        }
      );

      if (response.status === 200) {
      console.log("Success");
      console.log(response.data);
      } else {
        console.log("Error occured");
      }
    } catch (error) {
      console.log("Error occured");
    }
    setOpen(false);
  };

  const getAllUserCourses = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800//api/courses`
      );

      if (response.status === 200) {
        console.log("Success");
        console.log(response.data);
      } else {
        console.log("Error occured");
      }
    } catch (error) {
      console.log("Error occured");
    }
  };

  

  return (
    <>
      
      <Sidebar />
      <Navbar />
      <BigContainer>
        <Container>
          <UserBar>
            <RightSection>
              <UserIcon>
                <IconButton>
                  <FaUserCircle style={{ fontSize: "65px" }} />
                </IconButton>
              </UserIcon>
              <UserInfo>
                <UserName>{name}</UserName>
                <UserRole>{userRole}</UserRole>
              </UserInfo>
            </RightSection>
            <LeftSection>
              <IconButton>
                <SettingsIcon>
                  <AiFillSetting
                    style={{ fontSize: "20px", color: "white" }}
                    onClick={handleClickOpen}
                  />
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>
                      Do you really want to change the user details?
                    </DialogTitle>
                    <DialogContent>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="New User name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="New Email"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="New Mobile Number: use format +94XXXXXXXXX"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </DialogContent>
                    <DialogTitle>
                      Do you really want to change the user details?
                    </DialogTitle>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={ChangeUserName}>Change</Button>
                    </DialogActions>
                  </Dialog>
                  <Toast
                    onClose={() => setShowA(false)}
                    show={showA}
                    delay={3000}
                    autohide
                  >
                    <Toast.Header>
                      <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                      />
                      <strong className="me-auto">Error Occured</strong>
                    </Toast.Header >
                    <Toast.Body
                      className={'Success'}
                    >
                      Username has already been taken
                    </Toast.Body>
                  </Toast>

                  <Toast
                    onClose={() => setShowB(false)}
                    show={showB}
                    delay={3000}
                    autohide
                  >
                    <Toast.Header>
                      <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                      />
                      <strong className="me-auto">Error Occured</strong>
                    </Toast.Header >
                    <Toast.Body>
                      This email is not according to the proper format
                    </Toast.Body>
                  </Toast>
                  <Toast
                    onClose={() => setShowC(false)}
                    show={showC}
                    delay={3000}
                    autohide
                  >
                    <Toast.Header>
                      <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                      />
                      <strong className="me-auto">Error Occured</strong>
                    </Toast.Header >
                    <Toast.Body>
                      This mobile number is not according to the proper format
                    </Toast.Body>
                  </Toast>
                  
                </SettingsIcon>
              </IconButton>
            </LeftSection>
          </UserBar>
        </Container>
        {/* 2nd Container with the user details */}
        <ContainerMain>
          <Container2>
            <UserDetailContainer>
              <RightSection2>
                <UserDetailsSet>User Details</UserDetailsSet>
                <EmailSet>
                  <EmailText>Email</EmailText>
                  <Email>{email}</Email>
                </EmailSet>
                <MobileNumberSet>
                  <MobileNumbeText>Mobile Number</MobileNumbeText>
                  <MobileNumber>{number}</MobileNumber>
                </MobileNumberSet>
              </RightSection2>
              <LeftSection2>
                <EditButton>
                  {/* <MdModeEditOutline
                      style={{ fontSize: "20px", color: "white" }}
                    /> */}
                </EditButton>
              </LeftSection2>
            </UserDetailContainer>
            
            <EnrolledCoursesContainer>
              <EnrolledCoursesItems>
                <MainTag>{user.isTeacher ? (<>Created Courses</>):(<>Enrolled Courses</>)}</MainTag>
                <CourseList>
                    {user.enrolledCourses.map((enrolledCourse) => (
                          <p key={enrolledCourse.courseId}
                          >
                            {courseNames[enrolledCourse.courseId]}
                          </p>
                        ))}
                </CourseList>
              </EnrolledCoursesItems>
            </EnrolledCoursesContainer>

            <EnrolledCoursesContainer>
              <EnrolledCoursesItems>
                <MainTag>Completed Courses</MainTag>
                <CourseList>
                  <CourseName1>Node.js and Express.js - Full Course</CourseName1>
                  <CourseName2>Programming in Java</CourseName2>
                </CourseList>
              </EnrolledCoursesItems>
            </EnrolledCoursesContainer>
          </Container2>
          

          {/* <Container3>
            <BadgeItems>
              <BadgeText>Earned Badges</BadgeText>
              <BadgeIcons>
                <BadgeIcon1>
                  <BsFillShieldFill />
                </BadgeIcon1>
                <BadgeIcon2>
                  <BsFillShieldFill />
                </BadgeIcon2>
                <BadgeIcon3>
                  <BsFillShieldFill />
                </BadgeIcon3>
              </BadgeIcons>
            </BadgeItems>
          </Container3> */}
          <StudentChart/>
        </ContainerMain>
      </BigContainer>
    </>
  );
}

export default StudentProfile;