import React from "react";
import styled from "styled-components";
import { theme } from "./ui/Theme.js";
import NavbarLogo from "./NavbarLogo.js";

const StyledWrap = styled.div`
  margin: 0;
  padding-top: 60px;
`;

const StyledNavigationBar = styled.div`
  width: 100%;
  display: flex;
  z-index: 2000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  background: ${theme.color.background};
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
  font-size: 1rem;
`;

function NavigationBar({data}) {
  return (
    <StyledWrap>
      <StyledNavigationBar>
        <NavbarLogo />
        <StyledListWrap>
          <ul>
            {data.map((item, index) => (
              <StyledListCell key={index}>
                <StyledAnchor href={item.href}>{item.titleText}</StyledAnchor>
              </StyledListCell>
            ))}
          </ul>
        </StyledListWrap>
      </StyledNavigationBar>
    </StyledWrap>
  );
}

export default NavigationBar;