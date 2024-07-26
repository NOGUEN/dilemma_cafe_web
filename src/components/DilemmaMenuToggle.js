import styled from "styled-components";
import { theme } from "./ui/Theme";

const MenuToggleWrapper = styled.div`
  display: flex;
  gap: ${theme.space.spaceMd};
`;

const StyledToggleButton = styled.button`
  ${theme.fontstyle.body2Medium}
  background-color: ${theme.color.primary};
  padding: ${theme.space.spaceMd};
  color: ${theme.color.black};
  border-radius: ${theme.radius.radiusLg};
  border: none;
  display: flex;
  cursor: pointer;
`;

function DilemmaMenuToggle() {
  return (
    <MenuToggleWrapper>
      <StyledToggleButton>딜레마</StyledToggleButton>
      <StyledToggleButton>모음 딜레마</StyledToggleButton>
    </MenuToggleWrapper>
  );
}

export default DilemmaMenuToggle;