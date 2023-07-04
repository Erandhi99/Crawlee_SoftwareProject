import styled from "styled-components";
import backgroundImage from "../../assets/Background.png";
import backgroundImage02 from "../../assets/Background02.png";

export const Container03 = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: "no-repeat";
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export const Top = styled.span`
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #f0634c;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const SpanContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 300px;
  column-gap: 50px;
`;

export const TextBox = styled.div`
  width: 450px;
  height: 200px;
  padding-top: 20px;
  position: relative;
  text-align: center;
`;

export const Text = styled.span`
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  font-style: italic;
  font-size: larger;
`;

export const Para = styled.span`
  margin: 50px;
  position: relative;
  top: 40px;
`;

export const Container04 = styled.div`
  background-image: url(${backgroundImage02});
  background-repeat: "no-repeat";
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export const AImg = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 300px;
  margin-left: 220px;
  border-radius: 10px;
  position: relative;
`;

export const StyledButton = styled.button`
  width: 110px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0634c;
  border-radius: 10px;
  border: #f0634c;
  color: #ffff;
  position: relative;
  left: 435px;
`;

export const Title = styled.div`
    padding-left: 250px;
`