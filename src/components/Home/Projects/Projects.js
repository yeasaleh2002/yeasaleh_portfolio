import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {

            
        // useState declare
        const [projects, setProjects ] = useState([]);


        // data load from database
        useEffect(() => {
            fetch(`/projects.json`)
            .then(response => response.json())
            .then(data => setProjects(data))
        }, [])


    return (
        <div style={{background: 'black', color: 'white'}}>
        <Container sx={{py: 8}}> 
            <Typography sx={{my: 5, color: 'white', fontWeight: 'bold'}} variant="h3">Projects</Typography>
                        
                <Grid container spacing={4}>
                    {
                       projects.map(project => <Project
                            key = {project._id}
                            project = {project}  
                                                
                        >
                            
                        </Project>)
                    }
                </Grid>
        </Container>
        </div>
    );
};

export default Projects;


/* 
https://i.ibb.co/Ry206YN/Screenshot-212.png
https://i.ibb.co/LnwzdGf/Screenshot-213.png
https://i.ibb.co/bFckLqS/Screenshot-214.png
https://i.ibb.co/Bs0MNnp/Screenshot-215.png
https://i.ibb.co/vX2ydKZ/Screenshot-217.png

*/