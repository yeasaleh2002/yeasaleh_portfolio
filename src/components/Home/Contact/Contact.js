import { Button, Grid, Link, TextField } from '@mui/material';
import React from 'react';
import emailjs from "emailjs-com";



const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_ggx56xf', 'template_na1ga32', e.target, 'user_A8jqw5Rr3ODGBrkDDSJIM')

        .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
        });
        e.target.reset();
        }
        


    return (
        <div  style={{ backgroundColor: 'whitesmoke'}}>
             
         
         {/* contact part  */}
        <Grid  sx={{p: 5}} container spacing={2}>
           

                     <Grid  sx={{fontSize: 20}} item  xs={12} md={6}>                      
                     <h2 style={{color: "#E020F3"}}>Contact Info</h2>
                        <p > <i style={{color: "#0EE2D4", fontSize: "25px"}} className=" fas fa-phone-square-alt"></i> <a style={{ textDecoration: "none", color: 'black' }} href="tel:+8801757604381">+8801757604381</a>  </p>
                        <p> <i style={{color: "blue", fontSize: "25px"}} className=" far fa-envelope"></i> yeasalehofficial2002@gmail.com </p>
                        <p> <i style={{color: "red", fontSize: "25px"}} className=" fas fa-map-marked-alt"></i> 7720, Pangsha , Rajbari, Dhaka</p>
                        <p>  
                            <Link  style={{ color: 'black'}}  href="https://github.com/yeasaleh2002" underline="none" target="_blank">
                            <i style={{color: "gray", fontSize: "25px"}} className="fab fa-github"></i> https://github.com/yeasaleh2002
                            </Link>
                        </p>
                        <p> 
                            <Link style={{ color: 'black'}} href="https://www.linkedin.com/in/yea-saleh-970281218/" underline="none" target="_blank">
                           <i style={{color: "#012DFB", fontSize: "25px"}} className="fab fa-linkedin"></i> https://www.linkedin.com/in/yea-saleh-970281218/
                          </Link>
                        </p>
                        
                       
                        
                     </Grid>
                    
        {/* message form */}
        <Grid  item  xs={12} md={6}>
        <form onSubmit={sendEmail}>

                <TextField
                    sx={{width: "90%", m: 1}}                      
                    id="outlined-size-small"
                    placeholder="Name"
                    name="name"
                    size="small"
                />
               
                <TextField
                    sx={{width: "90%", m: 1}}            
                    id="outlined-size-small"
                    name="email"
                    placeholder="Your Email"
                    size="small"   
                />

                <TextField
                    sx={{width: "90%", m: 1}}              
                    id="outlined-size-small"
                    name="subject"  
                    placeholder="Subject"
                    size="small"
                />

                <TextField   
                    sx={{width: "90%", m: 1}}
                    id="outlined-size-small"
                    placeholder="Message"
                    size="large"
                    name="message"
                />

             <Button style={{ color: 'white', background: "tomato"}} type='submit'> Send Message </Button>
            </form>

        </Grid>
      </Grid>

    </div>
    );
};

export default Contact;