import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px;
  width: 300px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.color === "yes"
      ? "#4caf50"
      : props.color === "no"
      ? "#f44316"
      : "#ffc107"};
  color: green;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
  }
`;

const NameCard = ({ name, onYes, onNo, onMaybe}) => (
  <Card
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
  >
    <h2>{name}</h2>
    <ButtonGroup>
      <Button color="yes" onClick={onYes}>
        Yes
      </Button>
      <Button color="no" onClick={onNo}>
        No
      </Button>
      <Button color="maybe" onClick= {onMaybe}>
        Maybe
      </Button>
    </ButtonGroup>
  </Card>
);

export default NameCard;
