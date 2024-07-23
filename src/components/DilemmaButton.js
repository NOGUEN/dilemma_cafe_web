import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledDillemButton = styled.button`
  ${theme.fontstyle.subhead1}
  border-radius: ${theme.radius.radiusMd};
  background-color: ${theme.color.primary};
  width: 100%;
  display: flex;
  align-items: center;
`

function DilemmaButton({ buttonTitleText }) {
  return (
    <StyledDillemButton>
      {buttonTitleText}
    </StyledDillemButton>
  );
}

export default DilemmaButton;