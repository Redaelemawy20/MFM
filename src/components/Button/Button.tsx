"use client";
import Link from "next/link";
import React from "react";
import Buttonstyle from "./ButtonStyle";
interface ButtonProps {
  text: string;
  type: string;
}
const Button: React.FC<ButtonProps> = ({ text, type }) => {
  return <Buttonstyle href="#">{type === "link" && text}</Buttonstyle>;
};
//   return <button onClick={handleClick}>{text}</button>;

//
export default Button;
