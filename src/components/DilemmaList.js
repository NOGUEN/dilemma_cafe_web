import styled from "styled-components";
import DilemmaListCell from "./DilemmaListCell";
import { theme } from "./ui/Theme";

const StyledTitle = styled.div`
  color: white;
  ${theme.fontstyle.subhead3}
  margin: ${theme.space.spaceLg} ${theme.space.spaceZero};
  display: flex;
  flex-direction: column;
`;

function DilemmaList ({listTitle, data}) {
  return (
    <>
      <StyledTitle>
        {listTitle}
      </StyledTitle>
      <>
        {data.map((item, index) => (
          <DilemmaListCell 
            key={item.dilemma_id}
            titleText={item.title} 
            likeCount={item.like}
            participationCount={item.total_votes}
            dilemmaId={item.dilemma_id}
            index={index}
          />
        ))}
      </>
    </>
  );
}

export default DilemmaList;