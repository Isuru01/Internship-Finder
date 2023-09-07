import React from "react";
import { Card, Typography, Paper } from "@mui/material";

const StatCard = ({ title, value }) => {
  return (
    <Card
      component={Paper}
      variant="outlined"
      sx={{
        maxWidth: "250px",
        minWidth: "200px",
        p: 1,
      }}
    >
      <Typography color="primary" sx={{ fontSize: "1rem" }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: "1.4rem", fontWeight: "500" }}>
        {value}
      </Typography>
    </Card>
  );
};

export default StatCard;
