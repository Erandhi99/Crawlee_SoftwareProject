import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 0.15em;
  text-align: center;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  cursor: pointer;
`;

export const Middle = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-decoration: none;
  transition: 0.6s;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  display: inline-block;
  color: #5e5f62;
  margin-right: 60px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  padding-bottom: 1px;

  &:hover {
    color: #f2563e;
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #f2563e;
    transition: width 0.4s ease-in-out, left 0.4s ease-in-out;
    transform: translateX(-50%);
  }

  &.active {
    color: #f2563e;
  }
  &.active:after {
    color: #f2563e;
    width: 100%;
  }

  text-decoration: none;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  padding: 20px;
  border: none;
  cursor: pointer;
`;

export const LoginBtn = styled.button`
  margin: 10px;
  border: none;
  background-color: transparent;
  text-decoration: none;
  box-shadow: none;
`;

export const LogoutBtn = styled.button`
  margin: 10px;
  border: none;
  background-color: transparent;
  text-decoration: none;
  box-shadow: none;
`;

export const Icon = styled.div`
  font-size: 30px;
  cursor: pointer;
`;


export const btnStyles = {
    "&.MuiButton-text": {
      color: "#5e5f62",
      textTransform: "none",
      padding: "10px 20px",
      borderRadius: "15px",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "36px",
      letterSpacing: "0em",
      textAlign: "center",
    },
    "&.MuiButton-text.active": {
      color: "#000000",
      textTransform: "none",
      padding: "10px 20px",
      borderRadius: "15px",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "36px",
      letterSpacing: "0em",
      textAlign: "center",
    },

    "&.MuiButton-outlined": {
      color: "#F0634C",
      border: "2px solid #F0634C",
      borderRadius: "15px",
      textTransform: "none",
      padding: "10px 30px",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "36px",
      letterSpacing: "0em",
      textAlign: "center",
    },
    "&.MuiButton-contained": {
      background: "#F0634C",
      borderRadius: "15px",
      textTransform: "none",
      padding: "10px 30px",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "36px",
      letterSpacing: "0em",
      textAlign: "center",
    },
  };