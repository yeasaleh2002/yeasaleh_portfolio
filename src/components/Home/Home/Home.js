import { Button, Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
          <Container  sx={{ flexGrow: 1 }}>       
            <Grid  sx={{p: 5}} container spacing={2}>
               
               {/* Our dream description part*/}
                <Grid  item  xs={12} md={6}>
                    <Box sx={{p: 2}}>
                        <Typography variant="h4" sx={{mb: 2, color: 'red'}}>
                           Hello
                        </Typography>
                        <Typography variant="h5">
                        I AM YEASALEH
                        </Typography>
                        <Typography  sx={{ my: 3, fontSize: 17, fontWeight: 400, color: 'blue' }}>
                         I am a front end web developer.
                      </Typography>
                     
                        <Link   href="https://drive.google.com/file/d/1BKCozUYxe3K6xTIzdbqBQAS0CuuB7hKu/view?usp=sharing" underline="none" target="_blank">
                        <Button  style={{ color: 'white', background: "tomato" }}>   Download  Resume   </Button>
                        </Link>
                       
                    </Box>
                </Grid>

                {/* Our dream image part */}
                <Grid  sx={{mt: 7, mb: 3}} item xs={12} md={6} >
                    <img  style={{ width: '100%', borderRadius: '10%' }} src="https://i.ibb.co/mBFYNTr/saleh2.png"  alt="bike" />
                </Grid>
            </Grid>

         </Container>
            

           <Projects></Projects>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;