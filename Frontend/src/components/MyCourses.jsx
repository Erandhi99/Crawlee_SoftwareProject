import React, { useState } from "react";
import CourseProgress from "./CourseProgress";
import { HiFilter } from "react-icons/hi";
import Dropdown from "react-bootstrap/Dropdown";
import { BottomContainer, BottomText, Container, CourseContainer, FilterIcon, Header, TopSection } from "../styles/componentStyles/MyCoursesStyles";

const MyCourses = () => {
  
  const [filterName, setFilterName] = useState("courseData")

  return (
    <Container>
      <TopSection>
        <Header>My Courses</Header>
        <FilterIcon>
          {" "}
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              <HiFilter />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setFilterName("courseData")}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => setFilterName("completedCourses")}>Completed Courses</Dropdown.Item>
              <Dropdown.Item >Active Courses</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
        </FilterIcon>
      </TopSection>
      <CourseContainer>
        <CourseProgress filterName={filterName}/>
      </CourseContainer>
      <BottomContainer><BottomText></BottomText></BottomContainer>
    </Container>
  );
};

export default MyCourses;
