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
        <Container sx={{my: 8}}> 
            <Typography sx={{my: 5, color: 'info.main', fontWeight: 'bold'}} variant="h3">Projects</Typography>
                        
                <Grid container spacing={2}>
                    {
                       projects.map(project => <Project
                            key = {project._id}
                            project = {project}  
                                                
                        >
                            
                        </Project>)
                    }
                </Grid>
        </Container>
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