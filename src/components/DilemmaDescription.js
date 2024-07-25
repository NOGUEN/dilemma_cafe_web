import styled, { keyframes, css } from 'styled-components';
import { theme } from "./ui/Theme";

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

const StyledContainer = styled.div`
  background-color: ${theme.color.gray900};
  width: 100%;
  box-sizing: border-box;
  border-radius: ${theme.radius.radiusMd};
  gap: ${theme.space.spaceLg};
  padding: ${theme.space.spaceLg};
  animation: ${css`${fadeInAndMoveUp} 1s ease-out ${props => props.animationDelay || 0 }s forwards`};
  opacity: ${props => props.isVisible ? 1 : 0};
`;

const StlyedTitle = styled.div`
  ${theme.fontstyle.display3}
  color: ${theme.color.primary};
`;

const StlyedDescription = styled.div`
  ${theme.fontstyle.body2Medium}
  color: ${theme.color.white};
`;

function DilemmaDescription({ text, animationDelay }) {
  return (
    <StyledContainer animationDelay={animationDelay}>
      <StlyedTitle>
        상황
      </StlyedTitle>
      <StlyedDescription>
        {text}
      </StlyedDescription>
    </StyledContainer>
  );
}

export default DilemmaDescription;