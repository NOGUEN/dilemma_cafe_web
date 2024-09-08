import styled from "styled-components";
import { theme } from "./ui/Theme";
import { ReactComponent as DilemmaIcon } from "../assets/dilemma_icon.svg";


const StyledLogo = styled.div`
  ${theme.fontstyle.display}
  color: ${theme.color.primary};
`;

const StyledWrapper = styled.div`
  gap: ${theme.space.spaceMd};
  height: ${theme.icon.iconLg};
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

function Logo() {
  return (
    <StyledWrapper>
      <DilemmaIcon stroke={theme.color.primary}></DilemmaIcon>
      <StyledLogo>딜레마 카페</StyledLogo>
    </StyledWrapper>
  );
}

export default Logo;