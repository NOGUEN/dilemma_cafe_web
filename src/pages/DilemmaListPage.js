import styled from "styled-components";
import axios from 'axios';
import DilemmaList from "../components/DilemmaList";
import React, { useEffect, useState } from 'react';
import getNavBarData from "../constants/NavBarData";
import NavigationBar from "../components/NavigationBar";

const ListWrapper = styled.div`
  display: box;
  flex-direction: row;
  gap: 20px;
`;



function DilemmaListPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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
      <ListWrapper>
        <DilemmaList data={data} />
      </ListWrapper>
    </>
  );
}

export default DilemmaListPage;