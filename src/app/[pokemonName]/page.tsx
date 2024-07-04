'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Container, Typography, Box, TableContainer, Table, TableRow, TableCell, TableBody, Button } from '@mui/material';
import LoadingPage from '../loading';
import Custom404Page from '../404';
import useFetchData from '@/utils/hooks/useFetchData';
import BorderLinearProgress from '@/components/LinearProgress/BorderLinearProgress';
import BackButton from '@/components/Buttons/BackButton';
import useMyPokemon from '@/utils/hooks/useMyPokemon';

const PokemonDetails = () => {
  const { pokemonName } = useParams<{ pokemonName: string }>();
  
  const [isCaught, setIsCaught] = useState(false);

  const { savePokemonToLocalStorage, removePokemonFromLocalStorage, isPokemonCaught } = useMyPokemon();

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const { data, isError, isFetching } = useFetchData('pokemon-details', url);

  useEffect(() => {
    setIsCaught(isPokemonCaught(pokemonName));
  }, [pokemonName, isPokemonCaught]);

  if (isFetching) return <LoadingPage/>;

  if (isError) return <Custom404Page/>;

  const handleToggleCatchPokemon = () => {
    if (isCaught) {
      removePokemonFromLocalStorage(data.name);
    } else {
      savePokemonToLocalStorage(data.name, url);
    }
    setIsCaught(!isCaught);
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: { xs: 9, md: 12 }, pb: 4 }}>
      <BackButton/>
      <Box
        component="img"
        src={data.sprites.other['official-artwork'].front_shiny}
        alt={data.name}
        sx={{ width: { xs: 200, md: 300 }, height: { xs: 200, md: 300 }, mx: 'auto' }}
      />
      
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <TableContainer sx={{ maxWidth: { xs: 1, md: '50%' }, mx: 'auto' }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>Name</Typography></TableCell>
                <TableCell>
                  <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{data.name}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>Type</Typography>
                </TableCell>
                <TableCell sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                  {data.types.map((typeInfo: any, index: number) => (
                    <Typography key={typeInfo.type.name} sx={{ textTransform: 'capitalize' }}>
                      {`${typeInfo.type.name}${index === data.types.length - 1 ? '.' : ','}`}
                    </Typography>
                  ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>Base Stats</Typography>
                </TableCell>
                <TableCell>
                  {data.stats.map((statInfo: any) => (
                    <Box key={statInfo.stat.name} sx={{ mb: 1 }}>
                      <Typography sx={{ textTransform: 'capitalize' }}>{`${statInfo.stat.name}`}</Typography>
                      <BorderLinearProgress variant='determinate' value={statInfo.base_stat}/>
                    </Box>
                  ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>Abilities</Typography>
                </TableCell>
                <TableCell sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                  {data.abilities.map((abilityInfo: any, index: number) => (
                    <Typography key={abilityInfo.ability.name} sx={{ textTransform: 'capitalize' }}>
                      {`${abilityInfo.ability.name}${index === data.abilities.length - 1 ? '.' : ','}`}
                    </Typography>
                  ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant={isCaught ? 'outlined': 'contained'} sx={{ width: 'max-content' }} onClick={handleToggleCatchPokemon}>
          {isCaught ? 'Release!' : 'Catch!'}
        </Button>
      </Box>
    </Container>
  );
};

export default PokemonDetails;
