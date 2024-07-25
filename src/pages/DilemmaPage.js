import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes, css } from 'styled-components';
import DilemmaToggleButton from "../components/DilemmaToggleButton";
import NavigationBar from "../components/NavigationBar";
import getNavBarData from "../constants/NavBarData";
import DilemmaButton from "../components/DilemmaButton";
import DilemmaInputField from "../components/InputField";
import DilemmaDescription from "../components/DilemmaDescription";
import { theme } from "../components/ui/Theme";

const fadeInAndMoveUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(${theme.space.spaceMd});
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: ${theme.space.spaceLg};
`;

const StyledTitle = styled.div`
  ${theme.fontstyle.display3}
  color: ${theme.color.white};
  animation: ${css`${fadeInAndMoveUp} 1s ease-out 0s forwards`};
`;


function DilemmaPage() {
  const { dilemmaId } = useParams();
  const [isToggle, setIsToggle] = useState([false, false]);
  const [dilemma, setDilemma] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://cfqdnaomjctsvpoczwcm.supabase.co/rest/v1/rpc/get_dilemma_by_id?input_dilemma_id=${dilemmaId}`,
          {
            headers: {
              apikey: process.env.REACT_APP_API_KEY,
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
          }
        );
        setDilemma(res.data[0]);
        setIsVisible(true);
      } catch (error) {
        console.error('Error fetching dilemma:', error.response.data);
      }
    };

    fetchData();
  }, [dilemmaId]);

  function onClickFunction(index) {
    setIsToggle([index === 0, index === 1]);
  }

  function isAvailable() {
    return isToggle.includes(true);
  }

  return (
    <PageWrapper>
      <NavigationBar data={getNavBarData()} />
      <StyledTitle isVisible={isVisible}> {dilemma ? dilemma.title : ""} </StyledTitle>
      {dilemma && (
        <DilemmaDescription isVisible={isVisible} text={dilemma.description} animationDelay={0.2}/>
      )}
      <DilemmaToggleButton isVisible={isVisible} animationDelay={0.4} data={toggleButtonData} />
      <DilemmaInputField isVisible={isVisible} animationDelay={0.6} />
      <DilemmaButton isVisible={isVisible} animationDelay={0.8} buttonTitleText={"투표"} available={isAvailable()} onClick={() => {}} />
    </PageWrapper>
  );
}

export default DilemmaPage;