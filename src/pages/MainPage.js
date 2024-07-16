import NavigationBar from "../components/NavigationBar";
import ButtonContainer from "../components/SquareButtonContainer";
import DilemmaListCell from "../components/DilemmaListCell";
import { ReactComponent as DilemmaIcon } from "../assets/dilemma_icon.svg";
import { ReactComponent as DilemmaListIcon } from "../assets/dilemma_list_icon.svg";

const buttonsData = [
  { text: "오늘의 랜덤 딜레마", image: <DilemmaIcon width={48} height={48}></DilemmaIcon>, onClick: () => alert('오늘의 랜덤 딜레마 클릭!') },
  { text: "전체 딜레마", image: <DilemmaListIcon width={48} height={48}></DilemmaListIcon>, onClick: () => alert('전체 딜레마 클릭!') },
];

function MainPage() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <ButtonContainer data={buttonsData}></ButtonContainer>
      <DilemmaListCell titleText={"hello"} likeCount={100}></DilemmaListCell>
    </>
  );
}

export default MainPage;