import React from "react";
import graduate from "../assets/Graduated.jpg";
import { AImg, Container03, Container04, Para, SpanContainer, StyledButton, Text, TextBox, Title, Top } from "../styles/componentStyles/AboutUsStyles";


function AboutUs() {
  return (
    <div>
      <Container03>
        <Top>
          <h2>About Us</h2>
        </Top>

        <SpanContainer>
          <TextBox>
            <Text>Why Us</Text>

            <Para>
              I see this opportunity as a way to contribute to an
              exciting/forward-thinking/fast-moving company/industry, and I feel
              I can do so by/with my …” “I feel my skills are particularly
              well-suited to this position because "
            </Para>
          </TextBox>
        </SpanContainer>
        <SpanContainer>
          <TextBox>
            <Text>Great Experience</Text>

            <Para>
              I see this opportunity as a way to contribute to an
              exciting/forward-thinking/fast-moving company/industry, and I feel
              I can do so by/with my …” “I feel my skills are particularly
              well-suited to this position because "
            </Para>
          </TextBox>
          <TextBox>
            <Text>Dedicated Team</Text>

            <Para>
              I see this opportunity as a way to contribute to an
              exciting/forward-thinking/fast-moving company/industry, and I feel
              I can do so by/with my …” “I feel my skills are particularly
              well-suited to this position because "
            </Para>
          </TextBox>
          <TextBox>
            <Text>Free For All</Text>

            <Para>
              I see this opportunity as a way to contribute to an
              exciting/forward-thinking/fast-moving company/industry, and I feel
              I can do so by/with my …” “I feel my skills are particularly
              well-suited to this position because "
            </Para>
          </TextBox>
        </SpanContainer>
      </Container03>
      <Container04>
        <Top><h2>Our Mission</h2></Top>
        <Title><h1>Build Better For Best Economy</h1></Title>
        <SpanContainer>
          <TextBox>
            <Para margin-right={100}>
              I see this opportunity as a way to contribute to an
              exciting/forward-thinking/fast-moving company/industry, and I feel
              I can do so by/with my …” “I feel my skills are particularly
              well-suited to this position because " I see this opportunity as a
              way to contribute to an exciting/forward-thinking/fast-moving
              company/industry, and I feel I can do so by/with my …” “I feel my
              skills are particularly well-suited to this position because "
            </Para>
          </TextBox>
          <AImg>
            <img height={500} src={graduate} style={{ borderRadius: "15px" }} />
          </AImg>
        </SpanContainer>
        <StyledButton>Join With Us</StyledButton>
      </Container04>
    </div>
  );
}

export default AboutUs;
