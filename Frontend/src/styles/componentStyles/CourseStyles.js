import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  max-width: 180px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: #dadada;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    max-width: 185px;
    height: 245px;
  }
`;

export const ImageContainer = styled.img`
  width: 100%;
  background-color: green;
  flex: 5;
  object-fit: cover;
`;
export const InfoContainer = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CourseCategory = styled.span`
  font-size: 13px;
  margin: 5px 0px 0px 10px;
  font-weight: 200;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 155px;
`;

export const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Divider = styled.div`
  background-color: #f0634c;
  width: 90%;
  height: 1px;
`;
export const CourseName = styled.h2`
  font-size: 18px;
  font-weight: 900;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 160px;
  margin: 0px 0px 10px 10px;
`;