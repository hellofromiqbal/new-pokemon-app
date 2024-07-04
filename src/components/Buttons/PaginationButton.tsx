import React from 'react';
import { Button } from '@mui/material';
import { type PaginationButtonProps } from '@/utils/typescript/types';

const PaginationButton = ({ url, setUrl, label, disabled }: PaginationButtonProps) => {
  return (
    <Button
      variant="contained"
      onClick={() => {
        if (url) {
          setUrl(url);
        }
      }}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default PaginationButton;