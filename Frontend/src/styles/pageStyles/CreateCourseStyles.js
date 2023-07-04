import { ListItemText } from "@mui/material";
import styled from "styled-components";
import { Field, ErrorMessage, FieldArray } from "formik";

export const Container = styled.div`
  height: 100%;
  display: flex;
  margin: 15px 5px 0px 260px;
  padding: 5px 5px 5px 100px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 25px;
  margin: 40px 0px;
`;

export const EditedListItemText = styled(ListItemText)`
  color: black;
  font-size: 80px;
  font-weight: 800;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const DynamicFieldWrapper = styled.div`
 width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f3f3f3;
  border-radius: 10px;
  margin: 0 0 20px 0;
  padding: 20px;
`

export const StyledField = styled(Field)`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 5px;
  width: 80%;
  font-weight: 500;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
`
export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 10px;
  font-weight: 400;
  color: red;
`
export const StyledButton = styled.button`
  width: fit-content;
  padding: 4px 8px;
  font-size: 14px;
  background-color: #f0634c;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 400;
  margin: 20px 0;
`
export const SubmitButton = styled(StyledButton)`
  padding: 7px 14px;
  font-size: 16px;
  &:disabled{
    background-color: #e69587;
  }
`

export const StyledSecondaryButton = styled.button`
  width: fit-content;
  padding: 4px 8px;
  font-size: 14px;
  background-color: transparent ;
  color: #f0634c;
  border: 1px solid #f0634c;
  border-radius: 5px;
  font-weight: 400;
 
`
export const CourseTypeSection = styled.div`
  display: flex;
  margin-left: 20px;
  font-size: 14px;
  color: rgba(119, 124, 136, 1);
`;

export const ImageWrapper = styled.div`
  display: flex;
`