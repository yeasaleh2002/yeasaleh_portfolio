import React from 'react';
import { Box, Button, Container, Grid, Link, Typography, useMediaQuery, useTheme, Paper } from '@mui/material';

const Contact = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div style={{ backgroundColor: '#111A28' }}>
            <Container sx={{ pt: 10, pb: 0 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={1.5}>
                        {!matches && (
                            <Box>
                                <Box sx={{ 
                                    display: "flex", 
                                    alignItems: "center", 
                                    justifyContent: "center", 
                                    transform: `rotate(270deg)`, 
                                    marginLeft: "-100px", 
                                    width: "260px", 
                                    mt: 10 
                                }}>
                                    <Box sx={{ backgroundColor: "#1D293A", p: 1, borderRadius: "2px" }}>
                                        <Typography sx={{ 
                                            color: "whitesmoke", 
                                            fontSize: matches ? "12px" : "18px", 
                                            textAlign: !matches && "center", 
                                            fontWeight: "bold" 
                                        }}>
                                            CONTACT ME
                                        </Typography>
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
                                        <Typography sx={{ 
                                            color: "whitesmoke", 
                                            fontSize: matches ? "12px" : "18px", 
                                            textAlign: !matches && "center", 
                                            fontWeight: "bold" 
                                        }}>
                                            CONTACT ME
                                        </Typography>
                                    </Box>
                                    <Box><hr style={{ width: "60px" }} /></Box>
                                </Box>
                            </Box>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={12} md={10.5}>
                        <Box sx={{ marginLeft: !matches && "-45px" }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
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
                                        <Box sx={{ p: 3 }}>
                                            <Typography sx={{ 
                                                color: "#00CF5D", 
                                                fontSize: matches ? "20px" : "24px", 
                                                fontWeight: 700,
                                                mb: 2,
                                                textAlign: matches && "center"
                                            }}>
                                                Empower Your Vision
                                            </Typography>
                                            <Typography sx={{ 
                                                color: "whitesmoke", 
                                                fontSize: matches ? "14px" : "16px", 
                                                lineHeight: 1.6,
                                                mb: 3, 
                                                textAlign: matches && "center"
                                            }}>
                                                Ready to turn dreams into digital reality? Don't wait—reach out today and let's craft extraordinary experiences that leave a lasting impact.
                                            </Typography>
                                            <Box sx={{ 
                                                display: matches && "flex", 
                                                alignItems: matches && "center", 
                                                justifyContent: matches && "center"
                                            }}>
                                                <a href="mailto:yeasalehofficial2002@gmail.com" style={{ textDecoration: 'none' }}>
                                                    <Button 
                                                        style={{ color: "white", background: "#00CF5D" }}
                                                        sx={{
                                                            '&:hover': {
                                                                backgroundColor: '#00B84A',
                                                                transform: 'translateY(-2px)',
                                                                boxShadow: '0 5px 15px rgba(0,207,93,0.3)'
                                                            },
                                                            transition: 'all 0.3s ease',
                                                            padding: matches ? "10px 20px" : "15px 30px"
                                                        }}
                                                    >
                                                        Contact Me
                                                    </Button>
                                                </a>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
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
                                        <Box sx={{ p: 3 }}>
                                            <Typography sx={{ 
                                                color: "#00CF5D", 
                                                fontSize: matches ? "20px" : "24px", 
                                                fontWeight: 700,
                                                mb: 3,
                                                textAlign: matches && "center"
                                            }}>
                                                Get In Touch
                                            </Typography>
                                            
                                            <Box sx={{ mb: 2 }}>
                                                <Typography sx={{ 
                                                    fontSize: matches ? "16px" : "18px", 
                                                    fontWeight: 600, 
                                                    color: "#00CF5D",
                                                    mb: 1
                                                }}>
                                                    Email
                                                </Typography>
                                                <Typography sx={{ 
                                                    fontSize: matches ? "14px" : "16px", 
                                                    color: "whitesmoke",
                                                    mb: 1
                                                }}>
                                                    <a href="mailto:yeasalehofficial2002@gmail.com" style={{ color: "whitesmoke", textDecoration: "none" }}>
                                                        yeasalehofficial2002@gmail.com
                                                    </a>
                                                </Typography>
                                                <Typography sx={{ fontSize: "12px", color: "#ACAFB4" }}>
                                                    (Always Available)
                                                </Typography>
                                            </Box>

                                            <Box sx={{ mb: 2 }}>
                                                <Typography sx={{ 
                                                    fontSize: matches ? "16px" : "18px", 
                                                    fontWeight: 600, 
                                                    color: "#00CF5D",
                                                    mb: 1
                                                }}>
                                                    Phone
                                                </Typography>
                                                <Typography sx={{ 
                                                    fontSize: matches ? "14px" : "16px", 
                                                    color: "whitesmoke",
                                                    mb: 1
                                                }}>
                                                    <a href="tel:+8801735782467" style={{ color: "whitesmoke", textDecoration: "none" }}>
                                                        +8801735782467
                                                    </a>
                                                </Typography>
                                                <Typography sx={{ fontSize: "12px", color: "#ACAFB4" }}>
                                                    (WhatsApp)
                                                </Typography>
                                            </Box>

                                            <Box sx={{ mb: 2 }}>
                                                <Typography sx={{ 
                                                    fontSize: matches ? "16px" : "18px", 
                                                    fontWeight: 600, 
                                                    color: "#00CF5D",
                                                    mb: 1
                                                }}>
                                                    LinkedIn
                                                </Typography>
                                                <Typography sx={{ 
                                                    fontSize: matches ? "14px" : "16px", 
                                                    color: "whitesmoke"
                                                }}>
                                                    <Link 
                                                        href="https://www.linkedin.com/in/yea-saleh/" 
                                                        underline="none" 
                                                        target="_blank"
                                                        sx={{ color: "whitesmoke", textDecoration: "none" }}
                                                    >
                                                        www.linkedin.com/in/yea-saleh
                                                    </Link>
                                                </Typography>
                                            </Box>

                                            <Box>
                                                <Typography sx={{ 
                                                    fontSize: matches ? "16px" : "18px", 
                                                    fontWeight: 600, 
                                                    color: "#00CF5D",
                                                    mb: 1
                                                }}>
                                                    Address
                                                </Typography>
                                                <Typography sx={{ 
                                                    fontSize: matches ? "14px" : "16px", 
                                                    color: "whitesmoke"
                                                }}>
                                                    Dhaka, Bangladesh
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Contact;
