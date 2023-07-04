import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&family=VT323&display=swap');

   * {
    box-sizing: border-box;
   }

   body {
   background: #F5F5F5;
   margin: 0;
   font-family: 'Poppins', sans-serif;
   }

  
`;

export const Container = styled.div`
 
  ul {
         list-style: none;
      }
  
`;

export const InfoTitle = styled.h3`
    margin:0 0 20px 15px;
`

export const InfoRow = styled.div`
   display: flex;
   justify-content: space-between;
   

   @media screen and (max-width: 600px) {
    width:100%;
    height:100px;
    display: flex !important;
    flex-direction:column !important;
    
    justify-content: flex-start;
   }
`;

export const InfoBoxStyle = styled.div`
   width: 244px;
   height: 127px;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 15px 22.5px;
   border-radius: 15px;
   box-shadow: 5px 5px 4px 0 rgba(0, 0, 0, 0.25);
   margin:0px 0px 20px 10px;

   div.content {
      display: flex;
      align-items: center;
      justify-content: center;
   }

   div.circle {
      align-items: center;
      justify-content: center;
      padding: 10px 12px;
      border-radius: 100%;
   }

   i {
      color: #ffffff;
   }

   div.info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-left: 20px;
   }

   p.count {
      color: #333333;
      font-size: 36px;
      margin: 0;
   }

   p.desc {
      margin: 0;
      color: #5181ed;
      font-weight: 600;
      font-size: 14px;
   }

   &.course{
    width: 350px;
   height: 150px;
   }

   
`;

export const UserList = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   background: #f5f5f5;
   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
   border-radius: 10px;
   padding: 30px;
   margin-top:10px;
   
`;
export const TableBox = styled.div`
   width: 100%;
`;

export const TopRow = styled.div`
   display: flex !important;
   justify-content: space-between !important;
   width: 100%;
   margin-bottom:20px;

   input{
    box-sizing: border-box;
    padding: 10px 30px 10px 30px;
    font-size: 0.8rem;
    border: 2px #777c88 solid;
    border-radius: 10px;
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
   }
`;

export const SearchBox = styled.div`

   position: relative;
   
   i {
      position: absolute;
      top: 0.53rem;
      left: 0.8rem;
      opacity: 0.5;
   }

    input{
    box-sizing: border-box;
    padding: 10px 35px;
    font-size: 0.8rem;
    border: 2px #777c88 solid;
    border-radius: 10px;
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
   }
`

export const SelectRole = styled.form`
    
    select{
        padding:1px 20px;
        border-radius:5px;
    }

    button{
        background-color:#0136EF;
        border-radius:5px;
        border:none;
    }
`  

export const Icon = styled.i`
   cursor: pointer;
`

export const FilterRole = styled.div`
  display: flex; /* Added */
  align-items: center; /* Added */
  margin-right: 10px; /* Added margin */

  select {
    padding: 1px 20px;
    border-radius: 5px;
  }

  button {
    background-color: #0136ef;
    border-radius: 5px;
    border: none;
  }
`;