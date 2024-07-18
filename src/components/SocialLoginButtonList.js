import styled from "styled-components";
import SocialLoginButton from "./SocialLoginButton";

const StyledSocialLoginButtonList = styled.div`
  display: flex;
  gap: 1rem;
`;

function SocialLoginButtonList({ data }) {
  return (
    <StyledSocialLoginButtonList>
      {data.map((item, index) => (
      <SocialLoginButton 
        key={index}
        color={item.color}
        icon={item.icon}
        onClick={item.onClick}>
      </SocialLoginButton>
      ))}
    </StyledSocialLoginButtonList>
  );
}

export default SocialLoginButtonList;