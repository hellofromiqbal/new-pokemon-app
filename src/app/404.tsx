import React from 'react';
import { Container, Typography } from '@mui/material';

const Custom404Page = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Typography variant="h6" color="error">Error occurred!</Typography>
    </Container>
  )
};

export default Custom404Page;
