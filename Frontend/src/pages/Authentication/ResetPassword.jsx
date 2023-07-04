
import React, {useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
   GlobalStyle,
   Form,
   Title,
   FirstMsg,
   TopIcon,
   Btn,
   BoldTxt,
   ErrorMsg,
   Password,
} from "../../styles/componentStyles/Authentication/AuthStyles";
import PasswordInput from "../../components/AuthComponents/PasswordInput";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from "react-toastify";
import axios from "axios";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { resetToken } = useParams();

  const {values,
    errors,
    handleChange,
    handleBlur,
    touched,
    isSubmitting,
    handleSubmit,} = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Password is required")
        .matches(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
          "Please create a stronger password"
        ),
      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.patch(
          `http://localhost:8800/api/auth/resetPassword/${resetToken}`,
          {
            password: values.password,
          }
        );

        if (response.status === 200) {
          toast.success(response.data.message);
          navigate("/login");
        } else {
          toast.error("Password reset failed");
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <>
         <GlobalStyle />
         <Form onSubmit={handleSubmit}>
            <TopIcon>
               <RiLockPasswordFill size={50}/>
            </TopIcon>
            <Title className="resetPass">Set new password</Title>
            <FirstMsg className="resetPass">
               New password must be different to previous password
            </FirstMsg>

            <Password>
               <PasswordInput
                  className={touched.password && errors.password ? "error" : ""}
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
               />
               {touched.password && errors.password && (
                  <ErrorMsg>{errors.password}</ErrorMsg>
               )}
            </Password>

            <Password>
               <PasswordInput
                  className={touched.confirmPassword && errors.confirmPassword ? "error" : ""}
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onPaste={(e) => {
                     e.preventDefault();
                     toast.error("Cannot paste password");
                     return false;
                  }}
               />
               {touched.confirmPassword && errors.confirmPassword && (
                  <ErrorMsg>{errors.confirmPassword}</ErrorMsg>
               )}
            </Password>

            <Btn type="submit" disabled={isSubmitting}>Reset</Btn>

            <BoldTxt>
               <Link to="/login" className="boldTxt">
                  Back to login
               </Link>
            </BoldTxt>
         </Form>
      </>
  );
};

export default ResetPassword;
