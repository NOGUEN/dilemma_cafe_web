import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from './ui/Theme';

const blink = keyframes`
  0% {
    color: white;
  }
  50% {
    color: gray;
  }
  100% {
    color: white;
  }
`;

const StyledBlinkingText = styled.div`
  ${theme.fontstyle.display3}
  animation: ${blink} 1s infinite;
`;

function BlinkingText({text}) {
  return (
    <StyledBlinkingText>{text}</StyledBlinkingText>
  );
}

export default BlinkingText;