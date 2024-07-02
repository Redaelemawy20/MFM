"use client";
import React from "react";
import Buttonstyle from "./ButtonStyle";
import styled from "styled-components";
interface ButtonProps {
  text: string;
  type: string;
  path: string;
  styleButton?: React.CSSProperties;
}
const Button: React.FC<ButtonProps> = ({
  text,
  type,
  path = "#",
  styleButton,
}) => {
  return (
    <>
      {styleButton && type === "roundedLink" && (
        <RoundedButton href={path} style={styleButton}>
          {text}
        </RoundedButton>
      )}
      {type === "link" && (
        <Buttonstyle href={path ? path : "#"}>{text}</Buttonstyle>
      )}
    </>
  );
};

export default Button;
const RoundedButton = styled.a`
  &:hover {
    color: var(--secondary-color) !important;
    background-color: var(--primary-color);
  }
`;
