import Layout from "@/components/Layout";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import toast from "react-hot-toast";
const Contact = () => {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNum: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const clearAllInput = () => {
    setInputData({
      firstName: "",
      lastName: "",
      email: "",
      contactNum: "",
      message: "",
    });
  };

  const handleMessageSentToast = (e) => {
    e.preventDefault();
    toast.success("Message Sent Successfully ⚡");
    clearAllInput();
  };
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={"45px"}
      p={"4% 0"}
      bgcolor={"#f6f3fc"}
      id="contact"
    >
      <Box className="global_width">
        <Grid container>
          <Grid item lg={6} md={12} sm={12}>
            <Box
              data-aos="fade-right"
              data-aos-duration="2000"
              padding={"40px"}
              borderRadius={"10px"}
              bgcolor={"#fff"}
              mb="30px"
            >
              <Box mb={"20px"}>
                <Typography className="gradient-font heading" variant="h5">
                  Let’s work together!
                </Typography>
                <Typography fontSize={"14px"}>
                  I design and code beautifully simple things and i love what i
                  do. Just simple like that!
                </Typography>
              </Box>
              <form onSubmit={handleMessageSentToast}>
                <Grid container spacing={2}>
                  <Grid item sm={6} xs={6}>
                    <TextField
                      fullWidth
                      size="small"
                      name="firstName"
                      placeholder="First name"
                      value={inputData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item sm={6} xs={6}>
                    <TextField
                      fullWidth
                      size="small"
                      name="lastName"
                      placeholder="Last name"
                      value={inputData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      fullWidth
                      size="small"
                      name="email"
                      placeholder="Email address"
                      value={inputData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      fullWidth
                      size="small"
                      name="contactNum"
                      placeholder="Phone number"
                      value={inputData.contactNum}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      name="message"
                      rows={6}
                      placeholder="Message"
                      value={inputData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                </Grid>
                <Button
                  className="gradient-bg"
                  sx={{
                    color: "#fff",
                    borderRadius: "50px",
                    mt: "20px",
                  }}
                  variant="outlined"
                  size="large"
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </Box>
          </Grid>

          <Grid
            width={"100%"}
            item
            lg={6}
            md={12}
            sm={12}
            display={"flex"}
            justifyContent={"center"}
            className="contact-details-main"
          >
            <Box
              width={"fit-content"}
              height={"100%"}
              display={"flex"}
              alignItems={["start", "start", "center", "start"]}
              justifyContent={["center", "center", "space-between", "center"]}
              flexDirection={["column", "column", "row", "column"]}
              gap={"20px"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"left"}
                gap={"10px"}
                data-aos="fade-left"
                data-aos-duration="2000"
                // ml={[0, 0, 0, "25%"]}
              >
                <Box>
                  <IconButton
                    className="gradient-bg pointer"
                    sx={{
                      color: "#fff",
                      width: "50px",
                      height: "50px",
                    }}
                    href="tel:+91 8483982211"
                  >
                    <CallIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography
                      variant="p"
                      fontSize={["13px", "14px", "14px", "14px"]}
                    >
                      Phone
                    </Typography>
                    <Typography
                      onClick={() => {
                        window.open("tel:+91 8483982211");
                      }}
                      variant="h6"
                      className="pointer"
                      letterSpacing={"0.43px"}
                      fontSize={["17px", "18px", "18px", "20px"]}
                    >
                      +91 8483982211
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
                data-aos="fade-left"
                data-aos-duration="2000"
                // ml={[0, 0, 0, "25%"]}
              >
                <Box>
                  <IconButton
                    className="gradient-bg pointer"
                    sx={{
                      color: "#fff",
                      width: "50px",
                      height: "50px",
                    }}
                    href="mailto:rohitg8812@gmail.com"
                  >
                    <AlternateEmailIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography
                      variant="p"
                      fontSize={["13px", "14px", "14px", "14px"]}
                    >
                      Email
                    </Typography>
                    <Typography
                      variant="h6"
                      letterSpacing={"0.43px"}
                      fontSize={["17px", "18px", "18px", "20px"]}
                      onClick={() => {
                        window.open("mailto:rohitg8812@gmail.com");
                      }}
                      className="pointer"
                    >
                      rohitg8812@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"10px"}
                data-aos="fade-left"
                data-aos-duration="2000"
                // ml={[0, 0, 0, "25%"]}
              >
                <Box>
                  <IconButton
                    className="gradient-bg pointer"
                    sx={{
                      color: "#fff",
                      width: "50px",
                      height: "50px",
                    }}
                    target="_blank"
                    href="https://www.google.com/maps/place/Virar,+Maharashtra/@19.462578,72.7637375,13z/data=!3m1!4b1!4m6!3m5!1s0x3be7aa23dce7efbf:0x99bd87871748d8f4!8m2!3d19.4563596!4d72.7924612!16zL20vMDQxYmdr?entry=ttu"
                  >
                    <LocationOnIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography
                      variant="p"
                      fontSize={["13px", "14px", "14px", "14px"]}
                    >
                      Address
                    </Typography>
                    <Typography
                      variant="h6"
                      letterSpacing={"0.43px"}
                      fontSize={["17px", "18px", "18px", "20px"]}
                      onClick={() => {
                        window.open(
                          "https://www.google.com/maps/place/Virar,+Maharashtra/@19.462578,72.7637375,13z/data=!3m1!4b1!4m6!3m5!1s0x3be7aa23dce7efbf:0x99bd87871748d8f4!8m2!3d19.4563596!4d72.7924612!16zL20vMDQxYmdr?entry=ttu",
                          "_blank"
                        );
                      }}
                      className="pointer"
                    >
                      Virar, Mumbai, India
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
