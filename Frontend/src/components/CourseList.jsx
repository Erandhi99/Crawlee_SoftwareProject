import React from "react";
import course01Img from "../assets/AI.jpg";
import course02Img from "../assets/course02.jpeg";
import course03Img from "../assets/Python.png";
import course04Img from "../assets/C++.png";
import course05Img from "../assets/WebDev.jpg";
import course06Img from "../assets/Full stack.png";
import course07Img from "../assets/ComArchi.jpeg";
import course08Img from "../assets/ComNet.jpg";
import { Box, ButtonContainer, Cimage, Container02, ImgContainer, Text, Top, Button } from "../styles/componentStyles/CourseListStyles";


function Course() {
  return (
    <div>
      <Container02>
        <Top>
          Courses
          <h1 className="course">Find Your Perfect Course</h1>
        </Top>

        <ImgContainer>
          <Box>
            <Text>Artificial Intelligent</Text>
            <Cimage>
              <img
                src={course01Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
          <Box>
            <Text>UI/UX Design</Text>
            <Cimage>
              <img
                src={course02Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
          <Box>
            <Text>Python</Text>
            <Cimage>
              <img
                src={course03Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
          <Box>
            <Text>C++ fo Beginers</Text>
            <Cimage>
              <img
                src={course04Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
        </ImgContainer>
        <ImgContainer>
          <Box>
            <Text>Web Devolopment for Beginers</Text>
            <Cimage>
              <img
                src={course05Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
          <Box>
            <Text>Full Stack course</Text>
            <Cimage>
              <img
                src={course06Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
          <Box>
            <Text>Computer Architecture</Text>
            <Cimage>
              <img
                src={course07Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
          <Box>
            <Text>Computer networking</Text>
            <Cimage>
              <img
                src={course08Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
        </ImgContainer>
        <ButtonContainer>
          <Button>See more →</Button>
        </ButtonContainer>
      </Container02>
    </div>
  );
}

export default Course;
