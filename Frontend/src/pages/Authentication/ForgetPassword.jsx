import React from 'react';
import { MdEmail } from "react-icons/md";
import { ImMail4 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
   GlobalStyle,
   Form,
   Title,
   FirstMsg,
   FormInput,
   Btn,
   BoldTxt,
   Email,
   TopIcon,
   ErrorMsg
} from "../../styles/componentStyles/Authentication/AuthStyles";
import NavbarHorizontal from "../../components/NavbarHorizontal";
import { Container, TopContainer, BottomContainer } from "../../styles/pageStyles/AuthAndAdmin/AuthPageStyles"

const ForgetPassword = () => {
   const navigate = useNavigate();

   const formik = useFormik({
      initialValues: {
         email: "",
      },
      validationSchema: Yup.object({
         email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
      }),
      onSubmit: async (values) => {
         try {
            await axios.post("http://localhost:8800/api/auth/forgotPassword", { email: values.email }, {
               withCredentials: true,
             });
            toast.success("Password Reset Email Sent");
         } catch (error) {
            toast.error(error.message);
            console.log(error);
         }
      },
   });

   return (
      <Container>
         <TopContainer>
            <NavbarHorizontal />
         </TopContainer>

         <BottomContainer>
            <GlobalStyle />
            <Form onSubmit={formik.handleSubmit}>
               <TopIcon>
                  <ImMail4 size={50} />
               </TopIcon>
               <Title className="forgetPass">Forget Password</Title>
               <FirstMsg className="forgetPass">
                  No worries, we’ll send you reset instructions
               </FirstMsg>

               <Email>
                  <i className="email">
                     <MdEmail size={18} />
                  </i>
                  <FormInput
                     type="email"
                     className={formik.touched.email && formik.errors.email ? "error" : ""}
                     placeholder="Email"
                     required
                     name="email"
                     value={formik.values.email}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
               </Email>
               {formik.touched.email && formik.errors.email && (
                  <ErrorMsg>{formik.errors.email}</ErrorMsg>
               )}

               <Btn type="submit" className="btn">
                  Send
               </Btn>

               <BoldTxt>
                  <Link to="/login" className="boldTxt">
                     Back to login
                  </Link>
               </BoldTxt>
            </Form>
         </BottomContainer>
         <ToastContainer />
      </Container>
   );
};

export default ForgetPassword;
