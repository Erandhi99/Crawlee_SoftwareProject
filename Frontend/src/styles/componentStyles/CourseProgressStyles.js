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

export const Wrapper = styled.div`
    
`

export const Container = styled.div`
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
  cursor: pointer;
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
  width: 80%;

  display: flex;
  flex-direction: column;
`;
export const CourseCategory = styled.span`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 300;
  color: rgba(119, 124, 136, 1);
`;
export const CourseName = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 3px;
`;