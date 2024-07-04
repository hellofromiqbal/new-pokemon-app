'use client'

import { useEffect, useState } from "react";
import { pokemonData } from "@/utils/typescript/types";
import PokemonListTable from "@/components/Tables/PokemonListTable";
import { Box, Container, Typography } from "@mui/material";
import BackButton from "@/components/Buttons/BackButton";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const handleSearchInput = (e: any) => {
    setTimeout(() => {
      setSearchInput(e.target.value)
    }, 300);
  };

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1302')
      .then((res) => res.json())
      .then((data) => setAllPokemon(data.results))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    if(searchInput){
      const results = allPokemon.filter((pokemon: pokemonData) =>
        pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredPokemon(results);
    } else {
      setFilteredPokemon([]);
    };
  }, [searchInput, allPokemon]);

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: { xs: 9, md: 12 }, pb: 4 }}>
      <BackButton />
      <input
        type="search"
        name="searchBar"
        id="searchBar"
        placeholder="Pikachu"
        autoFocus
        className="px-6 py-2 border rounded-full outline-none"
        onChange={handleSearchInput}
        autoComplete="off"
      />
      <Box>
        {filteredPokemon.length > 0 ? (
          <PokemonListTable data={filteredPokemon}/>
        ) : (
          searchInput !== ""? (
            searchInput && <Typography variant='h6' sx={{ textAlign: 'center', mt: 10 }}>No Pokemon found...</Typography>
          ) : (
            <Typography variant='h6' sx={{ textAlign: 'center', mt: 10 }}>Let's catch'em all!</Typography>
          )
        )}
      </Box>
    </Container>
  );
};

export default SearchPage;