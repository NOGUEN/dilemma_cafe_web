import styled from "styled-components";
import { theme } from "./ui/Theme";

const StyledListCell = styled.button`
  background: ${theme.color.darkgray};
  border-radius: 8px;
  border: none;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
`;

const StyledTitle = styled.div`
  font-family: "JalnanGothic";
  color: white;
`;

const StyledLike = styled.div`
  margin-top: 5px;
  color: ${theme.color.lightgray};
`;

const StyledWarpper = styled.div`
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

function Warpper({titleText, likeCount}) {
  return (
    <StyledWarpper>
      <TitleText titleText={titleText}></TitleText>
      <Like likeCount={likeCount}></Like>
    </StyledWarpper>
  );
}

function DilemmaListCell({titleText, likeCount}) {
  return (
    <StyledListCell>
      <Warpper titleText={titleText} likeCount={likeCount}></Warpper>
    </StyledListCell>
  );
}

export default DilemmaListCell;