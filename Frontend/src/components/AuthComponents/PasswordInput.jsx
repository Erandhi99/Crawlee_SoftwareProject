import React, { useState } from "react";
import { GlobalStyle, Password, FormInput } from "../../styles/componentStyles/Authentication/AuthStyles";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { IoMdLock } from "react-icons/io";

const PasswordInput = ({
   placeholder,
   value,
   onChange,
   onBlur,
   name,
   onPaste,
   className,
}) => {
   const [showPassword, setShowPassword] = useState(false);

   const togglePassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <>
         <GlobalStyle />
         
            <i className="lock">
               <IoMdLock size={20} />
            </i>

            <FormInput
               type={showPassword ? "text" : "password"}
               placeholder={placeholder}
               className={className}
               required
               name={name}
               value={value}
               onChange={onChange}
               onBlur={onBlur}
               onPaste={onPaste}
            />

            <i className="visibility" onClick={togglePassword}>
               {showPassword ? (
                  <MdVisibilityOff size={20} />
               ) : (
                  <MdVisibility size={20} />
               )}
            </i>
         
      </>
   );
};

export default PasswordInput;
