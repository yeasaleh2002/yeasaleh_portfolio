import { Button, CardContent, CardMedia, Grid, Paper, Typography, Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Box } from '@mui/system';


const SingleProject = ({project}) => {

    const { serviceId } = useParams();

    const [projectsDetails, setProjectsDetails] = useState([]);

    const [singleProject, setSingleProject] = useState({});
 
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
      }, [projectsDetails]);
 

    useEffect(() => {
        Aos.init({ duration: 2000 })
     }, []);

    return (

     <Box>
        <Grid sx={{ p: "50px"}} data-aos="fade-up" item xs={12} sm={6} md={6}>
        <Typography style={{ paddingTop: "40px", textAlign: "center"}} variant="h6" gutterBottom component="div">
            Project Id:  {serviceId}
            </Typography>
              
        <Paper elevation={3} sx={{py: 1}}>
         
                <CardMedia
                      component="img"
                      style={{ width: '100%', height: '100%', margin: '0 auto' }}
                      image={singleProject?.picture}
                      alt="green iguana"
                  />

                  <CardContent>
                  <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h4" gutterBottom component="div">
                          {singleProject?.name}
                  </Typography>
              
                  <Typography variant="h6" gutterBottom component="div">
                       Tecnology Used: {singleProject?.tecnology}
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom >
                  {singleProject?.about}.
                  </Typography>



           
               {  singleProject?.serverLink ?
                    <>
                    <Link   href={singleProject?.liveLink} underline="none" target="_blank">
                    <Button variant="contained" style={{  color: 'white', background: "tomato", margin: "5px" }}> Live Website </Button>
                   </Link>
                   <Link   href={singleProject?.clientLink} underline="none" target="_blank">
                    <Button variant="contained" style={{  color: 'white', background: "tomato" ,margin: "5px" }}> Client Code </Button>
                   </Link>
                   <Link   href={singleProject?.serverLink} underline="none" target="_blank">
                    <Button variant="contained" style={{  color: 'white', background: "tomato" , margin: "5px" }}> Server Code </Button>
                   </Link>
                   </>
                   :
                   <>
                          <Link   href={singleProject?.liveLink} underline="none" target="_blank">
                        <Button variant="contained" style={{  color: 'white', background: "tomato", margin: "5px" }}> Live Website </Button>
                    </Link>
                    <Link   href={singleProject?.clientLink} underline="none" target="_blank">
                        <Button variant="contained" style={{  color: 'white', background: "tomato" ,margin: "5px" }}> Client Code </Button>
                    </Link>
                    </>
                 }
                                 
                  </CardContent>
   
        </Paper>  
      </Grid>
      </Box>
    );
};

export default SingleProject;