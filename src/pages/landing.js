import Layout from "@/components/Layout";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DP from "../components/icons/display_profile2.jpg";
import React from "react";

const Landing = () => {
  const numerics = [
    { desc1: "Years of", desc2: "Experience", number: 1 },
    { desc1: "Project", desc2: "Completed", number: 10 },
    { desc1: "Happy", desc2: "Client", number: 5 },
    { desc1: "Certification", desc2: "Acquired", number: 6 },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Rohit_Gupta_CV.pdf"; // Path to your CV file in the public directory
    link.download = "Rohit_Gupta_CV.pdf"; // Desired file name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box
      width={"100%"}
      height={["100%", "100%", "100%", "100%"]}
      position={"relative"}
      id="home"
    >
      <Box height={["100%", "100%", "100%", "100%"]} className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Box>

      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        pt={["100px", "100px", "100px", "130px"]}
        position={"relative"}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          class="context global_width"
        >
          <Box className="global_width">
            <Box>
              <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    height={"100%"}
                    justifyContent={"center"}
                    alignItems={"start"}
                  >
                    <Typography
                      fontWeight={"bolder"}
                      fontSize={["1.8rem", "1.8rem", "2.2rem", "2.7rem"]}
                      variant="h6"
                      color={"#2a1454"}
                    >
                      I am Rohit
                    </Typography>
                    <Typography
                      fontWeight={"bolder"}
                      fontSize={["2.6rem", "3rem", "3rem", "4rem"]}
                      variant="h5"
                      className="gradient-font"
                    >
                      Frontend Web Developer
                    </Typography>
                    <Typography
                      mt={"10px"}
                      fontSize={["0.9rem", "1rem", "1rem", "1rem"]}
                      color={"gray"}
                      variant="p"
                    >
                      I break down complex user experinece problems to create
                      integritiy focussed solutions that connect billions of
                      people
                    </Typography>

                    <Box
                      mt={"30px"}
                      gap={"10px"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      className={"big-screen-outline-btn-container"}
                    >
                      <Grid spacing={1} container>
                        <Grid
                          display={"flex"}
                          justifyContent={"center"}
                          item
                          xs={6}
                          md={6}
                        >
                          <Button
                            className="outlined-btn"
                            variant="outlined"
                            endIcon={<DownloadIcon />}
                            onClick={handleDownload}
                          >
                            Download CV
                          </Button>
                        </Grid>
                        <Grid
                          className="social-media-container"
                          item
                          xs={6}
                          md={6}
                        >
                          <IconButton
                            target="_blank"
                            href="https://x.com/RohitGupta84553"
                            className="outlined-icon-btn"
                          >
                            <TwitterIcon sx={{ fontSize: "20px" }} />
                          </IconButton>
                          <IconButton
                            target="_blank"
                            href="https://www.linkedin.com/in/rohit-gupta-5189a6280/"
                            className="outlined-icon-btn"
                          >
                            <LinkedInIcon sx={{ fontSize: "20px" }} />
                          </IconButton>
                          <IconButton
                            target="_blank"
                            href="https://github.com/RohitG8812"
                            className="outlined-icon-btn"
                          >
                            <GitHubIcon sx={{ fontSize: "20px" }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  mt={["50px", "50px", "0px", "0px"]}
                  xs={12}
                  md={6}
                  lg={6}
                >
                  <Box textAlign={"center"}>
                    <img className="tilt-img" src={DP.src} alt="my-pic" />
                  </Box>
                </Grid>
                <Grid
                  className="small-screen-outline-btn-container"
                  item
                  xs={12}
                  md={12}
                  lg={6}
                  mt={"1rem"}
                >
                  <Box
                    mt={"30px"}
                    gap={"10px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid spacing={1} container>
                      <Grid
                        display={"flex"}
                        justifyContent={"center"}
                        item
                        xs={12}
                        md={6}
                      >
                        <Button
                          className="outlined-btn"
                          variant="outlined"
                          endIcon={<DownloadIcon />}
                          onClick={handleDownload}
                        >
                          Download CV
                        </Button>
                      </Grid>
                      <Grid
                        className="social-media-container"
                        item
                        xs={12}
                        md={6}
                      >
                        <IconButton
                          target="_blank"
                          href="https://x.com/RohitGupta84553"
                          className="outlined-icon-btn"
                        >
                          <TwitterIcon sx={{ fontSize: "20px" }} />
                        </IconButton>
                        <IconButton
                          target="_blank"
                          href="https://www.linkedin.com/in/rohit-gupta-5189a6280/"
                          className="outlined-icon-btn"
                        >
                          <LinkedInIcon sx={{ fontSize: "20px" }} />
                        </IconButton>
                        <IconButton
                          target="_blank"
                          href="https://github.com/RohitG8812"
                          className="outlined-icon-btn"
                        >
                          <GitHubIcon sx={{ fontSize: "20px" }} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Grid
              mt={"6%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"#8750f7"}
              container
              columnSpacing={"40px"}
              mb={"50px"}
              paddingInline={"5px"}
            >
              {numerics.map((num, key) => (
                <Grid key={key} item xs={6} md={3} lg={3}>
                  <Box
                    display={"flex"}
                    gap={"15px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    paddingTop={"40px"}
                  >
                    <Typography
                      fontWeight={"bold"}
                      fontSize={["35px", "60px", "60px", "70px"]}
                      className="numerics_data_head"
                    >
                      {num.number}+
                    </Typography>
                    <Typography
                      fontSize={["15.5px", "16px", "16px", "18px"]}
                      variant="p"
                      className="numerics_data_subhead"
                    >
                      {num.desc1} {num.desc2}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
