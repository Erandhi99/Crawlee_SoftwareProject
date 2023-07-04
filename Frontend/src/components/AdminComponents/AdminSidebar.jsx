
import { ImBooks } from "react-icons/im";
import { SiGooglechat } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import {
    FaUsers,
 } from "react-icons/fa";
import logo from "../../assets/logo.png";
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
} from "../../styles/componentStyles/Admin/AdminSidebar";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function AdminSidebar({ setQuery }) {
  const handleClick = (name) => {
    console.log(name);
    setQuery(name);
  };

  const menuItem = [
    {
        path: "/userManagement",
        name: "Users",
        icon: <FaUsers />,
    },
    {
      path: "/courseManagement",
      name: "Courses",
      icon: <ImBooks />,
    },
    {
      path: "/requests",
      name: "Requests",
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

export default AdminSidebar;
