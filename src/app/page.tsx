'use client'

import { useState } from "react";
import { Container } from "@mui/material";
import LoadingPage from "./loading";
import Custom404Page from "./404";
import useFetchData from "@/utils/hooks/useFetchData";
import PokemonListTable from "@/components/Tables/PokemonListTable";

const Home = () => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');

  const { data, isError, isFetching } = useFetchData('pokemon-data', url);

  console.log(data);

  if (isFetching) return <LoadingPage/>;

  if (isError) return <Custom404Page/>;

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: { xs: 9, md: 12 }, pb: 4 }}>
      <PokemonListTable data={data?.results}/>
    </Container>
  );
};

export default Home;