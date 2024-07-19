import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledSocialLoginButton = styled.button`
  background-color: ${props => props.color || theme.color.primary};
  border-radius: ${theme.radius.radiusSm};
  padding: ${theme.space.spaceSm};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  border: none;
  cursor: pointer;
`;

const StyledSocialLogo = styled.div`
  left: ${theme.space.spaceSm};
  height: ${theme.icon.iconMd};
  width: ${theme.icon.iconMd};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButtonTitle = styled.div`
  ${theme.fontstyle.body1Medium}
  white-space: nowrap;
`;

function SocialLoginButton({ title, color, onClick, icon: Icon }) {
  return (
    <StyledSocialLoginButton onClick={onClick} color={color}>
      <StyledSocialLogo>
        <Icon />
      </StyledSocialLogo>
      <StyledButtonTitle>{title}</StyledButtonTitle>
    </StyledSocialLoginButton>
  );
}

export default SocialLoginButton;