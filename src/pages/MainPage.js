import NavigationBar from "../components/NavigationBar";
import ButtonContainer from "../components/SquareButtonContainer";
import DilemmaList from "../components/DilemmaList";
import { ReactComponent as DilemmaIcon } from "../assets/dilemma_icon.svg";
import { ReactComponent as DilemmaListIcon } from "../assets/dilemma_list_icon.svg";

const buttonsData = [
  { text: "오늘의 랜덤 딜레마", image: <DilemmaIcon width={48} height={48}></DilemmaIcon>, onClick: () => alert('오늘의 랜덤 딜레마 클릭!') },
  { text: "전체 딜레마", image: <DilemmaListIcon width={48} height={48}></DilemmaListIcon>, onClick: () => alert('전체 딜레마 클릭!') },
];

const listData = [
  {titleText: "송강호 떡 사주기 VS 송강 호떡 사주기", likeCount: 100, participationCount: 200},
  {titleText: "송강호 떡 사주기 VS 송강 호떡 사주기", likeCount: 100, participationCount: 200},
  {titleText: "송강호 떡 사주기 VS 송강 호떡 사주기", likeCount: 100, participationCount: 200},
  {titleText: "송강호 떡 사주기 VS 송강 호떡 사주기", likeCount: 100, participationCount: 200},
  {titleText: "송강호 떡 사주기 VS 송강 호떡 사주기", likeCount: 100, participationCount: 200},
];

const navBarData = [
  {titleText: "가이드", href: "#guide"},
  {titleText: "문의", href: "#faq"},
  {titleText: "회원가입/로그인", href: "#login"},
]

function MainPage() {
  return (
    <>
      <NavigationBar data={navBarData}></NavigationBar>
      <ButtonContainer data={buttonsData}></ButtonContainer>
      <DilemmaList data={listData}></DilemmaList>
    </>
  );
}

export default MainPage;