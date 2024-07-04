import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href={"/"} className='text-2xl md:text-3xl font-semibold'>
            Pokemon App
          </Link>
          <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 } }}>
            <Link href={"/search"}>
              <IoSearch className='text-4xl'/>
            </Link>
            <Link href={"/my-pokemon"}>
              <MdOutlineCatchingPokemon className='text-4xl'/>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
