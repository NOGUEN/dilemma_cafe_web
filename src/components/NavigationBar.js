import React from "react";
import styled, { css } from "styled-components";
import { theme } from "./ui/theme.js";
import NavbarLogo from "./NavbarLogo.js";

const StyledWrap = styled.div`
  margin-top: 60px;
`;

const StyledNavigationBar = styled.div`
  width: 100%;
  display: flex;
  z-index: 2000;
  position: fixed;
  top: 0px;
  background: ${theme.color.background};
  gap: 16px;
`;

const StyledListCell = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0px 30px 0px 10px;
  color: ${theme.color.primary};
  &:hover {
    color: white;
    transition: 0.5s;
  }
  & > * {
    color: inherit;
  }
`;

const StyledListWrap = styled.div`
  
  margin-left: auto;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  font-family: "JalnanGothic";
`;

function NavigationBar() {
  return (
    <StyledWrap>
      <StyledNavigationBar>
        <NavbarLogo></NavbarLogo>
        <StyledListWrap>
          <ul>
            <StyledListCell><StyledAnchor href="#hello">가이드</StyledAnchor></StyledListCell>
            <StyledListCell><StyledAnchor href="#hello">문의</StyledAnchor></StyledListCell>
            <StyledListCell><StyledAnchor href="#hello">회원가입/로그인</StyledAnchor></StyledListCell>
          </ul>
        </StyledListWrap>
      </StyledNavigationBar>
    </StyledWrap>
  );
}

export default NavigationBar;