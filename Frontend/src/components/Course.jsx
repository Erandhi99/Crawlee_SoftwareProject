import React from "react";
import { CourseData } from "../data";
import {Container,CourseCategory,CourseName,Divider,DividerContainer,ImageContainer,InfoContainer, Wrapper } from "../styles/componentStyles/CourseStyles";




const Course = ({image,category,coursename}) => {
  return (
    <Wrapper CourseData={CourseData}>
      
        <Container>
          <ImageContainer src={image} />
          <InfoContainer>
            <CourseCategory>{category}</CourseCategory>
            <DividerContainer>
              <Divider />
            </DividerContainer>

            <CourseName>{coursename}</CourseName>
          </InfoContainer>
        </Container>
    </Wrapper>
  );
};

export default Course;
