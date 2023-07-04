import React from "react";
import { CardIcon, CardTitle, CardTop, CardValue, Container } from "../styles/componentStyles/CardStyles";



const Card = (props) => {
  return (
    <Container>
      <CardTop>
        <CardTitle>{props.title}</CardTitle>
        <CardIcon>{props.icon}</CardIcon>
      </CardTop>
      <CardValue>{props.value}</CardValue>
    </Container>
  );
};

//

export default Card;
