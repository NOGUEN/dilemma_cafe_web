import styled from "styled-components";
import { theme } from "./ui/Theme";
import { ReactComponent as DilemmaIcon } from "../assets/dilemma_icon.svg";


const StyledLogo = styled.div`
  font-size: 1.3rem;
  font-family: "JalnanGothic";
  color: ${theme.color.primary};
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: 1rem;
`;

function Logo({ size }) {
  return (
    <StyledWrapper>
      <DilemmaIcon height={"1.8rem"} stroke={theme.color.primary}></DilemmaIcon>
      <StyledLogo>딜레마 카페</StyledLogo>
    </StyledWrapper>
  );
}

export default Logo;