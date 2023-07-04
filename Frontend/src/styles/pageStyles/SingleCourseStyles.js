import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

export const Top = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  background: #d1913c; 
  background: -webkit-linear-gradient(
    to right,
    #ffd194,
    #d1913c
  ); 
  background: linear-gradient(
    to right,
    #ffd194,
    #d1913c
  ); 

  padding: 20px;
  border-radius: 10px;
  width: 70%;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
`;

export const ImageContainer = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cove2;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;


export const Bottom = styled.div`
    width: 70%;
    margin-bottom: 40px;
`;

export const CourseName = styled.h2`
  font-weight: 700;
  margin-bottom: 30px;
`;

export const CourseDesc = styled.div`
  margin-bottom: 20px;
`;

export const Ratings = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const InstructorName = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const EnrollBtn = styled.button`
    width: fit-content;
    padding: 4px 10px;
    border-radius: 5px;
    background-color: white;
    border: none;
    color: #f0634c;
    font-weight: 600;
`;