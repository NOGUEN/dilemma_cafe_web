import NavigationBar from "../blocks/NavigationBar";
import ButtonContainer from "../blocks/SquareButtonContainer";
import DilemmaList from "../blocks/DilemmaList";
import getNavBarData from "../../constants/NavBarData";
import useFetchDilemmaList from "../../hooks/useFetchDilemmaList";


function MainPage() {
  const { data, loading, error } = useFetchDilemmaList();

  if (error) return <p>Error loading data</p>;
  return (
    <>
      <NavigationBar data={getNavBarData()} />
      <ButtonContainer />
      {loading ? <p>Loading...</p> : <DilemmaList listTitle="인기 딜레마!" data={data} />}
    </>
  );
}

export default MainPage;