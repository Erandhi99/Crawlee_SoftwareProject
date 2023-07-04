
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import AdminSidebar from "../../components/AdminComponents/AdminSidebar";
import CourseManagement from "../../components/AdminComponents/CourseManagement";



const GlobalStyle = createGlobalStyle`
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


const AdminCourseManagement = () => {
   return (
    <Container>
    <LeftContainer>
    <AdminSidebar />
    
    </LeftContainer>
    
    <RightContainer>
       <TopContainer>
       <AdminNavbar />
       </TopContainer>
       <BottomContainer>
         <CourseManagement/>
         </BottomContainer>
    </RightContainer>
    
 </Container>
         );
};

export default AdminCourseManagement;