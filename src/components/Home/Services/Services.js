import React, { useState } from 'react';
import { Box, Container, Grid, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material';
import react from "../../images/react.png";
import mui from "../../images/mui.png";
import redux from "../../images/redux.png";
import vitest from "../../images/vitest.svg";
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
import sql from "../../images/sql.png";
import PostgreSQL from "../../images/postgres.png";
import prisma from "../../images/prisma.png";
import mysql from "../../images/mysql.png";
import restapi from "../../images/restapi.svg";
import supabase from "../../images/supabase.jpeg";
import webpack from "../../images/webpack.png";
import babel from "../../images/babel.png";
import jenkins from "../../images/jenkins.png";
import firecrawel from "../../images/firecrawel.jpeg";
import getstream from "../../images/getstream.jpeg";
import mailerlite from "../../images/mailerlite.png";
import stripe from "../../images/stripe.jpeg";
import LemonSqueezy from "../../images/lemon.jpeg";
import paytm from "../../images/pytm.png";
import weweb from "../../images/weweb.jpeg";
import make from "../../images/make.png";
import Pipedrive from "../../images/pipedrive.png";

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
          {/* {console.log("value", value)} */}
          <Grid item xs={12} sm={12} md={10.5}>
            <Box sx={{ marginLeft: !matches && "-28px" }}>
              <Tabs value={value} onChange={handleChange} indicatorColor="none" variant="scrollable" scrollButtons="auto">
                <Tab label="Front-End" {...a11yProps(0)} style={{ fontSize: '16px', color: 'whitesmoke', borderRadius:"6px", backgroundColor: value === 0 ? "#00CF5D" : "", fontWeight: value === 0 ? 800 : 500, border: value === 0 ? "" : "2px solid #00CF5D", padding:"0px 25px" }} />
                <Tab label="Back-End" {...a11yProps(1)} style={{ fontSize: '16px', color: 'whitesmoke', borderRadius:"6px", backgroundColor: value === 1 ? "#00CF5D" : "", fontWeight: value === 1 ? 800 : 500, border: value === 1 ? "" : "2px solid #00CF5D", padding:"0px 25px", marginLeft: "12px", marginRight: "12px" }}  />
                <Tab label="Tools" {...a11yProps(2)} style={{ fontSize: '16px', color: 'whitesmoke', borderRadius:"6px", backgroundColor: value === 2 ? "#00CF5D" : "", fontWeight: value === 2 ? 800 : 500, border: value === 2 ? "" : "2px solid #00CF5D", padding:"0px 25px" }}  />
              </Tabs>
            </Box>
            <Box sx={{ marginLeft: !matches && "-45px" }}>
              <CustomTabPanel value={value} index={0} >
                <Grid container spacing={3}>
                  {frontEnd?.map((web) => (
                    <Grid item xs={6} sm={4} md={3} key={web?.id}>
                      <Box sx={{
                        ...skillsMainBox,
                        transition: "all 0.3s ease",
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                          borderColor: "#00CF5D"
                        },
                        border: "1px solid #2A3747"
                      }}>
                        <img src={web?.image} alt={web?.name} style={{ width: "75px", height: "75px" }} />
                        <Typography sx={{ color: "whitesmoke", fontSize: matches ? "18px" : "26px", fontWeight: 800, mt: 1 }}>{web?.name}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1} >
                <Grid container spacing={3}>
                  {backEnd?.map((web) => (
                    <Grid item xs={6} sm={4} md={3} key={web?.id}>
                      <Box sx={{
                        ...skillsMainBox,
                        transition: "all 0.3s ease",
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                          borderColor: "#00CF5D"
                        },
                        border: "1px solid #2A3747"
                      }}>
                        <img src={web?.image} alt={web?.name} style={{ width: "75px", height: "75px" }} />
                        <Typography sx={{ color: "whitesmoke", fontSize: matches ? "18px" : "26px", fontWeight: 800, mt: 1 }}>{web?.name}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2} >
                <Grid container spacing={3}>
                  {tools?.map((web) => (
                    <Grid item xs={6} sm={4} md={3} key={web?.id}>
                      <Box sx={{
                        ...skillsMainBox,
                        transition: "all 0.3s ease",
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                          borderColor: "#00CF5D"
                        },
                        border: "1px solid #2A3747"
                      }}>
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

const frontEnd = [
  { id: 1, name: "JavaScript", image: JS },
  { id: 2, name: "TypeScript", image: TS },
  { id: 3, name: "React.js", image: react },
  { id: 4, name: "Next.js", image: nextjs },
  { id: 5, name: "Redux Toolkit", image: redux },
  { id: 6, name: "Tailwind CSS", image: tailwind },
  { id: 7, name: "Material-Ui", image: mui },
  { id: 8, name: "Ant Design", image: antDesign },
  { id: 9, name: "Vitest", image: vitest }, // Using JS image as placeholder
];

const backEnd = [
  { id: 1, name: "Node.js", image: nodeJS },
  { id: 2, name: "Express.js", image: expressJS },
  { id: 3, name: "SQL", image: sql }, // Using JS image as placeholder
  { id: 4, name: "PostgreSQL", image: PostgreSQL }, // Using JS image as placeholder
  { id: 5, name: "Prisma", image: prisma }, // Using JS image as placeholder
  { id: 6, name: "MySQL", image: mysql }, // Using JS image as placeholder
  { id: 7, name: "REST API", image: restapi }, // Using JS image as placeholder
  { id: 8, name: "AWS", image: aws },
  { id: 9, name: "GraphQL", image: graphql },
  { id: 10, name: "Supabase", image: supabase }, // Using JS image as placeholder
];

const tools = [
  { id: 1, name: "Firebase", image: firebase },
  { id: 2, name: "Vite", image: vite },
  { id: 3, name: "Webpack", image: webpack }, // Using JS image as placeholder
  { id: 4, name: "Babel", image: babel }, // Using JS image as placeholder
  { id: 5, name: "JWT", image: JWT },
  { id: 6, name: "Jenkins", image: jenkins }, // Using JS image as placeholder
  { id: 7, name: "Jira", image: jira },
  { id: 8, name: "Trello", image: terllo },
  { id: 9, name: "Bitbucket", image: bitBucket },
  { id: 10, name: "Zoho Desk", image: zoho },
  { id: 11, name: "Firecrawl", image: firecrawel }, // Using JS image as placeholder
  { id: 12, name: "Getstream.io", image: getstream }, // Using JS image as placeholder
  { id: 13, name: "Mailerlite", image: mailerlite }, // Using JS image as placeholder
  { id: 14, name: "Stripe", image: stripe }, // Using JS image as placeholder
  { id: 15, name: "LemonSqueezy", image: LemonSqueezy }, // Using JS image as placeholder
  { id: 16, name: "Paytm", image: paytm }, // Using JS image as placeholder
  { id: 17, name: "Weweb", image: weweb }, // Using JS image as placeholder
  { id: 18, name: "Make.com", image: make }, // Using JS image as placeholder
  { id: 19, name: "Pipedrive", image: Pipedrive }, // Using JS image as placeholder
];

const Programming = [
  { id: 1, name: "C", image: C }
];

const skillsMainBox = {
  backgroundColor: "#1D293A",
  padding: "35px 25px",
  borderRadius: "6px"
}