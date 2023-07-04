import React, { useContext, useState } from "react";
import styled from "styled-components";
import StudentCards from "../components/StudentCards";
import MyCourses from "../components/MyCourses";
import PopularCourses from "../components/PopularCourses";
import RecentCourses from "../components/RecentCourses";
import Shortcuts from "../components/Shortcuts";
import TeacherCards from "../components/TeacherCards";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Container, Wrapper } from "../styles/pageStyles/DashboardStyles";
import { AuthContext } from "../context/AuthContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}



function Dashboard() {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [query, setQuery] = useState("Dashboard");

  return (
    <>
      <Sidebar setQuery={setQuery} />
      console.log(setQuery);
      <Navbar query={query} />
      <Container>
        {user.isTeacher ? (
          <>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs"
                  textColor="inherit"
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#f0634c",
                    },
                  }}
                >
                  <Tab label="Teaching" {...a11yProps(0)} />
                  <Tab label="Learning" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <TeacherCards />
                <Wrapper>
                  <PopularCourses />
                  <Shortcuts />
                </Wrapper>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <StudentCards />
                <RecentCourses />
                <MyCourses />
              </TabPanel>
            </Box>
          </>
        ) : (
          <>
            <StudentCards />
            <RecentCourses />
            <MyCourses />
          </>
        )}
      </Container>
    </>
  );
}

export default Dashboard;
