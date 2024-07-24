import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledInputField = styled.input`
  ${theme.fontstyle.body1Regular}
  border-radius: ${theme.radius.radiusMd};
  background-color: ${theme.color.gray};
  height: ${theme.height.inputField};
  padding: ${theme.space.spaceMd};
  color: ${theme.color.white};
  box-sizing: border-box;
  width: 100%;
  border: none;
  box-shadow: 0 0 0 ${theme.height.lineHeight} ${theme.color.gray900} inset;
  transition: all 0.5s;

  &:focus {
    box-shadow: 0 0 0 ${theme.space.spaceXs} ${theme.color.primary} inset;
    background-color: ${theme.color.gray900};
    outline: none;
  }
`;

function DilemmaInputField() {
  return (
    <StyledInputField>
    </StyledInputField>
  );
}

export default DilemmaInputField;