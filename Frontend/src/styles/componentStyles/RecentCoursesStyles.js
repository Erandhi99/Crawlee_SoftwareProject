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
  display: flex;
  width: fit-content;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  background-color: rgba(245, 245, 245, 1);
  border-radius: 15px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const CourseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  overflow: hidden;
  height: fit-content;
`;

export const Title = styled.span`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
`;


