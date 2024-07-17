import styled from "styled-components";
import DilemmaListCell from "./DilemmaListCell";

const StyledTitle = styled.div`
  font-family: "JalnanGothic";
  color: white;
  font-size: 1.2rem;
  margin: 1.5rem 0 1rem 0;
`;

const StyledList = styled.div`
  
`;

function DilemmaList ({data}) {
  return (
    <>
      <StyledTitle>
        인기 딜레마
      </StyledTitle>
      <StyledList>
        {data.map((item, index) => (
          <DilemmaListCell 
            key={index} 
            titleText={item.titleText} 
            likeCount={item.likeCount}
            participationCount={item.participationCount}>  
          </DilemmaListCell>
        ))}
      </StyledList>
    </>
  );
}

export default DilemmaList;