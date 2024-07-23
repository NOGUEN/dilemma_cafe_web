import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledButton = styled.button`
  ${theme.fontstyle.display}
  background-color: ${theme.color.gray};
  height: 30rem;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: ponter;
  border-radius: ${theme.radius.radiusXl};
  border: ${({ isToggled }) =>
    isToggled ? theme.space.spaceSm + " solid " + theme.color.primary : "none"};
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: ${theme.space.spaceMd};
`

export default function DilemmaToggleButton({ isToggle, onClick}) {
  return (
    <StyledButtonContainer>
      <StyledButton isToggled={isToggle[0]} onClick={() => {onClick(0)}}></StyledButton>
      <StyledButton isToggled={isToggle[1]} onClick={() => {onClick(1)}}></StyledButton>
    </StyledButtonContainer>
    
  );
}