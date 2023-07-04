import React, { useContext } from "react";
import { RiNotification2Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CenterContainer, Container, Icon, IconBtn, LeftContainer, Line, LinkText, LogoutBtn, NameContainer, RightContainer, Role, Username } from "../styles/componentStyles/NavbarStyles";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";


export default function Navbar({ query }) {
  const teacher = true;
  const [show, setShow] = useState(false);
  const [ isProfile , setIsProfile] = useState(false)

  const navigate = useNavigate()

  
  const { user,dispatch } = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleProfile = () => {
    setIsProfile(true);
    navigate("/profile");

  }
  return (
    <Container data-aos="fade-down">
      <LeftContainer>{isProfile? query = "User Profile": query}</LeftContainer>
      <CenterContainer>
        {user.isTeacher ? (
          <></>
        ) : (
          <>
            <LogoutBtn onClick={handleShow}>
              <IconBtn>
                <FaChalkboardTeacher />
              </IconBtn>
              <LinkText>Become a Teacher</LinkText>
            </LogoutBtn>

            <Modal show={show} onHide={handleClose} size="xl">
              <Modal.Header closeButton>
                <Modal.Title>How to become an Instructor</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className="mb-3">
                  <Row>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="name"
                          placeholder="First Name"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="name"
                          placeholder="Last Name"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group 
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="tel"
                          placeholder="Phone Number"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <div className="mb-1">
                      <b>Gender *</b>
                    </div>

                    <Col>
                      <div className="mb-4">
                        <Form.Check 
                          inline
                          label="Male"
                          name="group1"
                          type="radio"
                        />
                        <Form.Check
                          inline
                          label="Female"
                          name="group1"
                          type="radio"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                  <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Subjects"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                  <Col>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                           as="textarea" rows={3} 
                          placeholder="Experience/Qualifications *"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                  <Col>
                      <Form.Group
                        className="mb-1"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          autoFocus
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      
                    </Col>
                  </Row>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" style={{ backgroundColor: '#f0634c', border:'none' }} onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
      </CenterContainer>
      <RightContainer>
        <Icon>
          <RiNotification2Fill />
        </Icon>
        <Line></Line>
        <Icon>
          <FaUserCircle />
        </Icon>
        
        <NameContainer onClick={handleProfile}>
          <Username style={{cursor:'pointer'}}>{user.username}</Username>
          <Role>{user.isTeacher ? 'Teacher' : 'Student'}</Role>
        </NameContainer>
      </RightContainer>
    </Container>
  );
}
