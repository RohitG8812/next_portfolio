"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";
const ProjectCard = ({ fade, project }) => {
  return (
    <Box
      className="project-card"
      sx={{
        backgroundImage: `url(${project.image})`,
      }}
      data-aos={fade}
      data-aos-duration="2000"
    >
      <Box
        className="project-card-open-section"
        onClick={() => {
          window.open(project.link, "_blank");
        }}
      >
        <Box>
          <Typography
            color={"#fff"}
            fontSize={["16px", "18px", "20px", "20px"]}
            fontWeight={"bold"}
          >
            {project.name}
          </Typography>
          <Typography
            color={"#fff"}
            fontSize={["12px", "13px", "14px", "14px"]}
            variant="p"
          >
            {project.desc}
          </Typography>
        </Box>
        <Box>
          <EastIcon
            sx={{
              color: "#fff",
              fontSize: "25px",
              transform: "rotate(-40deg)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
