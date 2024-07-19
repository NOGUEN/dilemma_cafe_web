import React from "react";
import styled from "styled-components";
import { theme } from "./ui/Theme.js";

const StyledSquareButton = styled.button`
  padding: ${theme.space.spaceLg} ${theme.space.spaceXl};
  border-radius: ${theme.radius.radiusMd};
  background-color: ${theme.color.primary};
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  border: none;
  position: relative;
  cursor: pointer;
`;

const StyledTopLeftText = styled.div`
  color: ${theme.color.black};
  ${theme.fontstyle.display}
  word-break: keep-all;
  text-align: left;
`;

const StyledBottomRightImage = styled.div`
  stroke: ${theme.color.black};
  bottom: ${theme.space.spaceSm};
  right: ${theme.space.spaceMd};
  position: absolute;
`;

function SquareButton({ text, image, onClick }) {
  return (
    <StyledSquareButton onClick={onClick}>
      <StyledTopLeftText>{text}</StyledTopLeftText>
      <StyledBottomRightImage>{image}</StyledBottomRightImage>
    </StyledSquareButton>
  );
}

export default SquareButton;