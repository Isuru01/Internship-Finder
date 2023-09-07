import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.png";
import bg5 from "../../assets/bg5.png";

const HomeBanner = () => {
  const naviagte = useNavigate();

  const handleClick = () => {
    naviagte("/search");
  };

  return (
    <Box sx={{ backgroundImage: `url(${bg4})` }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          margin: "auto",
          maxWidth: "1500px",
        }}
      >
        <Box sx={{ margin: "auto", p: { xs: 2, md: 4 } }}>
          <Typography
            variant="h2"
            color="#0057B7"
            sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 500 }}
          >
            Kick Start Your Career Jounery <br /> With A Industry Lead
          </Typography>

          <Button
            onClick={handleClick}
            variant="outlined"
            sx={{ borderRadius: 0, mt: 4 }}
          >
            Find Your Oppurtunity
          </Button>
        </Box>

        <img
          src={bg5}
          style={{
            maxWidth: "600px",
            padding: "2rem",
          }}
        />
      </Box>
    </Box>
  );
};

export default HomeBanner;
