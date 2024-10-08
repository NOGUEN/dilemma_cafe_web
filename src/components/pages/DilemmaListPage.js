import styled from "styled-components";
import DilemmaList from "../blocks/DilemmaList";
import React from 'react';
import getNavBarData from "../../constants/NavBarData";
import NavigationBar from "../blocks/NavigationBar";
import useFetchDilemmaList from "../../hooks/useFetchDilemmaList";

const ListWrapper = styled.div`
  display: box;
  flex-direction: row;
  gap: 20px;
`;

function DilemmaListPage() {
  const { data, loading, error } = useFetchDilemmaList();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

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