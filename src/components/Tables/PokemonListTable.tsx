import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { Typography } from '@mui/material';

import { TableProps, pokemonData } from '@/utils/typescript/types';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface PokemonListTableProps extends TableProps {
  isMyPokemon?: boolean;
}

const PokemonListTable = ({ data, isMyPokemon = false }: PokemonListTableProps) => {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography sx={{ fontWeight: 'bold' }}>No</Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 'bold' }}>Name</Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography sx={{ fontWeight: 'bold' }}>Action</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((pokemon: pokemonData, index: number) => (
            <StyledTableRow key={pokemon.name}>
              <TableCell>
                <Typography sx={{ fontWeight: 600 }}>
                  {isMyPokemon ? index + 1 : pokemon.url.split("/")[6]}
                </Typography>
              </TableCell>
              <TableCell sx={{ textTransform: 'capitalize' }}>
                <Typography sx={{ textTransform: 'uppercase' }}>{pokemon.name}</Typography>
              </TableCell>
              <TableCell align="center">
                <Link href={`/${pokemon.name}`}>Details</Link>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PokemonListTable;
