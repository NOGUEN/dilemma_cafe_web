import styled from "styled-components";
import { theme } from "./ui/Theme";
import { ReactComponent as DilemmaIcon } from "../assets/dilemma_icon.svg";


const StyledLogo = styled.div`
  font-size: ${props => props.size || '1rem'};
  font-family: "JalnanGothic";
  color: ${theme.color.primary};
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

function Logo({ size }) {
  return (
    <StyledWrapper>
      
      <DilemmaIcon height={"8rem"} stroke={theme.color.primary}></DilemmaIcon>
      
      <StyledLogo size={size}>딜레마 카페</StyledLogo>
    </StyledWrapper>
  );
}

export default Logo;