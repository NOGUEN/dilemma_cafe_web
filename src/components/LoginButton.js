import styled, { keyframes } from "styled-components";
import React, { useState } from 'react';
import SocialLoginButtonList from "./SocialLoginButtonList";
import { theme } from "./ui/Theme";
import { ReactComponent as DilemmaIcon } from "../assets/dilemma_icon.svg";
import { ReactComponent as KakaoIcon } from "../assets/kakaotalk.svg";
import { ReactComponent as GoogleIcon } from "../assets/google.svg";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledLoginButton = styled.button`
  background-color: ${theme.color.transparent};
  color: ${theme.color.primary};
  padding-right: ${theme.space.spaceLg};
  ${theme.fontstyle.subhead3}
  border: none;
  cursor: pointer;

  &:hover {
    color: ${theme.color.white};
    transition: 0.5s;
  }
`;

const StyledModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalContainer = styled.div`
  padding: ${theme.space.space2Xl} ${theme.space.space3Xl};
  background-color: ${theme.color.darkgray};
  border-radius: ${theme.radius.radiusMd};
  position: relative;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledText= styled.div`
  ${theme.fontstyle.body1Regular}
  color: ${theme.color.gray400};
`;

const StyledWrapper = styled.div`
  gap: ${theme.space.spaceLg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const StyledDivisionLine = styled.div`
  border-top: 0.5px solid ${theme.color.gray400};
  margin: ${theme.space.spaceLg};
  flex-grow: 1;
`;

const StyledDivisionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledCloseButton = styled.div`
  font-size: ${theme.icon.iconLg};
  top: ${theme.space.spaceXs};
  right: ${theme.space.spaceMd};
  color: ${theme.color.gray400};
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
;`

function LoginButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const SocialLoginButtonData = [
    {title: "카카오로 로그인", color: theme.color.kakao, icon: KakaoIcon, onClick: ()=>{}},
    {title: "구글로 로그인", color: theme.color.white, icon: GoogleIcon, onClick: ()=>{}},
    {title: "애플로 로그인", color: theme.color.black, textColor: theme.color.white, icon: KakaoIcon, onClick: ()=>{}},
  ]

  return (
    <div>
      <StyledLoginButton onClick={openModal}>회원가입/로그인</StyledLoginButton>
      {isModalOpen && (
        <StyledModalBackground onClick={closeModal}>
          <StyledModalContainer onClick={(e) => e.stopPropagation()}>
            <StyledWrapper>
              <StyledCloseButton onClick={closeModal}>×</StyledCloseButton>
              <StyledLogo>
                <DilemmaIcon stroke={theme.color.primary} height={theme.icon.iconXl}/>
              </StyledLogo>
              <StyledDivisionWrapper>
                <StyledDivisionLine></StyledDivisionLine>
                <StyledText>소셜 로그인</StyledText>
                <StyledDivisionLine></StyledDivisionLine>
              </StyledDivisionWrapper>
              <SocialLoginButtonList data={SocialLoginButtonData}></SocialLoginButtonList>
            </StyledWrapper>
          </StyledModalContainer>
        </StyledModalBackground>
      )}
    </div>
  );
}

export default LoginButton;