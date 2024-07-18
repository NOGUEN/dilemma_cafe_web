import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledSocialLoginButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  background-color: ${props => props.color || theme.color.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.6rem;
`;

const StyledSocialLogo = styled.div`
  position: absolute;
  left: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.size || '1.4rem'};
  width: ${props => props.size || '1.4rem'};
`;

const StyledButtonTitle = styled.div`
  font-size: 0.9rem;
  white-space: nowrap;
`;

function SocialLoginButton({ title, size, color, onClick, icon: Icon }) {
  return (
    <StyledSocialLoginButton onClick={onClick} color={color}>
      <StyledSocialLogo size={size}>
        <Icon />
      </StyledSocialLogo>
      <StyledButtonTitle>{title}</StyledButtonTitle>
    </StyledSocialLoginButton>
  );
}

export default SocialLoginButton;