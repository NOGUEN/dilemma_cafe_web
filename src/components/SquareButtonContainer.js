import React from "react";
import styled from "styled-components";
import SquareButton from "./SqureButton.js";
import { theme } from "./ui/Theme.js";

const StyledButtonContainer = styled.div`
  gap: ${theme.space.spaceLg};
  display: flex;
  justify-content: left;
  align-items: left;
`;

function ButtonContainer({ data }) {
  return (
    <StyledButtonContainer>
      {data.map((item, index) => (
        <SquareButton key={index} text={item.text} image={item.image} onClick={item.onClick} />
      ))}
    </StyledButtonContainer>
  );
}

export default ButtonContainer;