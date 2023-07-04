import styled from "styled-components";


export const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  background-color: rgba(245, 245, 245, 1);
  border-radius: 15px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  top: 0;
`;

export const FilterIcon = styled.div`
  font-size: 20px;
  padding: 0px 5px;
  border-radius: 10px;
  color: #f0634c;
  cursor: pointer;
`;

export const CourseContainer = styled.div`
  margin-top: 20px;
`;

export const BottomContainer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
`
export const BottomText = styled.span`
  color: #f0634c;
  font-weight: 300;
  cursor: pointer;
`
export const Header = styled.h2``;