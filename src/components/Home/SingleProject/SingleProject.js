import { Button, CardContent, CardMedia, Grid, Typography, Container, useTheme, useMediaQuery, Box } from '@mui/material';
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
    fetch(`/singleProject.json`)
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
          <Box sx={{ borderRadius: "16px" }}>
            <CardMedia
              component="img"
              style={{ width: '100%', height: '100%', margin: '0 auto' }}
              image={singleProject?.picture}
              alt={singleProject?.name}
            />
            <CardMedia
              component="img"
              style={{ width: '100%', height: '100%', margin: '0 auto' }}
              image={singleProject?.picture2}
              alt={singleProject?.name}
            />
            <CardMedia
              component="img"
              style={{ width: '100%', height: '100%', margin: '0 auto' }}
              image={singleProject?.picture3}
              alt={singleProject?.name}
            />
            <CardContent sx={{ backgroundColor: "#1D293A" }}>
              <Typography sx={{ color: 'whitesmoke', fontWeight: 'bold', fontSize: matches ? "20px" : "26px" }} >
                {singleProject?.name}
              </Typography>
              <Typography sx={{ fontSize: matches ? "14px" : "16px", color: "#A0A5AC" }}>
                {singleProject?.about2}.
              </Typography>
              <Typography sx={{ fontSize: matches ? "14px" : "16px", color: "#A0A5AC" }}>
                {singleProject?.about3}.
              </Typography>
              <Typography sx={{ fontSize: matches ? "14px" : "16px", color: "#A0A5AC" }}>
                {singleProject?.about4}
              </Typography>
              <Typography sx={{ fontSize: matches ? "14px" : "16px", color: "#A0A5AC" }}>
                {singleProject?.about5}
              </Typography>
              <Typography sx={{ fontSize: matches ? "14px" : "16px", color: "#A0A5AC" }}>
                {singleProject?.about6}
              </Typography>
              <Typography sx={{ fontSize: matches ? "14px" : "16px", color: "#A0A5AC" }}>
                {singleProject?.about7}
              </Typography>
              <Typography sx={{ fontSize: matches ? "16px" : "18px", mt: 2, mb: 1, color: "#A0A5AC" }}>
                {singleProject?.tecnology}
              </Typography>
              {singleProject?.serverLink ?
                <>
                  <a href={singleProject?.liveLink} underline="none" target="_blank" rel="noreferrer">
                    <Button variant="contained" style={{ color: 'white', background: "#00CF5D", margin: "5px" }}> Live Website </Button>
                  </a>
                  <a href={singleProject?.clientLink} underline="none" target="_blank" rel="noreferrer">
                    <Button variant="contained" style={{ color: 'white', background: "#00CF5D", margin: "5px" }}> Client Code </Button>
                  </a>
                  <a href={singleProject?.serverLink} underline="none" target="_blank" rel="noreferrer">
                    <Button variant="contained" style={{ color: 'white', background: "#00CF5D", margin: "5px" }}> Server Code </Button>
                  </a>
                </>
                :
                <>
                  <a href={singleProject?.liveLink} underline="none" target="_blank" rel="noreferrer">
                    <Button variant="contained" style={{ color: 'white', background: "#00CF5D", margin: "5px" }}> Live Website </Button>
                  </a>
                  <a href={singleProject?.clientLink} underline="none" target="_blank" rel="noreferrer">
                    <Button variant="contained" style={{ color: 'white', background: "#00CF5D", margin: "5px" }}> Client Code </Button>
                  </a>
                </>
              }

            </CardContent>

          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default SingleProject;