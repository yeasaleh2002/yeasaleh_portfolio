import { Button, CardContent, Grid, Typography, Container, useTheme, useMediaQuery, Box, Chip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";

const SingleProject = ({ project }) => {
  const { serviceId } = useParams();
  const [projectsDetails, setProjectsDetails] = useState([]);
  const [singleProject, setSingleProject] = useState({});
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  // load data
  useEffect(() => {
    fetch(`/projects.json`)
      .then(res => res.json())
      .then(data => setProjectsDetails(data));
  }, []);

  // find data
  useEffect(() => {
    const foundService = projectsDetails.find(
      (service) => service._id === serviceId
    );
    setSingleProject(foundService);
  }, [projectsDetails, serviceId]);

  return (
    <div style={{ background: '#111A28' }}>
      {!matches && <Typography sx={{ color: "whitesmoke", pl: 4, textDecoration: "none" }} component={Link} to="/" >Back To Home</Typography>}
      <Container>
        <Grid sx={{ px: matches ? "0px" : "50px", py: matches ? "0px" : "20px", borderRadius: "6px" }} item xs={12}>
          <Box sx={{ borderRadius: "16px", backgroundColor: "#1D293A", p: 3, border: "1px solid #2A3747" }}>
            <CardContent sx={{ backgroundColor: "transparent", p: 0 }}>
              <Typography sx={{ color: '#00CF5D', fontWeight: 'bold', fontSize: matches ? "24px" : "32px", mb: 2 }} >
                {singleProject?.name}
              </Typography>
              
              <Typography sx={{ fontSize: matches ? "16px" : "18px", color: "whitesmoke", mb: 3, lineHeight: 1.6 }}>
                {singleProject?.about}
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: matches ? "16px" : "18px", color: "#00CF5D", fontWeight: 600, mb: 2 }}>
                  Key Features & Achievements:
                </Typography>
                {singleProject?.description?.map((desc, index) => (
                  <Typography key={index} sx={{ 
                    color: 'whitesmoke', 
                    fontSize: '15px', 
                    lineHeight: 1.6,
                    mb: 1.5,
                    pl: 2,
                    position: 'relative',
                    '&::before': {
                      content: '"•"',
                      color: '#00CF5D',
                      fontWeight: 'bold',
                      position: 'absolute',
                      left: 0
                    }
                  }}>
                    {desc}
                  </Typography>
                ))}
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: matches ? "16px" : "18px", color: "#00CF5D", fontWeight: 600, mb: 2 }}>
                  Technologies Used:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {singleProject?.tecnology?.split(', ').map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech.trim()}
                      sx={{
                        backgroundColor: '#2A3747',
                        color: '#00CF5D',
                        border: '1px solid #00CF5D',
                        '&:hover': {
                          backgroundColor: '#00CF5D',
                          color: 'white'
                        }
                      }}
                      size="medium"
                    />
                  ))}
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <a href={singleProject?.liveLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" style={{ color: 'white', background: "#00CF5D" }}>
                    Live Website
                  </Button>
                </a>
                <a href={singleProject?.clientLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" style={{ color: 'white', background: "#00CF5D" }}>
                    GitHub Code
                  </Button>
                </a>
              </Box>
            </CardContent>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default SingleProject;