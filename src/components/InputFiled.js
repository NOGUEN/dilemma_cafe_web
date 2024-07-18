import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledLoginInputField = styled.input`
  width: 15rem;
  height: 2rem;
  border-radius: 8px;
  border: 1px solid ${theme.color.primary};
  background-color: ${theme.color.darkgray};

  &:focus {
    border: 2px solid ${theme.color.primary};
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