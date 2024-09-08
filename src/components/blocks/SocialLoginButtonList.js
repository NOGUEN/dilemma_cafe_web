import styled from "styled-components";
import SocialLoginButton from "../atoms/SocialLoginButton";
import { theme } from "../ui/Theme";

const StyledSocialLoginButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space.spaceLg};
`;

function SocialLoginButtonList({ data }) {
  return (
    <StyledSocialLoginButtonList>
      {data.map((item, index) => (
      <SocialLoginButton 
        key={index}
        title={item.title}
        color={item.color}
        icon={item.icon}
        onClick={item.onClick}>
      </SocialLoginButton>
      ))}
    </StyledSocialLoginButtonList>
  );
}

export default SocialLoginButtonList;