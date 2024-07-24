import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledContainer = styled.div`
  background-color: ${theme.color.gray900};
  width: 100%;
  box-sizing: border-box;
  border-radius: ${theme.radius.radiusMd};
  gap: ${theme.space.spaceLg};
  padding: ${theme.space.spaceLg}
`;

const StlyedTitle = styled.div`
  ${theme.fontstyle.display3}
  color: ${theme.color.primary};
`;

const StlyedDescription = styled.div`
  ${theme.fontstyle.body2Medium}
  color: ${theme.color.white};
`;

function DilemmaDescription({ text }) {
  return (
    <StyledContainer>
      <StlyedTitle>
        상황
      </StlyedTitle>
      <StlyedDescription>
        {text}
      </StlyedDescription>
    </StyledContainer>
  );
}

export default DilemmaDescription;