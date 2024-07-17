import styled from "styled-components";
import { theme } from "./ui/Theme";
import { useNavigate } from "react-router-dom";

const StyledNavbarLogo = styled.div`
  display: flex;
  color: ${theme.color.primary};
  margin: 15px 0px 10px 20px;
`;

const StyledLogoButton = styled.button`
  font-family: "JalnanGothic";
  background-color: transparent;
  font-size: 1.6rem;
  color: inherit;
  border: none;
  &:hover {
    color: white;
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