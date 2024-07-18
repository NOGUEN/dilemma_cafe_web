import styled from "styled-components";
import SocialLoginButton from "./SocialLoginButton";

const StyledSocialLoginButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
        size={item.size}
        onClick={item.onClick}>
      </SocialLoginButton>
      ))}
    </StyledSocialLoginButtonList>
  );
}

export default SocialLoginButtonList;