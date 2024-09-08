import styled, { keyframes, css } from 'styled-components';
import { theme } from "../ui/Theme";

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

const StyledInputField = styled.textarea`
  ${theme.fontstyle.body1Regular}
  border-radius: ${theme.radius.radiusMd};
  background-color: ${theme.color.gray};
  height: ${theme.height.inputField};
  padding: ${theme.space.spaceLg};
  color: ${theme.color.white};
  box-shadow: 0 0 0 ${theme.height.lineHeight} ${theme.color.gray900} inset;
  animation: ${css`${fadeInAndMoveUp} 1s ease-out ${props => props.animationDelay || 0 }s forwards`};
  opacity: ${props => props.isVisible ? 1 : 0};
  box-sizing: border-box;
  width: 100%;
  border: none;
  transition: all 0.5s;
  resize: vertical;
  outline: none;
  display: block;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  
  &::placeholder {
    color: ${theme.color.gray600};
    opacity: 1;
  }
  
  &:focus {
    box-shadow: 0 0 0 ${theme.space.spaceXs} ${theme.color.primary} inset;
    background-color: ${theme.color.gray900};
  }
`;

function DilemmaInputField({ animationDelay }) {
  return (
    <StyledInputField animationDelay={animationDelay} placeholder="의견을 달아보세요! (50자 이내)" />
  );
}

export default DilemmaInputField;