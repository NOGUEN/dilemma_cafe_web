import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledLoginInputField = styled.input`
  border-radius: ${theme.radius.radiusMd};
  border: 1px solid ${theme.color.primary};
  background-color: ${theme.color.darkgray};

  &:focus {
    border: ${theme.space.spaceXs} solid ${theme.color.primary};
    outline: none;
  }
`;

function LoginInputField() {
  return (
    <StyledLoginInputField>
    </StyledLoginInputField>
  );
}

export default LoginInputField;