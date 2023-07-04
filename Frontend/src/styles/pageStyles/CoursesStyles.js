import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: unset;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: unset;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  margin: 15px 5px 0px 260px;
  padding: 5px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  height: 20px;
  width: 2px;
  margin: 0px 20px;
  background-color: rgba(119, 124, 136, 1);
`;

export const CourseContainer = styled.div`
  height: 100%;
  background-color: rgba(245, 245, 245, 1);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.h4`
  margin-left: 20px;
`;

export const CreateCourse = styled.div``;
export const Button = styled.button`
  padding: 12px;
  border-radius: 10px;
  border: none;
  background-color: rgba(240, 99, 76, 1);
  color: white;
  transition: all 0.1s ease-in;
  &:hover {
    padding: 13px;
  }
`;

export const CourseTypeSection = styled.div`
  display: flex;
  margin-left: 20px;
  font-size: 14px;
  color: rgba(119, 124, 136, 1);
`;
export const CourseType = styled.div``;

export const CourseTab = styled.div`
  width: 100%;
  display: flex;
`;

export const Wrapper = styled.div`
  flex: 9;
  width: 100%;
`;

export const CourseBar = styled.div`
  margin: 5px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  box-shadow: #dadada;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  background-color: white;
  overflow: hidden;
`;

export const ImageContainer = styled.img`
  align-items: center;
  width: 60px;
  height: 60px;
  margin-left: 15px;
  border-radius: 50%;
  background-color: red;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  font-size: 10px;
  height: 90%;
  width: 75%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const CourseCategory = styled.span`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 300;
  color: rgba(119, 124, 136, 1);
`;

export const CourseInstructor = styled.span`
  
  font-size: 16px;
  font-weight: 400;
  color: rgba(119, 124, 136, 1);
`;
export const CourseName = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 3px;
  cursor: pointer;
`;

export const Icon = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const EditButton = styled.button`
  padding: 5px 8px;
  border-radius: 10px;
  &:hover {
    padding: 6px 9px;
  }
`;
export const DeleteButton = styled.button`
  padding: 5px 8px;
  border-radius: 10px;
  border: 2px solid rgba(240, 99, 76, 1);
  color: rgba(240, 99, 76, 1);
  &:hover {
    padding: 6px 9px;
  }
`;