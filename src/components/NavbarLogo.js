import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledNavbarLogo = styled.div`
  display: flex;
  font-family: "JalnanGothic";
  font-size: 1.6rem;
  color: ${theme.color.primary};
  margin: 15px 0px 10px 20px;
`;

const StyledLogoAnchor = styled.a`
  text-decoration: none;
  color: inherit;
`

function NavbarLogo() {
  return (
    <StyledNavbarLogo>
      <StyledLogoAnchor href="#home">
        딜레마 카페
      </StyledLogoAnchor>
    </StyledNavbarLogo>
  );
}

export default NavbarLogo;