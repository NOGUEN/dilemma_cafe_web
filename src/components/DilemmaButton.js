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

const StyledDillemButton = styled.button`
  ${theme.fontstyle.display}
  border-radius: ${theme.radius.radiusLg};
  background-color: ${props => props.available ? theme.color.primary : theme.color.gray800 };
  height: ${theme.height.button};
  animation: ${css`${fadeInAndMoveUp} 1s ease-out ${props => props.animationDelay || 0 }s forwards`};
  opacity: ${props => props.isVisible ? 1 : 0};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 0.5s;
  cursor: ponter;
`

function DilemmaButton({ buttonTitleText, onClick, animationDelay, available }) {
  return (
    <StyledDillemButton animationDelay={animationDelay} onClick={onClick} available={available}>
      {buttonTitleText}
    </StyledDillemButton>
  );
}

export default DilemmaButton;