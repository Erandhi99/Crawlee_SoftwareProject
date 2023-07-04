import { AiOutlineDashboard } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { SiGooglechat } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import logo from "../assets/logo.png";
import {
  BottomSection,
  Container,
  Icon,
  Link,
  LinkText,
  Logo,
  LogoContainer,
  LogoutBtn,
  SidebarContainer,
  StyledLink,
  TopSection,
} from "../styles/componentStyles/SideBarStyles";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Sidebar({ setQuery }) {
  const handleClick = (name) => {
    console.log(name);
    setQuery(name);
  };

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <AiOutlineDashboard />,
    },
    {
      path: "/courses",
      name: "Courses",
      icon: <ImBooks />,
    },
    {
      path: "http://127.0.0.1:5173",
      name: "Messages",
      icon: <SiGooglechat />,
    },
    {
      path: "/",
      name: "Site Home",
      icon: <TbWorld />,
    },
  ];

  const { dispatch } = useContext(AuthContext);

  return (
    <Container>
      <SidebarContainer>
        <TopSection>
          <NavLink to="/">
            <LogoContainer>
              <Logo src={logo} alt="logo" />
            </LogoContainer>
          </NavLink>
        </TopSection>
        <Link>
          {menuItem.map((item, index) => (
            <StyledLink
              to={item.path}
              key={index}
              className="linkItem"
              activeclassname="active"
              onClick={() => handleClick(item.name)}
            >
              <Icon>{item.icon}</Icon>
              <LinkText>{item.name}</LinkText>
            </StyledLink>
          ))}
        </Link>
        <BottomSection>
          <NavLink to="/" style={{textDecoration:'none'}}>
            <LogoutBtn
              onClick={() => {
                dispatch({ type: "LOGOUT" });
              }}
            >
              <Icon>
                <BiLogOut />
              </Icon>
              <LinkText>Log Out</LinkText>
            </LogoutBtn>
          </NavLink>
        </BottomSection>
      </SidebarContainer>
    </Container>
  );
}

export default Sidebar;
