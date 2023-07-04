import React, { useContext } from "react";
import {useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import logo from "../assets/crawleeimg.png";
import { LeftSide, LoginBtn, LogoutBtn, MainContainer, Middle, StyledNavLink, RightSide, btnStyles } from "../styles/componentStyles/NavbarHorizontalStyles";
import { AuthContext } from "../context/AuthContext";


function NavbarHorizontal() {
  const navigate = useNavigate();

  const { user,dispatch } = useContext(AuthContext);

  return (
    <div>
      <MainContainer>
        <LeftSide>
          <img src={logo} alt="logo" className="logo" />
        </LeftSide>

        <Middle>
          <StyledNavLink to="/Pages/">Home</StyledNavLink>

          <StyledNavLink to="/Pages/courses">Courses</StyledNavLink>

          <StyledNavLink to="/Pages/About">About</StyledNavLink>
        </Middle>

        <RightSide>
          {user ? (
            <>
              <StyledNavLink to="/dashboard/">Dashboard</StyledNavLink>
              <LoginBtn>
                <Stack spacing={2} direction="row">
                  <Button
                    onClick={() => {dispatch({ type: "LOGOUT" });}}
                    sx={btnStyles}
                    variant="outlined"
                  >
                    Logout
                  </Button>
                </Stack>
              </LoginBtn>
            </>
          ) : (
            <>
              <LoginBtn>
                <Stack spacing={2} direction="row">
                  <Button
                    onClick={() => navigate("/login")}
                    sx={btnStyles}
                    variant="outlined"
                  >
                    Login
                  </Button>
                </Stack>
              </LoginBtn>

              <LogoutBtn>
                <Stack spacing={2} direction="row">
                  <Button
                    onClick={() => navigate("/signup")}
                    sx={btnStyles}
                    variant="contained"
                  >
                    Sign Up
                  </Button>
                </Stack>
              </LogoutBtn>
            </>
          )}
        </RightSide>
      </MainContainer>
    </div>
  );
}

export default NavbarHorizontal;
