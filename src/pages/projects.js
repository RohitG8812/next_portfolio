import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import AuraImage from "../components/icons/projects/Aura.png";
import AirBnbImage from "../components/icons/projects/Airbnb.png";
import LinkpodImage from "../components/icons/projects/Linkpod.png";
import PortFolioImage from "../components/icons/projects/Portfolio.png";
const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const projects = [
    {
      name: "Aura",
      desc : "A social media application",
      image: AuraImage.src,
      link: "https://socialmedia-ae9jk1qru-prathameshschavans-projects.vercel.app/login",
    },
    {
      name: "Airbnb",
      desc : "A clone of airbnb.co.in",
      image: AirBnbImage.src,
      link: "https://project-airbnb-com.vercel.app/",
    },
    {
      name: "Linkpod",
      desc : "A linkedin profile booster",
      image: LinkpodImage.src,
      link: "https://socialmedia-ae9jk1qru-prathameshschavans-projects.vercel.app/login",
    },
    {
      name: "Portfolio",
      desc : "A portfolio website",
      image: PortFolioImage.src,
      link: "https://www.prathameshchavan.online/",
    },

  ];

  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      p={"4% 0"}
      id={"projects"}
    >
      <Box className="global_width">
        <Box textAlign={"center"} margin={"auto"} mb={"30px"}>
          <Typography className="gradient-font heading" variant="h5">
            My Recent Works
          </Typography>
          <Typography fontSize={"14px"}  color={"rgb(120, 120, 120)"}>
            We put your ideas and thus your wishes in the form of a unique web
            project <br /> that inspires you and you customers.
          </Typography>
        </Box>
      </Box>
      <Box
        className="global_width"
        mt={"50px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid container>
          {projects.map((project, i) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={i}
              item
              lg={6}
              md={4}
              sm={4}
              xs={12}
            >
              <ProjectCard fade={i % 2 == 0 ? "fade-right" : "fade-left"} project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
