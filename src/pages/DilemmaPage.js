import DilemmaToggleButton from "../components/DilemmaToggleButton";
import NavigationBar from "../components/NavigationBar";
import getNavBarData from "../constants/NavBarData";
import DilemmaButton from "../components/DilemmaButton";
import DilemmaInputField from "../components/InputField";
import DilemmaDescription from "../components/DilemmaDescription";
import styled, { keyframes, css } from "styled-components";
import { theme } from "../components/ui/Theme";
import { useState, useEffect } from "react";
import axios from "axios";

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

const animationDelay = (delay) => css`
  animation: ${fadeInAndMoveUp} 1s ease-out ${delay}s forwards;
  opacity: 0;
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
  ${animationDelay(0)}
`;

const AnimatedDilemmaDescription = styled(DilemmaDescription)`
  ${animationDelay(0.2)}
`;

const AnimatedDilemmaToggleButton = styled(DilemmaToggleButton)`
  ${animationDelay(0.4)}
`;

const AnimatedDilemmaInputField = styled(DilemmaInputField)`
  ${animationDelay(0.6)}
`;

const AnimatedDilemmaButton = styled(DilemmaButton)`
  ${animationDelay(0.8)}
`;

function DilemmaPage() {
  const [isToggle, setIsToggle] = useState([false, false]);
  const [dilemma, setDilemma] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://cfqdnaomjctsvpoczwcm.supabase.co/rest/v1/rpc/get_dilemma_by_id?input_dilemma_id=1`,
        {
          headers: {
            apikey: process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
          },
        });
      setDilemma(res.data[0]);
    }
    
    fetchData();
  }, []);
  

  function onClickFunction(index) {
    setIsToggle([index === 0, index === 1]);
  }

  return (
    <PageWrapper>
      <NavigationBar data={getNavBarData()}></NavigationBar>
      {dilemma ? (
        <>
          <StyledTitle>{dilemma.title} 우헤헤</StyledTitle>
          {dilemma.description && <AnimatedDilemmaDescription description={dilemma.description}></AnimatedDilemmaDescription>}
          <AnimatedDilemmaToggleButton isToggle={isToggle} onClick={onClickFunction}></AnimatedDilemmaToggleButton>
          <AnimatedDilemmaInputField></AnimatedDilemmaInputField>
          <AnimatedDilemmaButton buttonTitleText={"투표"} onClick={()=>{}}></AnimatedDilemmaButton>
        </>
      ) : (
        <StyledTitle>Loading...</StyledTitle>
      )}
    </PageWrapper>
  );
}

export default DilemmaPage;