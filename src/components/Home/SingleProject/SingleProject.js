import { Button, CardContent, CardMedia, Grid, Paper, Typography, Link, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Aos from 'aos';
import 'aos/dist/aos.css';



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
     <div style={{background: 'gray', color: 'white'}}>
     <Container  sx={{ mx: "auto" }}>
        <Grid sx={{ p: "50px"}} data-aos="fade-up" item xs={12}>
        <Typography style={{paddingTop: "40px", textAlign: "center"}}  gutterBottom >
            Project Id: {serviceId}
            </Typography>
        <Paper elevation={3} sx={{py: 1}}>
         
                <CardMedia
                      component="img"
                      data-aos="zoom-in-down"
                      style={{ width: '100%', height: '100%', margin: '0 auto' }}
                      image={singleProject?.picture}
                      alt="green iguana"                      
                  />
                <CardMedia
                      component="img"
                      data-aos="zoom-in-up"
                      style={{ width: '100%', height: '100%', margin: '0 auto' }}
                      image={singleProject?.picture2}
                      alt="green iguana"                      
                  />
                <CardMedia
                      component="img"
                      data-aos="zoom-in-left"
                      style={{ width: '100%', height: '100%', margin: '0 auto' }}
                      image={singleProject?.picture3}
                      alt="green iguana"                      
                  />

                  <CardContent>
                  <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h4" gutterBottom component="div">
                          {singleProject?.name}
                  </Typography>
              
                  <Typography sx={{fontSize: "20px"}} gutterBottom component="div">
                      <b> Tecnology Used: </b> {singleProject?.tecnology}
                  </Typography>

                  <Typography  sx={{fontSize: "16px"}} variant="caption" display="block" gutterBottom >
                  {singleProject?.about2}.
                  </Typography>

                  <Typography  sx={{fontSize: "16px"}} variant="caption" display="block" gutterBottom >
                    {singleProject?.about3}.
                  </Typography>

                  <Typography  sx={{fontSize: "16px"}} variant="caption" display="block" gutterBottom >
                    {singleProject?.about4}
                  </Typography>

                  <Typography  sx={{fontSize: "16px"}} variant="caption" display="block" gutterBottom >
                    {singleProject?.about5}
                  </Typography>

                  <Typography  sx={{fontSize: "16px"}} variant="caption" display="block" gutterBottom >
                    {singleProject?.about6}
                  </Typography>

                  <Typography  sx={{fontSize: "16px"}} variant="caption" display="block" gutterBottom >
                    {singleProject?.about7}
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
      </Container>
      </div>
    );
};

export default SingleProject;