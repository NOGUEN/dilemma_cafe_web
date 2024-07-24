import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledDillemButton = styled.button`
  ${theme.fontstyle.display}
  border-radius: ${theme.radius.radiusLg};
  background-color: ${theme.color.primary};
  height: ${theme.height.button};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`

function DilemmaButton({ buttonTitleText, onClick }) {
  return (
    <StyledDillemButton onClick={onClick}>
      {buttonTitleText}
    </StyledDillemButton>
  );
}

export default DilemmaButton;