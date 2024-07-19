import React from "react";
import styled from "styled-components";
import { theme } from "./ui/Theme.js";
import SquareButton from "./SqureButton.js";
import FeatureBanner from "./FeatureBanner.js";


const StyledButtonContainer = styled.div`
  gap: ${theme.space.spaceLg};
  grid-gap: ${theme.space.spaceLg};
  grid-template-columns: 1fr 1fr 10fr;
  justify-content: left;
  align-items: left;
  display: grid;
`;

function ButtonContainer({ data }) {
  return (
    <StyledButtonContainer>
      {data.map((item, index) => (
        <SquareButton key={index} text={item.text} image={item.image} onClick={item.onClick} />
      ))}
      <FeatureBanner></FeatureBanner>
    </StyledButtonContainer>
  );
}

export default ButtonContainer;