import styled from "styled-components";
import DilemmaListCell from "./DilemmaListCell";
import { theme } from "./ui/Theme";

const StyledTitle = styled.div`
  color: white;
  ${theme.fontstyle.subhead3}
  margin: ${theme.space.spaceLg} 0;
`;

function DilemmaList ({data}) {
  return (
    <>
      <StyledTitle>
        인기 딜레마
      </StyledTitle>
      <>
        {data.map((item, index) => (
          <DilemmaListCell 
            key={index} 
            titleText={item.titleText} 
            likeCount={item.likeCount}
            participationCount={item.participationCount}>  
          </DilemmaListCell>
        ))}
      </>
    </>
  );
}

export default DilemmaList;