import NavigationBar from "../components/NavigationBar";
import ButtonContainer from "../components/SquareButtonContainer";
import DilemmaList from "../components/DilemmaList";
import { ReactComponent as DilemmaIcon } from "../assets/dilemma_icon.svg";
import { ReactComponent as DilemmaListIcon } from "../assets/dilemma_list_icon.svg";
import getNavBarData from "../constants/NavBarData";
import { theme } from "../components/ui/Theme";
import axios from "axios";
import { useEffect, useState } from "react";

const buttonsData = [
  { text: "오늘의 랜덤 딜레마",
    image: <DilemmaIcon width={theme.icon.icon2Xl} height={theme.icon.icon2Xl}></DilemmaIcon>,
    onClick: () => alert('오늘의 랜덤 딜레마 클릭!') },
  { text: "전체 딜레마",
    image: <DilemmaListIcon width={theme.icon.icon2Xl} height={theme.icon.icon2Xl}></DilemmaListIcon>,
    onClick: () => alert('전체 딜레마 클릭!') },
];

function MainPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
		const fetchData = async() => {
      const res = await axios.get("https://cfqdnaomjctsvpoczwcm.supabase.co/rest/v1/Dilemma", {
        headers: {
          apikey: process.env.REACT_APP_API_KEY,
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
      });
      return res.data;
    }
    
    fetchData().then(res => setData(res));
  }, []);

  return (
    <>
      <NavigationBar data={getNavBarData()} />
      <ButtonContainer data={buttonsData} /> 
      <DilemmaList listTitle="인기 딜레마!" data={data} />
    </>
  );
}

export default MainPage;