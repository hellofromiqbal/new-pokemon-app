import React from 'react';
import { CircularProgress, Container } from "@mui/material";

const LoadingPage = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </Container>
  )
};

export default LoadingPage;
