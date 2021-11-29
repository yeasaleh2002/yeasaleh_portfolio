import { Button, CardContent, CardMedia, Grid, Paper, Typography, Link } from '@mui/material';
import React from 'react';


const Project = ({project}) => {

    const { name, picture, tecnology, about, liveLink, serverLink, clientLink} = project || '';


    return (
        <Grid item xs={12} sm={6} md={6}>
        <Paper elevation={3} sx={{py: 1}}>
         
                <CardMedia
                      component="img"
                      style={{ width: '100%', height: '100%', margin: '0 auto' }}
                      image={picture}
                      alt="green iguana"
                  />

                  <CardContent>
                  <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h4" gutterBottom component="div">
                          {name}
                  </Typography>
              
                  <Typography variant="h6" gutterBottom component="div">
                       Tecnology Used: {tecnology}
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom >
                  {about.slice(0, 205)}.
                  </Typography>
                  
               
                       
           
               {  serverLink ?
                    <>
                    <Link   href={liveLink} underline="none" target="_blank">
                    <Button variant="contained" style={{  color: 'white', background: "tomato", margin: "5px" }}> Live Website </Button>
                   </Link>
                   <Link   href={clientLink} underline="none" target="_blank">
                    <Button variant="contained" style={{  color: 'white', background: "tomato" ,margin: "5px" }}> Client Code </Button>
                   </Link>
                   <Link   href={serverLink} underline="none" target="_blank">
                    <Button variant="contained" style={{  color: 'white', background: "tomato" , margin: "5px" }}> Server Code </Button>
                   </Link>
                   </>
                   :
                   <>
                          <Link   href={liveLink} underline="none" target="_blank">
                        <Button variant="contained" style={{  color: 'white', background: "tomato", margin: "5px" }}> Live Website </Button>
                    </Link>
                    <Link   href={clientLink} underline="none" target="_blank">
                        <Button variant="contained" style={{  color: 'white', background: "tomato" ,margin: "5px" }}> Client Code </Button>
                    </Link>
                    </>
                 }
                                 
                  </CardContent>
   
        </Paper>  
      </Grid>
    );
};

export default Project;