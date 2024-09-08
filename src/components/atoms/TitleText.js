import styled from "styled-components";
import { theme } from '../ui/Theme';

const StyledTitle = styled.div`
  ${theme.fontstyle.display3}
  color: ${theme.color.primary};
`;

function TitleText({ text }) {
  return <StyledTitle>{text}</StyledTitle>;
}

export default TitleText;