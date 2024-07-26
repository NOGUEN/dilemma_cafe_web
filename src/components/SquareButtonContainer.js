import React from "react";
import styled from "styled-components";
import { theme } from "./ui/Theme.js";
import SquareButton from "./SqureButton.js";
import FeatureBanner from "./FeatureBanner.js";
import { ReactComponent as DilemmaIcon } from "../assets/dilemma_icon.svg";
import { ReactComponent as DilemmaListIcon } from "../assets/dilemma_list_icon.svg";
import { useNavigate } from "react-router-dom";


const StyledButtonContainer = styled.div`
  gap: ${theme.space.spaceLg};
  grid-gap: ${theme.space.spaceLg};
  grid-template-columns: 1fr 1fr 10fr;
  justify-content: left;
  align-items: left;
  display: grid;
`;

function ButtonContainer() {
  const navigate = useNavigate();

  return (
    <StyledButtonContainer>
      <SquareButton
        key={0}
        text={"오늘의 딜레마"}
        image={<DilemmaIcon width={theme.icon.icon2Xl} height={theme.icon.icon2Xl}/>}
        onClick={() => {}}
      />
      <SquareButton
        key={1}
        text={"딜레마 전체보기"}
        image={<DilemmaListIcon width={theme.icon.icon2Xl} height={theme.icon.icon2Xl}/>}
        onClick={() => {navigate("/dilemma")}}
      />
      <FeatureBanner></FeatureBanner>
    </StyledButtonContainer>
  );
}

export default ButtonContainer;