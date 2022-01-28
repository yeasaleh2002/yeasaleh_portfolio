import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
           <div>
              <Box style={{ color: 'white' , background: '#5089E2', textAlign: "center" }}>
                 <Box>

                     <Link style={{ color: 'white' , padding: "15px", fontSize: "38px" }} href="https://www.linkedin.com/in/yea-saleh-970281218/" underline="none" target="_blank">
                       <i className="fab fa-linkedin"></i>
                     </Link>
                     <Link  style={{ color: 'white' , padding: "15px", fontSize: "38px" }}  href="https://github.com/yeasaleh2002" underline="none" target="_blank">
                       <i className="fab fa-github"></i>
                     </Link>
             
                </Box>
                <Box sx={{paddinTop: '20px'}}> 
                      <Typography variant="h5" style={{ padding: '30px' ,  textAlign: 'center' }}>
                         Copyright © 2021 Protfolio by Yeasaleh. All rights reserved.
                      </Typography>
                </Box>          
              </Box>
          </div>
    );
};

export default Footer;