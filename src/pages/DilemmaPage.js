import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import DilemmaToggleButton from "../components/DilemmaToggleButton";
import NavigationBar from "../components/NavigationBar";
import getNavBarData from "../constants/NavBarData";
import DilemmaButton from "../components/DilemmaButton";
import DilemmaInputField from "../components/InputField";
import DilemmaDescription from "../components/DilemmaDescription";
import { theme } from "../components/ui/Theme";
import useFetchDilemma from '../hooks/useFetchDilemma';
import BlinkingText from '../components/BlinkingText';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: ${theme.space.spaceLg};
`;

const StyledTitle = styled.div`
  ${theme.fontstyle.display3}
  color: ${theme.color.white};
`;

function DilemmaPage() {
  const { dilemmaId } = useParams();
  const { data: dilemma, loading, error, isVisible } = useFetchDilemma(dilemmaId);
  const [isToggle, setIsToggle] = useState([false, false]);
  const location = useLocation();
  const { titleText } = location.state || {};

  const toggleButtonData = [
    {
      isToggle: isToggle[0],
      onClick: () => onClickFunction(0),
      dilemmaText: dilemma?.dilemma1,
    },
    {
      isToggle: isToggle[1],
      onClick: () => onClickFunction(1),
      dilemmaText: dilemma?.dilemma2,
    },
  ];

  function onClickFunction(index) {
    setIsToggle([index === 0, index === 1]);
  }

  function isAvailable() {
    return isToggle.includes(true);
  }

  if (loading)
    return (
      <PageWrapper>
        <NavigationBar data={getNavBarData()} />
        <BlinkingText text={titleText} />
      </PageWrapper>
    );
  if (error) return <p>Error loading data</p>;

  return (
    <PageWrapper>
      <NavigationBar data={getNavBarData()} />
      {dilemma && (
        <>
          <StyledTitle isVisible={isVisible} text={dilemma.title}>{dilemma.title}</StyledTitle>
          <DilemmaDescription isVisible={isVisible} text={dilemma.description} animationDelay={0.2} />
          <DilemmaToggleButton isVisible={isVisible} animationDelay={0.4} data={toggleButtonData} />
          <DilemmaInputField isVisible={isVisible} animationDelay={0.6} />
          <DilemmaButton isVisible={isVisible} animationDelay={0.8} buttonTitleText={"투표"} available={isAvailable()} onClick={() => {}} />
        </>
      )}
    </PageWrapper>
  );
}

export default DilemmaPage;