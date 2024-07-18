import styled from "styled-components";
import React, { useState } from 'react';
import { theme } from "./ui/Theme";
import Logo from "./Logo";
import SocialLoginButtonList from "./SocialLoginButtonList";
import { ReactComponent as KakaoIcon } from "../assets/kakaotalk.svg";
import { ReactComponent as GoogleIcon } from "../assets/google.svg";

const StyledLoginButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${theme.color.primary};
  padding-right: 1rem;
  font-size: 1rem;
  cursor: pointer;
  font-family: "JalnanGothic";
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
  position: relative;
  padding: 2rem 3rem;
  background-color: ${theme.color.darkgray};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledText= styled.div`
  font-size: 0.9rem;
  color: ${theme.color.lightgray};
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const StyledDivisionLine = styled.div`
  border-top: 1px solid ${theme.color.gray};
  margin: 2rem;
  flex-grow: 1;
`;

const StyledDivisionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledCloseButton = styled.div`
  position: absolute;
  top: 0.1rem;
  right: 0.7rem;
  background: none;
  border: none;
  color: ${theme.color.gray};
  font-size: 2rem;
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
    {title: "카카오로 로그인", size: "1.4rem", color: theme.color.kakao, icon: KakaoIcon, onClick: ()=>{}},
    {title: "구글로 로그인", size: "1.4rem", color: theme.color.white, icon: GoogleIcon, onClick: ()=>{}},
    {title: "카카오로 로그인", size: "1.4rem", color: theme.color.black, icon: KakaoIcon, onClick: ()=>{}},
  ]

  return (
    <div>
      <StyledLoginButton onClick={openModal}>회원가입/로그인</StyledLoginButton>
      {isModalOpen && (
        <StyledModalBackground onClick={closeModal}>
          <StyledModalContainer onClick={(e) => e.stopPropagation()}>
            <StyledWrapper>
              <StyledCloseButton onClick={closeModal}>×</StyledCloseButton>
              <Logo size={"3rem"}></Logo>
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