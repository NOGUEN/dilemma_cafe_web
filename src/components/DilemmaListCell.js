import styled from "styled-components";
import { theme } from "./ui/Theme";
import { useNavigate } from 'react-router-dom';

const StyledListCell = styled.button`
  background: ${theme.color.darkgray};
  border-radius: ${theme.radius.radiusMd};
  margin-bottom: ${theme.space.spaceMd};
  border: none;
  align-items: flex-end;
  width: 100%;
  cursor: pointer;
`;

const StyledTitle = styled.div`
  ${theme.fontstyle.subhead2}
  color: ${theme.color.white};
`;

const StyledLike = styled.div`
  color: ${theme.color.gray200};
`;

const StyledParticipations = styled.div`
  color: ${theme.color.gray200};
`;

const StyledInfoWrapper = styled.div`
  margin-top: ${theme.space.spaceSm};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const StyledWrapper = styled.div`
  padding: ${theme.space.spaceLg} ${theme.space.spaceLg} ${theme.space.spaceMd} ${theme.space.spaceLg};
  display: flex;
  flex-direction: column;
  align-items: start;
`;

function TitleText({titleText}) {
  return (
    <StyledTitle>
      {titleText}
    </StyledTitle>
  );
}

function Like({likeCount}) {
  return (
    <StyledLike>
      ❤️ {likeCount}
    </StyledLike>
  );
}

function Participations({participationCount}) {
  return (
    <StyledParticipations>{participationCount}명 참여</StyledParticipations>
  )
}

function InfoWrapper({likeCount, participationCount}) {
  return (
    <StyledInfoWrapper>
      <Like likeCount={likeCount}></Like>
      <Participations participationCount={participationCount}></Participations>
    </StyledInfoWrapper>
  );
}

function Wrapper({titleText, likeCount, participationCount}) {
  return (
    <StyledWrapper>
      <TitleText titleText={titleText}></TitleText>
      <InfoWrapper likeCount={likeCount} participationCount={participationCount}></InfoWrapper>
    </StyledWrapper>
  );
}

function DilemmaListCell({titleText, likeCount, participationCount}) {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate("/dilemma");
  };

  return (
    <StyledListCell onClick={onClickImg}>
      <Wrapper titleText={titleText} likeCount={likeCount} participationCount={participationCount}></Wrapper>
    </StyledListCell>
  );
}

export default DilemmaListCell;