import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledListCell = styled.button`
  background: ${theme.color.darkgray};
  border-radius: 8px;
  border: none;
  align-items: flex-end;
  width: 100%;
`;

const StyledTitle = styled.div`
  font-family: "JalnanGothic";
  color: white;
`;

const StyledLike = styled.div`
  color: ${theme.color.lightgray};
`;

const StyledParticipations = styled.div`
  color: ${theme.color.lightgray};
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5px;
  width: 100%;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 15px 15px 10px 15px;
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
  return (
    <StyledListCell>
      <Wrapper titleText={titleText} likeCount={likeCount} participationCount={participationCount}></Wrapper>
    </StyledListCell>
  );
}

export default DilemmaListCell;