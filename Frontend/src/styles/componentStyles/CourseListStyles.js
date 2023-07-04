import styled from "styled-components";
import backgroundImage02 from "../../assets/Background02.png";

export const Container02 = styled.div`
  /* background-image:url(${backgroundImage02}) ;
background-Repeat: 'no-repeat';
background-size: cover;
background-position:center; */
  padding-top: 50px;
`;
export const Top = styled.span`
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 400px;
`;

export const Box = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 300px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-content: center;
`;
export const Cimage = styled.div`
  width: 100%;
  height: 100%;
`;

export const Text = styled.span`
  padding: 10px;
  font-weight: bold;
  color: #f0634c;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  width: 110px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0634c;
  border-radius: 20px;
  border: #f0634c;
  color: #ffff;
  left: 700px;
`;