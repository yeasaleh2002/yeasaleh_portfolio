import { Button, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Project.css';


const Project = ({project}) => {

    const {_id, name, picture, tecnology, about} = project || '';

    useEffect(() => {
        Aos.init({ duration: 2000 })
     }, []);

    return (
        <Grid  data-aos="fade-up" item xs={12} sm={6} md={6} lg={4}>
        <Paper  className='projects' elevation={3} sx={{py: 1}}>
         
                <CardMedia
                      component="img"
                      data-aos="zoom-in-up"
                      style={{ width: '100%', height: '100%', margin: '0 auto' }}
                      image={picture}
                      alt="green iguana"
                  />

                  <CardContent>
                  <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                          {name}
                  </Typography>
              
                  <Typography sx={{fontSize: "16px"}} gutterBottom component="div">
                      <b> Tecnology Used: </b> {tecnology}
                  </Typography>

                  <Typography sx={{fontSize: "13px"}} variant="caption" display="block" gutterBottom >
                  {about}.
                  </Typography>

                {/* checking single service details  */}
                <Link style={{textDecoration: "none"}} to={`/singleProject/${_id}`}>
                <Button  variant="contained"> Check Details </Button>
                </Link>

                                 
                  </CardContent>
   
        </Paper>  
      </Grid>
    );
};

export default Project;