import React from "react";
import styled, { css } from "styled-components";
import SquareButton from "./SqureButton.js";

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  gap: 16px;
`;

function ButtonContainer() {
  return (
    <StyledButtonContainer>
      <SquareButton text={"오늘 랜덤 딜레마"}></SquareButton>
      <SquareButton text={"전체 딜레마"}></SquareButton>
    </StyledButtonContainer>
  );
}

export default ButtonContainer;