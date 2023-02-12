import React from "react";
import TitleStyled from "./TitleStyled";

interface TitleProps {
  text: string;
  description: string;
}

const Title = ({ text, description }: TitleProps) => {
  return (
    <TitleStyled>
      <span>{text}</span>
      {description}
    </TitleStyled>
  );
};

export default Title;
