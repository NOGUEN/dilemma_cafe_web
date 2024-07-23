import DilemmaToggleButton from "../components/DilemmaToggleButton";
import NavigationBar from "../components/NavigationBar";
import getNavBarData from "../constants/NavBarData";
import DilemmaButton from "../components/DilemmaButton";
import styled from "styled-components";
import { theme } from "../components/ui/Theme";
import { useState } from "react";

const ButtonWrapper = styled.div`
  margin: ${theme.space.spaceLg} ${theme.space.spaceZero};
`;

function DilemmaPage() {
  const [isToggle, setIsToggle] = useState([true, false]);

  function onClickFunction(index) {
    setIsToggle([index === 0, index === 1]);
  }

  return (
    <>
      <NavigationBar data={getNavBarData()}></NavigationBar>
      <DilemmaToggleButton isToggle={isToggle} onClick={onClickFunction}></DilemmaToggleButton>
      <ButtonWrapper>
        <DilemmaButton buttonTitleText={"투표"}></DilemmaButton>
      </ButtonWrapper>
    </>
  );
}

export default DilemmaPage;