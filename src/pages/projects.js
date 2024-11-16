import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import BellaVita from "../components/icons/projects/bellavita.png";
import Portfolio from "../components/icons/projects/portfolio.png";
import PromptlyAi from "../components/icons/projects/promptlyAi.png";
import Todo_App from "../components/icons/projects/todo.png";
import Travel from "../components/icons/projects/travel.png";
import Spotify from "../components/icons/projects/spotify.png";
const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const projects = [
    {
      name: "BellaVita",
      desc: "A clone of E-commerce Website",
      image: BellaVita.src,
      link: "https://socialmedia-ae9jk1qru-prathameshschavans-projects.vercel.app/login",
    },
    {
      name: "Portfolio",
      desc: "A portfolio website",
      image: Portfolio.src,
      link: "https://github.com/RohitG8812/next_portfolio",
    },
    {
      name: "PromptlyAi",
      desc: "Ai Chat Website",
      image: PromptlyAi.src,
      link: "https://socialmedia-ae9jk1qru-prathameshschavans-projects.vercel.app/login",
    },
    {
      name: "Todo",
      desc: "Todo website",
      image: Todo_App.src,
      link: "https://www.prathameshchavan.online/",
    },
    {
      name: "Travel",
      desc: "A Travel Website Landing Page",
      image: Travel.src,
      link: "https://www.prathameshchavan.online/",
    },
    {
      name: "Spotify",
      desc: "A clone of Spotify UI",
      image: Spotify.src,
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
          <Typography fontSize={"14px"} color={"rgb(120, 120, 120)"}>
            We put your ideas and thus your wishes in the form of a unique web
            project <br /> that inspires you and you customers.
          </Typography>
        </Box>
      </Box>
      <Box
        className="global_width"
        mt={"20px"}
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
              md={6}
              sm={12}
              xs={12}
            >
              <ProjectCard
                fade={i % 2 == 0 ? "fade-right" : "fade-left"}
                project={project}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
