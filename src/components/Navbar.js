"use client";
import { Box, Button, Drawer, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import BrandLogo from "./icons/brandLogo.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useCommonService from "@/services/useCommonService";
const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { handleClickMenu } = useCommonService();

  return (
    <Box
      position={"fixed"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      top={0}
      zIndex={100}
      width={"100%"}
      height={"80px"}
      boxShadow={"rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}
      bgcolor={setShowBackground ? "#FFF" : "#fff"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className={"global_width"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"10px"}>
          <img
            style={{
              borderRadius: "50px",
              width: "80px",
              height: "80px",
              objectFit: "cover",
            }}
            src={BrandLogo.src}
            alt="logo"
          />
          <Typography variant="p" color={"#7947df"} fontSize={"16px"}>
            Rohit Gupta
          </Typography>
        </Box>
        <Box
          display={["none", "none", "flex", "flex"]}
          alignItems={"center"}
          gap={"30px"}
          fontSize={"20px"}
        >
          <Typography
            onClick={(e) => {
              handleClickMenu("#home");
            }}
            variant="p"
            className="hover-underline-animation"
          >
            Home
          </Typography>
          <Typography
            onClick={(e) => {
              handleClickMenu("#skills");
            }}
            variant="p"
            className="hover-underline-animation"
          >
            Skills
          </Typography>
          <Typography
            onClick={(e) => {
              handleClickMenu("#projects");
            }}
            variant="p"
            className="hover-underline-animation"
          >
            Projects
          </Typography>
          <Typography
            onClick={(e) => {
              handleClickMenu("#contact");
            }}
            variant="p"
            className="hover-underline-animation"
          >
            Contact
          </Typography>
        </Box>
        <Box display={["flex", "flex", "none", "none"]}>
          <MenuIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setOpenDrawer(true)}
          />
        </Box>
      </Box>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box
          sx={{
            width: "300px",
            height: "100%",
            color: "#fff",
          }}
        >
          <Box
            display={"flex"}
            paddingInline={"10px"}
            paddingBlock={"5px"}
            justifyContent={"space-between"}
            borderBottom={"0.4px solid rgb(231, 231, 231)"}
          >
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <img
                style={{
                  borderRadius: "50px",
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                }}
                src={BrandLogo.src}
                alt="logo"
              />
              <Typography variant="p" color={"#7947df"} fontSize={"15px"}>
                Rohit Gupta
              </Typography>
            </Box>{" "}
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CloseIcon
                sx={{
                  cursor: "pointer",
                  color: "black",
                  fontSize: "20px",
                }}
                onClick={() => setOpenDrawer(false)}
              />
            </Box>
          </Box>

          <ul className="drawer-menu-items">
            <li
              onClick={(e) => {
                handleClickMenu("#home");
                setOpenDrawer(false);
              }}
              className="gradient-font"
              style={{
                fontSize: "1rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Home
              <ArrowForwardIosIcon style={{ fontSize: "1rem" }} />
            </li>
            <li
              onClick={(e) => {
                handleClickMenu("#skills");
                setOpenDrawer(false);
              }}
              className="gradient-font"
              style={{
                fontSize: "1rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Skills
              <ArrowForwardIosIcon style={{ fontSize: "1rem" }} />
            </li>
            <li
              onClick={(e) => {
                handleClickMenu("#projects");
                setOpenDrawer(false);
              }}
              className="gradient-font"
              style={{
                fontSize: "1rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Projects
              <ArrowForwardIosIcon style={{ fontSize: "1rem" }} />
            </li>
            <li
              onClick={(e) => {
                handleClickMenu("#contact");
                setOpenDrawer(false);
              }}
              className="gradient-font"
              style={{
                fontSize: "1rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Contact
              <ArrowForwardIosIcon style={{ fontSize: "1rem" }} />
            </li>
          </ul>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
