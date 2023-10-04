import React from 'react';
import { Box, Button, Container, Grid, Link, Typography, useMediaQuery, useTheme } from '@mui/material';


const Contact = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div style={{ backgroundColor: '#111A28' }}>
            <Container>
                <Box sx={{ mt: 3, py: 4 }}>
                    {matches && (
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box><hr style={{ width: "40px" }} /></Box>
                            <Box sx={{ backgroundColor: "#1D293A", p: 0.6, borderRadius: "2px" }}>
                                <Typography sx={{ color: "whitesmoke", fontSize: matches ? "12px" : "18px", textAlign: !matches && "center", fontWeight: "bold" }}>CONTACT ME</Typography>
                            </Box>
                            <Box><hr style={{ width: "40px" }} /></Box>
                        </Box>
                    )}
                    <Grid sx={{ p: !matches && 1 }} container spacing={2}>
                        <Grid item xs={12} md={5.5}>
                            <Box sx={{ p: 2 }}>
                                <Typography sx={{ color: "whitesmoke", fontSize: matches ? "12px" : "18px", textAlign: matches && "center" }}>
                                    Empower Your Vision
                                </Typography>
                                <Typography sx={{ color: "whitesmoke", fontSize: matches ? "12px" : "18px", mb: 1, textAlign: matches && "center"}}>
                                    Ready to turn dreams into digital reality? Don't wait—reach out today and let's craft extraordinary experiences that leave a lasting impact.
                                </Typography>
                                <Box sx={{ display: matches && "flex", alignItems: matches && "center", justifyContent: matches && "center", mb: 2, mt: 1 }}>
                                    <a href="mailto:yeasalehofficial2002@gmail.com">
                                        <Button style={{ color: "white", background: "#00CF5D", padding: matches ? "10px 15px 10px 15px" : "15px 20px 15px 20px" }}>
                                            Contact Me
                                        </Button>
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box sx={{ p: 1 }}>
                                <Box>
                                    <Typography sx={matches ? titleStyleRes : titleStyle} >Email</Typography>
                                    <Typography sx={matches ? titleDesRes : titleDes} ><a style={matches ? titleDesRes : titleDes} href="mailto:yeasalehofficial2002@gmail.com">yeasalehofficial2002@gmail.com <span style={{ color: "#ACAFB4" }}>(Always Available)</span></a></Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Typography sx={matches ? titleStyleRes : titleStyle} >Phone</Typography>
                                    <Typography sx={matches ? titleDesRes : titleDes} ><a href="tel:+8801643797859" style={matches ? titleDesRes : titleDes} >+8801643797859 <span style={{ color: "#ACAFB4" }}>(Whatsapp)</span></a></Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Typography sx={matches ? titleStyleRes : titleStyle} >LinkedIn</Typography>
                                    <Typography sx={matches ? titleDesRes : titleDes} > <Link sx={matches ? titleDesRes : titleDes} href="https://www.linkedin.com/in/yea-saleh/" underline="none" target="_blank">
                                        www.linkedin.com/yea-saleh
                                    </Link></Typography>
                                </Box>
                                <Box sx={{ mt: 1 }}>
                                    <Typography sx={matches ? titleStyleRes : titleStyle} >Address</Typography>
                                    <Typography sx={matches ? titleDesRes : titleDes} >7720, Pangsha, Rajbari, Dhaka, Bangladesh</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={0} md={1.5}>
                            {!matches && (
                                <Box sx={{ display: "inline-block", transform: `rotate(90deg)`, width: "180px", marginTop: 9, marginLeft: 2 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Box sx={{ backgroundColor: "#1D293A", p: 0.6, borderRadius: "2px" }}>
                                            <Typography sx={{ color: "whitesmoke", fontSize: matches ? "12px" : "18px", textAlign: !matches && "center", fontWeight: "bold" }}>CONTACT ME</Typography>
                                        </Box>
                                        <Box><hr style={{ width: "40px" }} /></Box>
                                    </Box>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Contact;

const titleStyle = {
    fontSize: "26px",
    fontWeight: 800,
    color: "whitesmoke",
};

const titleStyleRes = {
    fontSize: "18px",
    fontWeight: 800,
    color: "whitesmoke",
    textAlign: "center"
};

const titleDes = {
    fontSize: "18px",
    fontWeight: 400,
    color: "whitesmoke",
    textDecoration: "none"
};

const titleDesRes = {
    fontSize: "14px",
    fontWeight: 400,
    color: "whitesmoke",
    textDecoration: "none",
    textAlign: "center"
};
