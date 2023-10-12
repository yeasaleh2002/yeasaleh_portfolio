import React, { useState } from 'react';
import { Box, Container, Grid, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material';
import react from "../../images/react.png";
import mui from "../../images/mui.png";
import redux from "../../images/redux.png";
import graphql from "../../images/graphql.png";
import aws from "../../images/aws.png";
import nodeJS from "../../images/nodeJS.png";
import expressJS from "../../images/expressJS.png";
import mongodb from "../../images/mongodb.png";
import firebase from "../../images/firebase.png";
import JWT from "../../images/JWT.png";
import heroku from "../../images/heroku.png";
import jira from "../../images/jira.png";
import terllo from "../../images/terllo.png";
import bitBucket from "../../images/bitBucket.png";
import zoho from "../../images/zoho.png";
import JS from "../../images/JS.png";
import TS from "../../images/TS.png";
import C from "../../images/C.png";
import tailwind from "../../images/tailwind.png";
import vite from "../../images/vite,.png";
import PropTypes from 'prop-types';
import nextjs from "../../images/nextJs.png";
import antDesign from "../../images/antDesign.png";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Services = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ background: '#111A28' }}>
      <Container sx={{ my: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={1.5}>
            {!matches && (
              <Box >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", transform: `rotate(270deg)`, marginLeft: "-100px", width: "260px", mt: 10 }}>
                  <Box sx={{ backgroundColor: "#1D293A", p: 1, borderRadius: "2px" }}>
                    <Typography sx={{ color: "whitesmoke", fontSize: matches ? "12px" : "18px", textAlign: !matches && "center", fontWeight: "bold" }}>MY SKILLS</Typography>
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
                    <Typography sx={{ color: "whitesmoke", fontSize: matches ? "12px" : "18px", textAlign: !matches && "center", fontWeight: "bold" }}>MY SKILLS</Typography>
                  </Box>
                  <Box><hr style={{ width: "60px" }} /></Box>
                </Box>
              </Box>
            )}
          </Grid>
          {console.log("value", value)}
          <Grid item xs={12} sm={12} md={10.5}>
            <Box sx={{ marginLeft: !matches && "-28px" }}>
              <Tabs value={value} onChange={handleChange} indicatorColor="none" variant="scrollable" scrollButtons="auto">
                <Tab label="Web" {...a11yProps(0)} style={{ fontSize: '16px', color: 'whitesmoke', borderRadius:"6px", backgroundColor: value === 0 ? "#00CF5D" : "", fontWeight: value === 0 ? 800 : 500, border: value === 0 ? "" : "2px solid #00CF5D", padding:"0px 25px" }} />
                <Tab label="Programming" {...a11yProps(1)} style={{ fontSize: '16px', color: 'whitesmoke', borderRadius:"6px", backgroundColor: value === 1 ? "#00CF5D" : "", fontWeight: value === 1 ? 800 : 500, border: value === 1 ? "" : "2px solid #00CF5D", padding:"0px 25px", marginLeft: "12px", marginRight: "12px" }}  />
                <Tab label="Tools" {...a11yProps(2)} style={{ fontSize: '16px', color: 'whitesmoke', borderRadius:"6px", backgroundColor: value === 2 ? "#00CF5D" : "", fontWeight: value === 2 ? 800 : 500, border: value === 2 ? "" : "2px solid #00CF5D", padding:"0px 25px" }}  />
              </Tabs>
            </Box>
            <Box sx={{ marginLeft: !matches && "-45px" }}>
              <CustomTabPanel value={value} index={0} >
                <Grid container spacing={2}>
                  {webDev?.map((web) => (
                    <Grid item xs={6} sm={3} md={2.4}>
                      <Box key={web?.id} sx={skillsMainBox}>
                        <img src={web?.image} alt={web?.name} style={{ width: "75px", height: "75px" }} />
                        <Typography sx={{ color: "whitesmoke", fontSize: matches ? "18px" : "26px", fontWeight: 800, mt: 1 }}>{web?.name}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1} >
                <Grid container spacing={2}>
                  {Programming?.map((web) => (
                    <Grid item xs={6} sm={3} md={2.4}>
                      <Box key={web?.id} sx={skillsMainBox}>
                        <img src={web?.image} alt={web?.name} style={{ width: "75px", height: "75px" }} />
                        <Typography sx={{ color: "whitesmoke", fontSize: matches ? "18px" : "26px", fontWeight: 800, mt: 1 }}>{web?.name}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2} >
                <Grid container spacing={2}>
                  {tools?.map((web) => (
                    <Grid item xs={6} sm={3} md={2.4}>
                      <Box key={web?.id} sx={skillsMainBox}>
                        <img src={web?.image} alt={web?.name} style={{ width: "75px", height: "75px" }} />
                        <Typography sx={{ color: "whitesmoke", fontSize: matches ? "18px" : "26px", fontWeight: 800, mt: 1 }}>{web?.name}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CustomTabPanel>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Services;

const webDev = [
  { id: 1, name: "React.js", image: react },
  { id: 2, name: "Redux", image: redux },
  { id: 3, name: "Next.js", image: nextjs },
  { id: 4, name: "Material-Ui", image: mui },
  { id: 5, name: "GraphQL", image: graphql },
  { id: 6, name: "AWS", image: aws },
  { id: 7, name: "Node.js", image: nodeJS },
  { id: 8, name: "Express.js", image: expressJS },
  { id: 9, name: "MongoDB", image: mongodb },
  { id: 10, name: "Tailwind", image: tailwind },
  { id: 11, name: "Ant Design", image: antDesign },
];

const tools = [
  { id: 1, name: "Firebase", image: firebase },
  { id: 2, name: "JWT Token", image: JWT },
  { id: 3, name: "Heroku", image: heroku },
  { id: 4, name: "Jira", image: jira },
  { id: 5, name: "Trello", image: terllo },
  { id: 6, name: "Bitbucket", image: bitBucket },
  { id: 7, name: "Zoho Desk", image: zoho },
  { id: 7, name: "Vite.js", image: vite },
];

const Programming = [
  { id: 1, name: "JavaScript", image: JS },
  { id: 2, name: "TypeScript", image: TS },
  { id: 3, name: "C", image: C }
];

const skillsMainBox = {
  backgroundColor: "#1D293A",
  padding: "35px 25px",
  borderRadius: "6px"
}