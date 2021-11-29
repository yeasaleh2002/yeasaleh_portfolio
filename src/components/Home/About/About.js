import { Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const About = () => {
    return (
        <div >
          


         {/* safety packages */}
           <Container  sx={{ flexGrow: 1 }}>
             <Grid  sx={{p: 5}} container spacing={2}>
              
              {/* safety packages image*/}
               <Grid  sx={{mt: 4, mb: 3}} item xs={12} md={6} >
                    <img  style={{ width: '100%', borderRadius: '10px'}} src="https://i.ibb.co/bgw6rXh/1613136254435-1-e.jpg"  alt="bike" />
                </Grid>

                {/* safety packages description*/}
                <Grid  item  xs={12} md={6}>
                    <Box sx={{p: 2}}>
                        <Typography variant="h4" sx={{mb: 2, color: 'red'}}>
                           About Me
                        </Typography>
                     
                        <Typography  sx={{ my: 1, fontSize: 20, fontWeight: 400}}>
                        Hello! I am Yeasaleh. A Passionate Web Developer. I Develop MERN stack web Application. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am a quick learner. I believe in hard work and efficiency. I always like to learn new things.

                        </Typography>
                        <Typography  sx={{ my: 1, fontSize: 18, fontWeight: 400}}>

                        <b>  ● Expertise: </b>   HTML5, CSS3, Bootstrap5, JavaScript, React.js, React Bootstrap, React Router Dom.
                            
                        </Typography>
                        <Typography  sx={{ my: 1, fontSize: 18, fontWeight: 400}}>

                        <b>  ● Comfortable: </b>  Material-Ui, MongoDB , React Hook form, Node.js, Express.js, REST API, JSON .
                          
                        </Typography>
                        <Typography  sx={{ my: 1, fontSize: 18, fontWeight: 400}}>

                        <b> ● Tools: </b>   VS Code, Chrome Dev tool, Firebase, Git bash, Npm .
                            
                        </Typography>
                       
                        <Typography  sx={{ my: 1, fontSize: 18, fontWeight: 400}}>

                        <b> ● Hosting: </b>  Firebase, Netlify, Heroku .

                        </Typography>
                        <Typography  sx={{ my: 1, fontSize: 18, fontWeight: 400}}>
                          
                          <b> ● Github Profile : </b>
                         
                            <Link  style={{ color: 'black'}}  href="https://github.com/yeasaleh2002" underline="none" target="_blank">
                                 https://github.com/yeasaleh2002
                            </Link>
                        
                        </Typography>
                        <Typography  sx={{ my: 1, fontSize: 18, fontWeight: 400}}>
                          <b> ●  LinkedIn Profile :  </b>
                            <Link style={{ color: 'black'}} href="https://www.linkedin.com/in/yea-saleh-970281218/" underline="none" target="_blank">
                             https://www.linkedin.com/in/yea-saleh-970281218/
                            </Link>
                        </Typography>
                    </Box>
                </Grid>                
            </Grid>
         </Container>

        </div>
    );
};

export default About;