'use client'

import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import LoadingPage from "./loading";
import Custom404Page from "./404";
import useFetchData from "@/utils/hooks/useFetchData";
import PokemonListTable from "@/components/Tables/PokemonListTable";
import PaginationButton from "@/components/Buttons/PaginationButton";

const Home = () => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');

  const { data, isError, isFetching, refetch } = useFetchData('pokemon-data', url);

  useEffect(() => {
    refetch();
  }, [url, refetch]);

  if (isFetching) return <LoadingPage/>;

  if (isError) return <Custom404Page/>;

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: { xs: 9, md: 12 }, pb: 4 }}>
      <PokemonListTable data={data?.results}/>
      <Box display={'flex'} justifyContent={'space-between'} gap={4}>
        <PaginationButton
          url={data.previous}
          setUrl={setUrl}
          label="Prev"
          disabled={data?.previous === null}
        />
        <PaginationButton
          url={data.next}
          setUrl={setUrl}
          label="Next"
          disabled={data?.next === null}
        />
      </Box>
    </Container>
  );
};

export default Home;
