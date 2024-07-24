import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledButton = styled.button`
  ${theme.fontstyle.display}
  background-color: ${theme.color.gray};
  height: 40vh;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: ponter;
  border-radius: ${theme.radius.radiusXl};
  border: none;
  box-shadow: ${props => props.istoggle ? `0 0 0 ${theme.space.spaceSm} ${theme.color.primary} inset;` : "none;"}
  
  transition: all 0.5s;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: ${theme.space.spaceMd};
`

export default function DilemmaToggleButton({ isToggle, onClick}) {
  return (
    <StyledButtonContainer>
      <StyledButton istoggle={isToggle[0] ? 1 : 0} onClick={() => {onClick(0)}}></StyledButton>
      <StyledButton istoggle={isToggle[1] ? 1 : 0} onClick={() => {onClick(1)}}></StyledButton>
    </StyledButtonContainer>
    
  );
}