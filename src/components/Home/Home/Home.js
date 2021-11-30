import { Button, Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Typical from 'react-typical'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Services from '../Services/Services';


const Home = () => {

     useEffect(() => {
        Aos.init({ duration: 2000 })
     }, []);

    return (
        <div>
          <Container data-aos="fade-up"  sx={{ flexGrow: 1 }}>       
            <Grid  sx={{p: 5}} container spacing={2}>
               
               {/* Our dream description part*/}
                <Grid  item  xs={12} md={6}>
                    <Box sx={{p: 2}}>
                        <Typography variant="h3" sx={{mb: 2, color: 'gray'}}>
                           Hello
                        </Typography>
                        <Typography variant="h2" sx={{fontWeight: "bold", color: "Tomato"}}>
                        I AM YEASALEH
                        </Typography>
                        <Typography variant="h4"  sx={{ my: 3,  fontWeight: 'bold', color: '#EA3188' }}>
                         I AM A{' '}
                    
                            <Typical 
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    'WEB DEVELOPER.',
                                    2000,
                                    'REACT DEVELOPER.',
                                    1500,
                                    'FRONT END WEB DEVELOPER.',
                                    2000,
                                    'MERN STACK WEB DEVELOPER.',
                                    1500,

                                ]}
                            /> 

                         </Typography>
                     
                        <Link   href="https://drive.google.com/file/d/1BKCozUYxe3K6xTIzdbqBQAS0CuuB7hKu/view?usp=sharing" underline="none" target="_blank">
                        <Button  style={{ color: 'white', background: "tomato" }}>   Download  Resume   </Button>
                        </Link>
                       
                    </Box>
                </Grid>

                {/* Our dream image part */}
                <Grid  sx={{mt: 7, mb: 3}} item xs={12} md={6} >
                    <img  style={{ width: '100%', borderRadius: '10%' }} src="https://i.ibb.co/mBFYNTr/saleh2.png"  alt="saleh" />
                </Grid>
            </Grid>

         </Container>
        
           <Box data-aos="fade-right">
           <Services></Services>
           </Box>

           <Box data-aos="fade-up">
           <Projects></Projects>
           </Box>

           <Box data-aos="fade-left" >
           <About></About>
           </Box>

           <Box data-aos="zoom-out-down">
           <Contact></Contact>
           </Box>
           
         
           
        </div>
    );
};

export default Home;