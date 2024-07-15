import React from "react";
import styled, { css } from "styled-components";
import { theme } from "./ui/theme.js";

const StyledSquareButton = styled.button`
  width: 200px;
  height: 200px;
  display: flex;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: none;
  background-color: ${theme.color.primary};
  position: relative;
`;

const TopLeftText = styled.div`
  position: absolute;
  top: 12px;
  left: 18px;
  color: black;
  font-family: "JalnanGothic";
  font-size: 20px;
`;

const BottomRightImage = styled.div`
  position: absolute;
  bottom: 6px;
  right: 12px;
`;

function SquareButton({ text, image, ...props }) {
  return (
    <StyledSquareButton {...props}>
      <TopLeftText>{text}</TopLeftText>
      <BottomRightImage>{image}</BottomRightImage>
    </StyledSquareButton>
  );
}

export default SquareButton;