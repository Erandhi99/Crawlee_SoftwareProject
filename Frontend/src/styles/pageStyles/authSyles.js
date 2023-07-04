import styled from "styled-components";

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   max-width: 500px;
   min-width: 300px;
   width: 50%;
   height: 60%;
   margin: 0% auto;
   padding: 5%;

   a {
      color: #f0634c;
      text-decoration: none;
   }
`;

export const Title = styled.h2`
   font-size: 2.8rem;
   margin: 0px;

   &.forgetPass {
      font-size: 2.2rem;
   }

   &.resetPass {
      font-size: 2rem;
   }

   @media screen and (max-width: 768px) {
      font-size: 2rem;

      &.forgetPass {
         font-size: 1.6rem;
      }
   }
`;

export const FirstMsg = styled.p`
   color: #f0634c;
   margin-bottom: 10px;
   text-align: center;
   font-size: 1.2rem;

   &.signup {
      font-size: 1rem;
   }

   &.forgetPass {
      font-size: 0.8rem;
   }

   &.resetPass {
      font-size: 0.8rem;
   }

   @media screen and (max-width: 768px) {
      font-size: 1rem;
   }
`;

export const FormInput = styled.input`
   width: 100%;
   box-sizing: border-box;
   padding: 15px 40px;
   font-size: 0.95rem;
   border: 2px #777c88 solid;
   border-radius: 10px;
   margin-bottom: 0px;
   box-shadow: inset 0px -3px 0px 0px rgba(187, 187, 187, 0.2);
   transition: box-shadow 0.2s ease-in;
   &::-webkit-input-placeholder {
      opacity: 0.6;
      transition: opacity 0.25s ease-out;
   }
   &:hover::-webkit-input-placeholder,
   &:focus::-webkit-input-placeholder {
      opacity: 0;
   }

   /* &.login,
   &.setNewPass {
      margin-bottom: 30px;
      padding: 15px 40px !important;
   } */

  

   &.error {
      border: 2px solid #e7195a;
   }
`;

//name input field in signup
export const Name = styled.div`
   position: relative;
   width: 100%;
   i {
      position: absolute;
      top: 1rem;
      left: 0.8rem;
      opacity: 0.5;
   }
   margin-bottom: 15px;
`;

//email input field
export const Email = styled.div`
   position: relative;
   width: 100%;
   i {
      position: absolute;
      top: 1rem;
      left: 0.8rem;
      opacity: 0.5;
   }
   margin-bottom: 15px;
`;

//password input field
export const Password = styled.div`
   margin: 0;
   position: relative;
   width: 100%;

   i {
      position: absolute;
      top: 0.92rem;

      &.visibility {
         right: 1rem;
         cursor: pointer;
         opacity: 0.5;
      }

      &.lock {
         left: 0.8rem;
         opacity: 0.5;
      }
   }
   margin-bottom: 15px;
`;

export const RemMeAndForgetPass = styled.div`
   width: 100%;
   margin: 0 0 10px 0;
   display: flex !important;
   align-items: center !important;
   justify-content: space-between !important;
`;

export const CustomCheck = styled.input`
   accent-color: #f0634c;
`;

export const Btn = styled.button`
   background-color: #f0634c;
   padding: 10px;
   margin: 15px 0;
   width: 100px;
   font-size: 1rem;
   color: #ffffff;
   border: none;
   border-radius: 10px;
   cursor: pointer;
   transition: opacity 0.25s ease-out;

   &:hover {
      opacity: 0.8;
   }

   &.google {
      width: 150px;
   }
`;

export const BoldTxt = styled.span`
   font-size: 0.8rem;
   font-weight: 600;
`;

//error on signup and login
export const ErrorMsg = styled.p`
   color: #fc8181;
  font-size: 0.75rem;
  text-align: left;
  margin: 0.1rem 0 0 0;
`;

export const BottomText = styled.div`
   margin-top: 10px;
`;

//login
export const HorizontalLine = styled.div`
   position: relative;
   height: 1px;
   width: 100%;
   margin: 20px 0;
   background-color: #777c88;
   opacity: 0.5;

   &::before {
      content: "Or";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #f5f5f5;
      color: #777c88;
      padding: 0 15px;
   }
`;

//signUp
export const TermsAndCoLink = styled.div`
   margin-top: 5px;
   margin-bottom: 10px;
`;

//Terms And cond
export const TermsAndCoContainer = styled.div`
   border-radius: 20px;
   background-color: rgba(240, 99, 76, 0.12);
   max-width: 70%;
   a {
      color: #f0634c;
      text-decoration: none;
   }
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   max-width: 500px;
   min-width: 300px;
   width: 50%;
   height: 60%;
   margin: 5% auto;
   padding: 5%;

   p {
      text-align: left;
   }
`;

//sent email msg
export const sentEmailMsgContainer = styled.div``;

//password strength
export const PasswordStrengthCard = styled.div`
   border: 1px solid transparent;
   border-radius: 5px;
   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
   overflow: hidden;

   span {
      display: flex;
      flex-direction: row;
      padding: 0 30px 0 0;
      justify-content: flex-start;
      align-items: center;
      font-size: 0.8rem;
   }
`;

//forget password, reset password top icon
export const TopIcon = styled.i`
   opacity: 0.8;
`;

//verify
export const CenterAll = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 100%;
   margin: auto;
   text-align: center;
`;