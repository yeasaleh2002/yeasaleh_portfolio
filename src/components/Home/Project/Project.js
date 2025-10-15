import { Button, CardContent, Grid, Paper, Typography, Box, Chip } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = ({ project, matches }) => {
  const { _id, name, tecnology, about, description, liveLink, clientLink } = project || '';

  return (
    <Grid item xs={12}>
      <Paper sx={{ 
        backgroundColor: "#1D293A", 
        border: "1px solid #2A3747",
        transition: "all 0.3s ease",
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          borderColor: "#00CF5D"
        }
      }}>
        <CardContent sx={{ p: 3 }}>
          {/* Header Section */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: matches ? 'column' : 'row', 
            justifyContent: 'space-between', 
            alignItems: matches ? 'flex-start' : 'flex-start', 
            mb: 3,
            gap: matches ? 2 : 0
          }}>
            {/* Left Side - Title and Subtitle */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ 
                color: '#00CF5D', 
                fontSize: matches ? "20px" : "24px", 
                fontWeight: 700,
                mb: 1
              }}>
                {name}
              </Typography>
              <Typography sx={{ 
                color: 'whitesmoke', 
                fontSize: matches ? "14px" : "16px", 
                lineHeight: 1.6,
                maxWidth: matches ? '100%' : '70%'
              }}>
                {about}
              </Typography>
            </Box>
            
            {/* Right Side - Buttons */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: matches ? 'flex-start' : 'flex-end',
              gap: 1,
              minWidth: matches ? '100%' : 'auto'
            }}>
              <a href={liveLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button 
                  variant="outlined" 
                  sx={{ 
                    color: '#00CF5D', 
                    borderColor: '#00CF5D',
                    '&:hover': {
                      backgroundColor: '#00CF5D',
                      color: 'white'
                    }
                  }}
                >
                  Live Site
                </Button>
              </a>
              <a href={clientLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button 
                  variant="outlined" 
                  sx={{ 
                    color: '#00CF5D', 
                    borderColor: '#00CF5D',
                    '&:hover': {
                      backgroundColor: '#00CF5D',
                      color: 'white'
                    }
                  }}
                >
                  GitHub
                </Button>
              </a>
            </Box>
          </Box>
          
          {/* Description Section */}
          <Box sx={{ mb: 3 }}>
            {description?.map((desc, index) => (
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

          {/* Technology Section */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ 
              color: '#00CF5D', 
              fontSize: '14px', 
              fontWeight: 600, 
              mb: 1.5 
            }}>
              Technologies Used:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {tecnology?.split(', ').map((tech, index) => (
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
                  size="small"
                />
              ))}
            </Box>
          </Box>

          {/* Details Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link style={{ textDecoration: "none" }} to={`/singleProject/${_id}`}>
              <Button 
                variant="contained" 
                style={{ color: "white", background: "#00CF5D" }}
                onClick={() => window.open(`/singleProject/${_id}`, '_blank')}
              > 
                Details 
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Paper>
    </Grid>
  );
};

export default Project;