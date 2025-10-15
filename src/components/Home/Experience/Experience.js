import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { CalendarToday, LocationOn, Business } from "@mui/icons-material";

const Experience = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const experiences = [
    {
      id: 1,
      company: "ConvertClicks.io",
      position: "Full-Stack Developer (Contractual)",
      location: "Toronto, Canada",
      duration: " August 2025 – October 2025",
      description: [
        "Built and optimized backend systems using Node.js, Express, and SQL/Supabase, delivering secure, high-performance APIs and improving overall system reliability.",
        "Automated complex workflows through Make.com, Pipedrive, Monday.com, and WeWeb, reducing manual workload by 40% and improving cross-platform efficiency via API-driven integrations.",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "SQL",
        "Supabase",
        "Make.com",
        "Pipedrive",
        "Weweb",
        "Monday.com",
      ],
    },
    {
      id: 2,
      company: "Manaknight Digital",
      position: "Web Developer",
      location: "Toronto, Canada",
      duration: "December 2023 – July 2025",
      description: [
        "Developed and maintained dynamic, production-ready web applications using React.js, focusing on performance, scalability, and reusable component design across multiple projects.",
        "Designed and deployed secure backend systems using Node.js, Express.js, and MySQL, handling API development, authentication (JWT), and business logic for multi-role systems.",
        "Implemented Stripe and LemonSqueezy payment integrations, managing full subscription lifecycles, error handling, and achieving a 99.9% transaction success rate.",
        "Optimized full-stack performance by improving database query efficiency, reducing frontend load times through code-splitting, lazy loading, and memoization.",
        "Collaborated with cross-functional teams to deliver features from end to end, following Agile methodologies and best practices in version control, API design, and UI architecture.",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Stripe",
        "LemonSqueezy",
        "JWT",
        "Agile",
      ],
    },
    {
      id: 3,
      company: "Sadhinota Camp",
      position: "Support Mentor (Voluntary)",
      location: "Dhaka, Bangladesh",
      duration: "September 2024 – April 2025",
      description: [
        "Guided students in full-stack development, providing personalized coding support and mentorship, helping learners improve their coding skills by 40%.",
        "Created learning resources and hands-on examples, enabling students to reduce coding errors by 30% and strengthen practical understanding.",
      ],
      technologies: [
        "Full-Stack Development",
        "Project Management",
        "Code Review",
        "Performance Optimization",
      ],
    },
    {
      id: 4,
      company: "MedLink Healthcare Private Limited",
      position: "Software Engineer",
      location: "Hyderabad, India",
      duration: "March 2022 – December 2023",
      description: [
        "Optimized UI/UX by developing responsive, high-performance interfaces with multilingual support using advanced i18n implementations.",
        "Built and optimized GraphQL APIs using AWS AppSync, improving data efficiency and integrating Paytm for secure transactions, leading to a 35% increase in customer retention.",
        "Improved customer support operations by implementing Zoho Desk's frontend and streamlining backend processes, reducing ticket resolution time by 15%.",
        "Collaborated with the production rollout team to manage end-to-end deployments, ensuring seamless transitions from development to QA and production in AWS, reducing deployment time by 25%.",
        "Engineered dynamic SaaS solutions with robust form validations, interactive data visualizations, and smooth drag-and-drop functionality, resulting in a 20% increase in user satisfaction.",
      ],
      technologies: [
        "GraphQL",
        "AWS AppSync",
        "Paytm",
        "Zoho Desk",
        "SaaS",
        "i18n",
        "React.js",
        "Node.js",
      ],
    },
  ];

  return (
    <div style={{ background: "#111A28" }}>
      <Container sx={{ my: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={1.5}>
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
                      EXPERIENCE
                    </Typography>
                  </Box>
                  <Box>
                    <hr style={{ width: "80px" }} />
                  </Box>
                </Box>
              </Box>
            )}
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
                    <hr style={{ width: "60px" }} />
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
                      EXPERIENCE
                    </Typography>
                  </Box>
                  <Box>
                    <hr style={{ width: "60px" }} />
                  </Box>
                </Box>
              </Box>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={10.5}>
            <Box sx={{ marginLeft: !matches && "-45px" }}>
              <Grid container spacing={3}>
                {experiences.map((experience) => (
                  <Grid item xs={12} key={experience.id}>
                    <Card
                      sx={{
                        backgroundColor: "#1D293A",
                        border: "1px solid #2A3747",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                          borderColor: "#00CF5D",
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: matches ? "column" : "row",
                            justifyContent: "space-between",
                            alignItems: matches ? "flex-start" : "center",
                            mb: 2,
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{
                                color: "#00CF5D",
                                fontSize: matches ? "16px" : "18px",
                                fontWeight: 600,
                                mb: 0.5,
                              }}
                            >
                              {experience.position}
                            </Typography>
                            <Typography
                              sx={{
                                color: "whitesmoke",
                                fontSize: matches ? "20px" : "24px",
                                fontWeight: 700,
                                mb: 1,
                              }}
                            >
                              {experience.company}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: matches ? "flex-start" : "flex-end",
                              mt: matches ? 2 : 0,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 1,
                              }}
                            >
                              <CalendarToday
                                sx={{
                                  color: "#00CF5D",
                                  fontSize: "18px",
                                  mr: 1,
                                }}
                              />
                              <Typography
                                sx={{ color: "#A0A5AC", fontSize: "14px" }}
                              >
                                {experience.duration}
                              </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <LocationOn
                                sx={{
                                  color: "#00CF5D",
                                  fontSize: "18px",
                                  mr: 1,
                                }}
                              />
                              <Typography
                                sx={{ color: "#A0A5AC", fontSize: "14px" }}
                              >
                                {experience.location}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>

                        <Box sx={{ mb: 3 }}>
                          {experience.description.map((desc, index) => (
                            <Typography
                              key={index}
                              sx={{
                                color: "whitesmoke",
                                fontSize: "15px",
                                lineHeight: 1.6,
                                mb: 1.5,
                                pl: 2,
                                position: "relative",
                                "&::before": {
                                  content: '"•"',
                                  color: "#00CF5D",
                                  fontWeight: "bold",
                                  position: "absolute",
                                  left: 0,
                                },
                              }}
                            >
                              {desc}
                            </Typography>
                          ))}
                        </Box>

                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {experience.technologies.map((tech, index) => (
                            <Chip
                              key={index}
                              label={tech}
                              sx={{
                                backgroundColor: "#2A3747",
                                color: "#00CF5D",
                                border: "1px solid #00CF5D",
                                "&:hover": {
                                  backgroundColor: "#00CF5D",
                                  color: "white",
                                },
                              }}
                              size="small"
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Experience;
