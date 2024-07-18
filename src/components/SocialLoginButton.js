import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledSocialLoginButton = styled.button`
  width: ${props => props.size || '3rem'};
  height: ${props => props.size || '3rem'};
  background-color: ${props => props.color || theme.color.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const StyledSocialLogo = styled.div`
  object-fit: cover;
  padding: 20%;
`;

function SocialLoginButton({ size, color, onClick, icon: Icon }) {
  return (
    <StyledSocialLoginButton onClick={onClick} size={size} color={color} >
      <StyledSocialLogo>
        <Icon/>
      </StyledSocialLogo>
    </StyledSocialLoginButton>
  );
}

export default SocialLoginButton;