import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    // data load from database
    useEffect(() => {
        fetch(`/projects.json`)
            .then(response => response.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div style={{ background: '#111A28' }}>
            <Container sx={{ my: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={1.5}>
                        {!matches && (
                            <Box >
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", transform: `rotate(270deg)`, marginLeft: "-100px", width: "260px", mt: 10 }}>
                                    <Box sx={{ backgroundColor: "#1D293A", p: 1, borderRadius: "2px" }}>
                                        <Typography sx={{ color: "whitesmoke", fontSize: matches ? "12px" : "18px", textAlign: !matches && "center", fontWeight: "bold" }}>MY PROJECTS</Typography>
                                    </Box>
                                    <Box><hr style={{ width: "80px" }} /></Box>
                                </Box>
                            </Box>
                        )}
                        {matches && (
                            <Box>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box><hr style={{ width: "60px" }} /></Box>
                                    <Box sx={{ backgroundColor: "#1D293A", p: 0.6, borderRadius: "2px" }}>
                                        <Typography sx={{ color: "whitesmoke", fontSize: matches ? "12px" : "18px", textAlign: !matches && "center", fontWeight: "bold" }}>MY PROJECTS</Typography>
                                    </Box>
                                    <Box><hr style={{ width: "60px" }} /></Box>
                                </Box>
                            </Box>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={12} md={10.5}>
                        <Box sx={{ marginLeft: !matches && "-45px" }}>
                            <Grid container spacing={3}>
                                {projects.map((project) => <Project
                                    key={project._id}
                                    project={project}
                                    matches={matches}
                                />)}
                            </Grid>
                        </Box>
                    </Grid>
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