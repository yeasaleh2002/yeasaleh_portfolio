import { CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Services.css';

const Services = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 })
 }, []);

    return (
      <div style={{background: '#B1A296', padding: '1px'}}>
        <Container sx={{my: 8}}> 
        <Typography sx={{my: 5, color: 'cyan', fontWeight: 'bold'}} variant="h3">Services</Typography>
                    
            <Grid container spacing={3}>
               
              <Grid  data-aos="fade-up" item xs={12} sm={6} md={4}>
                <Paper className='services' elevation={3} sx={{py: 1, borderLeft: " 6px solid #F40BE5", paddingLeft: "10px", paddingRight: "6px"} }>
                
                
                        <CardMedia
                            component="img"
                            data-aos="zoom-in-up"
                            style={{ width: '100%', height: '100%', margin: '0 auto' }}
                             src="https://i.ibb.co/dW079mm/images-10.jpg"
                            alt="green iguana"
                        />

                        <CardContent>
                        <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
                        WEB DEVELOPMENT
                        </Typography>
                    
                       
                        <Typography variant="caption" display="block" gutterBottom >
                         Web development is the work involved in developing a website for the Internet or an internet. Web development can range from developing a simple single static page of plain text to complex web applications, businesses, and social network services. 
                        </Typography>

                                        
                        </CardContent>
        
                </Paper>  
            </Grid>
              <Grid data-aos="fade-down" item xs={12} sm={6} md={4}>
                <Paper className='services' elevation={3} sx={{py: 1, borderLeft: " 6px solid #08F9F0", paddingLeft: "10px", paddingRight: "6px"}}>
                
                        <CardMedia
                            component="img"
                            data-aos="zoom-in-up"
                            style={{ width: '100%', height: '100%', margin: '0 auto' }}
                             src='https://i.ibb.co/Fmbnj9p/service-card-Bug.jpg'
                            alt="green iguana"
                        />

                        <CardContent>
                        <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
                        BUG FIXING
                        </Typography>
                    
                        <Typography variant="caption" display="block" gutterBottom >
                        A patch is a set of changes to a computer program or its supporting data designed to update, fix, or improve it. This includes fixing security vulnerabilities and other bugs, with such patches usually being called bugfixes or bug fixes.

                        </Typography>

                                        
                        </CardContent>
        
                </Paper>  
            </Grid>
              <Grid data-aos="fade-right" item xs={12} sm={6} md={4}>
                <Paper className='services' elevation={3} sx={{py: 1, borderLeft: " 6px solid #44F908", paddingLeft: "10px", paddingRight: "6px"}}>
                
                        <CardMedia
                            component="img"
                            data-aos="zoom-in-down"
                            style={{ width: '100%', height: '100%', margin: '0 auto' }}
                             src="https://i.ibb.co/s21kv9W/psychology-web-design-00-lead.jpg"
                            alt="green iguana"
                        />



                        <CardContent>
                        <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
                        RESPONSIVE DESIGN
                        </Typography>
                    
                    
                        <Typography variant="caption" display="block" gutterBottom >
                        Responsive web design or responsive design is an approach to web design that aims to make web pages render well on a variety of devices and window or screen sizes from minimum to maximum display size to ensure usability and satisfaction. 
                        </Typography>

                                        
                        </CardContent>
        
                </Paper>  
            </Grid>
              <Grid data-aos="fade-left" item xs={12} sm={6} md={4}>
                <Paper className='services'  elevation={3} sx={{py: 1, borderLeft: " 6px solid #F14715", paddingLeft: "10px", paddingRight: "6px"}}>
                
                        <CardMedia
                            component="img"
                            data-aos="zoom-in-down"
                            style={{ width: '100%', height: '100%', margin: '0 auto' }}
                             src='https://i.ibb.co/qWLsVmS/images-11-1.jpg'
                            alt="green iguana"
                        />

                        <CardContent>
                        <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
                             WEB DESIGN
                        </Typography>
                  
                        <Typography variant="caption" display="block" gutterBottom >
                        Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software.
                        </Typography>

                                        
                        </CardContent>
        
                </Paper>  
            </Grid>

            </Grid>
      </Container>
      </div>
    );
};

export default Services;