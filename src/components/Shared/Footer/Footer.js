import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
  const currentTime = new Date()
  const year = currentTime.getFullYear();

  return (
    <div>
      <Box style={{ color: 'whitesmoke', background: '#1D293A', textAlign: "center" }}>
        <Typography style={{ padding: '15px', textAlign: 'center' }}>
          Copyright © {year} portfolio by Yeasaleh. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;