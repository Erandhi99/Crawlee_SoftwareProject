import React from "react";
import { ImBooks } from "react-icons/im";
import { BottomSection, Button, Container, Header, Icon, MiddleSection, Shortcut, ShortcutName, TopSection } from "../styles/componentStyles/ShortcutsStyles";


const Shortcuts = () => {
  return (
    <Container>
      <TopSection>
        <Header>Shortcuts</Header>
      </TopSection>
      <MiddleSection>
        <Shortcut>
          <Icon>
            <ImBooks />
          </Icon>
          <ShortcutName>Created Courses</ShortcutName>
        </Shortcut>
        <Shortcut>
          <Icon>
            <ImBooks />
          </Icon>
          <ShortcutName>Created Courses</ShortcutName>
        </Shortcut>
        <Shortcut>
          <Icon>
            <ImBooks />
          </Icon>
          <ShortcutName>Created Courses</ShortcutName>
        </Shortcut>
      </MiddleSection>
      <BottomSection>
        <Button>Create Course</Button>
      </BottomSection>
    </Container>
  );
};

export default Shortcuts;
