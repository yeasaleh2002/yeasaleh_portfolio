import { Button, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';


const Project = ({ project }) => {

  const { _id, name, picture, tecnology, about, matches } = project || '';

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper sx={{ backgroundColor: "#1D293A" }}>
        <CardMedia
          component="img"
          style={{ width: matches ? "100%" : '100%', height: matches ? "100%" : '180px', margin: '0 auto', borderRadius: "6px 6px 0px 0px" }}
          image={picture}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{ color: 'whitesmoke', fontWeight: 800, fontSize: matches ? "22px" : "26px" }} >
            {name}
          </Typography>
          <Typography sx={{ fontSize: matches ? "14px" : "16px", color: "whitesmoke", mt: 1, mb: 1 }} >
            {about}
          </Typography>
          <Typography sx={{ fontSize: matches ? "12px" : "14px", color: "#A0A5AC", mb: 1 }}>
            {tecnology}
          </Typography>
          {/* checking single service details  */}
          <Link style={{ textDecoration: "none" }} to={`/singleProject/${_id}`}>
            <Button variant="contained" style={{ color: "white", background: "#00CF5D" }}> Details </Button>
          </Link>
        </CardContent>
      </Paper>
    </Grid>
  );
};

export default Project;