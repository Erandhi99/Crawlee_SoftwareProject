import styled from "styled-components";
import backgroundImage from "../../assets/Background.png";

export const Container01 = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: "no-repeat";
  background-size: cover;
  background-position: center;
  height: 160vh;
  text-align: center;
`;
export const Top = styled.h1`
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 80px;
`;

export const SpanContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 50px;
`;
export const HLine = styled.div`
  width: 3px;
  background-color: #f0634c;
  height: 40px;
  background-color: #f0634c;
`;

export const Text = styled.span`
  padding: 10px;
  font-weight: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`

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
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  height: 300px;
  column-gap: 150px;
`;

export const AImg = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 450px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 15px 20px 32px rgba(0, 0, 0, 0.2);
  position: relative;
`;