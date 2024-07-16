import React from "react";
import styled from "styled-components";
import SquareButton from "./SqureButton.js";

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  gap: 16px;
  margin: 20px 0px 0px 20px;
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