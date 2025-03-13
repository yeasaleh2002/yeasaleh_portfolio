import React from "react";
import {
  Button,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import yeasaleh from "../../images/yeasaleh.jpg";
import Yeasaleh_Resume from "../../images/Yeasaleh_Resume.pdf";

const About = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const startDate = new Date("February 1, 2022");
  const currentDate = new Date();

  // Calculate the duration in months and years
  const totalMonths =
    currentDate.getMonth() -
    startDate.getMonth() +
    12 * (currentDate.getFullYear() - startDate.getFullYear());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return (
    <div style={{ background: "#111A28", color: "white" }}>
      <Box>
        <Container>
          <Box sx={{ pt: 5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: matches && "center",
                justifyContent: matches && "center",
              }}
            >
              {!matches && (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: `rotate(270deg)`,
                      marginLeft: "-100px",
                      width: "260px",
                      mt: 10,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#1D293A",
                        p: 1,
                        borderRadius: "2px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "whitesmoke",
                          fontSize: matches ? "12px" : "18px",
                          textAlign: !matches && "center",
                          fontWeight: "bold",
                        }}
                      >
                        FOLLOW ME
                      </Typography>
                    </Box>
                    <Box>
                      <hr style={{ width: "40px" }} />
                    </Box>
                    <Box sx={{ transform: `rotate(90deg)` }}>
                      <Link
                        style={{
                          color: "white",
                          padding: "10px",
                          fontSize: "23px",
                        }}
                        href="https://www.linkedin.com/in/yea-saleh/"
                        underline="none"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </Box>
                    <Box sx={{ transform: `rotate(90deg)` }}>
                      <Link
                        style={{
                          color: "white",
                          padding: "10px",
                          fontSize: "23px",
                        }}
                        href="https://github.com/yeasaleh2002"
                        underline="none"
                        target="_blank"
                      >
                        <i className="fab fa-github"></i>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              )}
              <Box sx={{ p: 1, marginLeft: !matches && "-50px" }}>
                <Typography
                  sx={{
                    color: "#00CF5D",
                    fontSize: matches ? "16px" : "22px",
                    textAlign: matches && "center",
                  }}
                >
                  Hello! I'm
                </Typography>
                <Typography
                  sx={{
                    color: "whitesmoke",
                    fontSize: matches ? "28px" : "45px",
                    textAlign: matches && "center",
                    fontWeight: "bold",
                  }}
                >
                  Yeasaleh
                </Typography>
                <Typography
                  sx={{
                    color: "#00CF5D",
                    fontSize: matches ? "16px" : "22px",
                    textAlign: matches && "center",
                  }}
                >
                  Software Developer
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    mt: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "whitesmoke",
                      fontSize: matches ? "12px" : "20px",
                    }}
                  >
                    Web Developer
                  </Typography>
                  <span style={circleDot}></span>
                  <Typography
                    sx={{
                      color: "whitesmoke",
                      fontSize: matches ? "12px" : "20px",
                    }}
                  >
                    Programmer
                  </Typography>
                  <span style={circleDot}></span>
                  <Typography
                    sx={{
                      color: "whitesmoke",
                      fontSize: matches ? "12px" : "20px",
                    }}
                  >
                    Software Engineer
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: matches && "flex",
                    alignItems: matches && "center",
                    justifyContent: matches && "center",
                    mb: 2,
                    mt: 1,
                  }}
                >
                  <a href={Yeasaleh_Resume} download="yeasaleh_resume.pdf">
                    <Button style={{ color: "white", background: "#00CF5D" }}>
                      Resume
                    </Button>
                  </a>
                </Box>
              </Box>
            </Box>
            {matches && (
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <hr style={{ width: "40px" }} />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#1D293A",
                      p: 0.6,
                      borderRadius: "2px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "whitesmoke",
                        fontSize: matches ? "12px" : "18px",
                        textAlign: !matches && "center",
                        fontWeight: "bold",
                      }}
                    >
                      FOLLOW ME
                    </Typography>
                  </Box>
                  <Box>
                    <hr style={{ width: "40px" }} />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <Link
                      style={{
                        color: "white",
                        padding: "10px",
                        fontSize: "23px",
                      }}
                      href="https://www.linkedin.com/in/yea-saleh/"
                      underline="none"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Link>
                  </Box>
                  <Box>
                    <Link
                      style={{
                        color: "white",
                        padding: "10px",
                        fontSize: "23px",
                      }}
                      href="https://github.com/yeasaleh2002"
                      underline="none"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i>
                    </Link>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
          {/* about descripition */}
          <section id="AboutMe">
            <Box sx={{ mt: 8 }}>
              {matches && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <hr style={{ width: "40px" }} />
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#1D293A",
                      p: 0.6,
                      borderRadius: "2px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "whitesmoke",
                        fontSize: matches ? "12px" : "18px",
                        textAlign: !matches && "center",
                        fontWeight: "bold",
                      }}
                    >
                      ABOUT ME
                    </Typography>
                  </Box>
                  <Box>
                    <hr style={{ width: "40px" }} />
                  </Box>
                </Box>
              )}
              <Grid sx={{ p: !matches && 1 }} container spacing={2}>
                <Grid item xs={12} md={7} order={matches ? 2 : 1}>
                  <Box sx={{ p: 1 }}>
                    <Typography
                      sx={{
                        color: "whitesmoke",
                        fontSize: matches ? "12px" : "18px",
                        lineHeight: !matches ? "30px" : "21px",
                        mb: 1,
                        textAlign: matches && "center",
                      }}
                    >
                      🚀 Hello! I'm Yeasaleh, a passionate Software Developer
                      with {years} year{years !== 1 ? "s" : ""} {months} month
                      {months !== 1 ? "s" : ""} of professional experience in
                      JavaScript, React.js, Next.js, and Redux. I specialize in
                      developing responsive web applications, creating seamless
                      user experiences, and optimizing UI performance. I have
                      hands-on experience with state management,
                      component-driven development, and API integrations to
                      deliver high-quality solutions. My backend development
                      skills include Node.js, Express.js, PostgreSQL, and MySQL,
                      allowing me to build and manage secure and scalable web
                      applications. I've also worked on integrating Stripe
                      payment systems, ensuring PCI compliance and secure
                      transactions. Proficient in tools like AWS, Firebase,
                      Heroku, Jira, and Trello, I focus on streamlining
                      development and deployment processes. Currently pursuing a
                      B.Sc. in Computer Science and Engineering at City
                      University, Bangladesh, I'm committed to advancing my
                      expertise in full-stack development.
                    </Typography>
                    <Box
                      sx={{
                        display: matches && "flex",
                        alignItems: matches && "center",
                        justifyContent: matches && "center",
                        mb: 2,
                        mt: 1,
                      }}
                    >
                      <a href={Yeasaleh_Resume} download="yeasaleh_resume.pdf">
                        <Button
                          style={{ color: "white", background: "#00CF5D" }}
                        >
                          Resume
                        </Button>
                      </a>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5} order={matches ? 1 : 2}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ p: 1 }}>
                      <img
                        style={{
                          width: matches ? "100%" : "310px",
                          height: matches ? "100%" : "310px",
                          borderRadius: "6px",
                        }}
                        src={yeasaleh}
                        alt="saleh"
                      />
                    </Box>
                    {!matches && (
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transform: `rotate(90deg)`,
                            marginLeft: "65px",
                            width: "150px",
                            mt: 6,
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "#1D293A",
                              p: 0.6,
                              borderRadius: "2px",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "whitesmoke",
                                fontSize: matches ? "12px" : "18px",
                                textAlign: !matches && "center",
                                fontWeight: "bold",
                              }}
                            >
                              ABOUT ME
                            </Typography>
                          </Box>
                          <Box>
                            <hr style={{ width: "40px" }} />
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </section>
        </Container>
      </Box>
    </div>
  );
};

export default About;

const circleDot = {
  height: "10px",
  width: "10px",
  backgroundColor: "#00CF5D",
  borderRadius: "50%",
  display: "inline-block",
  marginLeft: "8px",
  marginRight: "8px",
};
