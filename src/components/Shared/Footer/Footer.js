import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
  const currentTime = new Date()
  const year = currentTime.getFullYear();

  return (
    <Box sx={{ 
      color: 'whitesmoke', 
      background: '#1D293A', 
      textAlign: "center",
      mt: 0,
      pt: 0
    }}>
      <Typography sx={{ 
        padding: '15px', 
        textAlign: 'center',
        margin: 0
      }}>
        Copyright © {year} portfolio by Yeasaleh. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;