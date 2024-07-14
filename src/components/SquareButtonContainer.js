import React from "react";
import styled, { css } from "styled-components";
import SquareButton from "./SqureButton.js";
import { theme } from "./ui/theme.js";

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

function ButtonContainer({ text, image, ...props }) {
  return (
    <StyledButtonContainer>
      <SquareButton></SquareButton>
      <SquareButton></SquareButton>
    </StyledButtonContainer>
  );
}

export default ButtonContainer;