'use client'

import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import PokemonListTable from '@/components/Tables/PokemonListTable';
import BackButton from '@/components/Buttons/BackButton';

const MyPokemon = () => {
  const [caughtPokemon, setCaughtPokemon] = useState([]);

  useEffect(() => {
    const storedPokemon = JSON.parse(localStorage.getItem('caughtPokemon') || '[]');
    setCaughtPokemon(storedPokemon);
  }, []);

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: { xs: 9, md: 12 }, pb: 4 }}>
      <BackButton/>
      {caughtPokemon.length === 0 ? (
        <Typography variant="h6" align="center">No Pokemon caught</Typography>
      ) : (
        <PokemonListTable data={caughtPokemon} isMyPokemon={true} />
      )}
    </Container>
  );
};

export default MyPokemon;
