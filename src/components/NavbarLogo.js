import styled from "styled-components";
import { theme } from "./ui/Theme";
import { useNavigate } from "react-router-dom";

const StyledNavbarLogo = styled.div`
  display: flex;
  color: ${theme.color.primary};
  margin: ${theme.space.spaceXl} 0px 10px 20px;
`;

const StyledLogoButton = styled.button`
  background-color: transparent;
  ${theme.fontstyle.display};
  color: inherit;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${theme.color.white};
    transition: 0.5s;
  }
`

function NavbarLogo() {
  const navigate = useNavigate();

  return (
    <StyledNavbarLogo>
      <StyledLogoButton onClick={()=>{navigate("/")}}>
        딜레마 카페
      </StyledLogoButton>
    </StyledNavbarLogo>
  );
}

export default NavbarLogo;