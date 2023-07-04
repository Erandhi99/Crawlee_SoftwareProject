import React from "react";
import image11 from "../assets/11 1.png";
import image22 from "../assets/22 1.png";
import image33 from "../assets/33 1.png";
import { AImg, ButtonWrapper, Container01, HLine, ImgContainer, SpanContainer, StyledButton, Text, Top } from "../styles/componentStyles/HeroSectionStyles";


function Home() {
  return (
    <div>
      <Container01>
        <Top>
          Grow Your Skills to <br></br>Advance Your Career Path.
        </Top>

        <SpanContainer>
          <Text>No Payment Method </Text>
          <HLine></HLine>
          <Text>Free For Students </Text>
          <HLine></HLine>
          <Text>Free For Teachers </Text>
        </SpanContainer>
        <ButtonWrapper>
          <StyledButton>Enroll Now</StyledButton>
        </ButtonWrapper>

        <ImgContainer>
          <AImg>
            <img src={image22} />
          </AImg>
          <AImg style={{ backgroundColor: "#F0634C" }}>
            <img src={image11} />
          </AImg>
          <AImg>
            <img src={image33} />
          </AImg>
        </ImgContainer>
      </Container01>
    </div>
  );
}

export default Home;
