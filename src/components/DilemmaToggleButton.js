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

const StyledButton = styled.button`
  ${theme.fontstyle.display}
  background-color: ${theme.color.gray};
  color: ${theme.color.white};
  height: ${theme.height.height4Xl};
  padding: ${theme.space.space3Xl};
  border-radius: ${theme.radius.radiusXl};
  box-shadow: ${props => props.istoggle ? `0 0 0 ${theme.space.spaceSm} ${theme.color.primary} inset;` : "none;"}
  animation: ${css`${fadeInAndMoveUp} 1s ease-out ${props => props.animationDelay || 0 }s forwards`};
  opacity: ${props => props.isVisible ? 1 : 0};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 0.5s;
  cursor: ponter;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: ${theme.space.spaceMd};
`

export default function DilemmaToggleButton({ data, animationDelay }) {
  return (
    <StyledButtonContainer>
      <StyledButton animationDelay={animationDelay} istoggle={data[0].isToggle ? 1 : 0} onClick={() => {data[0].onClick(0)}}>{data[0].dilemmaText}</StyledButton>
      <StyledButton animationDelay={animationDelay} istoggle={data[1].isToggle ? 1 : 0} onClick={() => {data[1].onClick(0)}}>{data[1].dilemmaText}</StyledButton>
    </StyledButtonContainer>
  );
}