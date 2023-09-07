import React from "react";
import { Box, Typography } from "@mui/material";
import bg from "../../assets/bannerbg.png";

const PrimaryBanner = () => {
  return (
    <Box
      sx={{
        m: 1,
        borderRadius: "5px",
        display: "flex",
        padding: "2rem",
        color: "#FFFFFF",
        background:
          "linear-gradient(127deg, rgba(0,87,183,1) 11%, rgba(255,221,0,1) 88%)",
      }}
    >
      <Box sx={{ mt: "auto" }}>
        <Typography variant="h4" sx={{ display: { xs: "none", md: "block" } }}>
          Let's kick start your career
        </Typography>
        <Typography variant="h6">
          100+ oppurtunities in IT, Management and many more fields
        </Typography>
      </Box>
    </Box>
  );
};

export default PrimaryBanner;
