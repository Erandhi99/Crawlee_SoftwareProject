import React,{useState} from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import AdminSidebar from "../../components/AdminComponents/AdminSidebar";
import UserManagement from "../../components/AdminComponents/UserManagement";





const Container = styled.div`
   display: flex;
   flex-direction: row;
`;

const LeftContainer = styled.div`
   
`

const RightContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`

const TopContainer = styled.div`
   margin-left:255px;
   margin-bottom:30px;
`

const BottomContainer = styled.div`
   margin:0 30px 0 280px;
`


const AdminUserManagement = () => {

   const [query, setQuery] = useState("Dashboard");

   return (
      <Container>
         <LeftContainer>
         <AdminSidebar setQuery={setQuery}/>
         
         </LeftContainer>
         
         <RightContainer>
            <TopContainer>
            <AdminNavbar />
            </TopContainer>
            <BottomContainer>
              <UserManagement/>
              </BottomContainer>
         </RightContainer>
         
      </Container>
   );
};

export default AdminUserManagement;