import React from "react";
import StatCard from "./cards/StatCard";
import { Box } from "@mui/material";

const StatBar = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <StatCard title={"New Join"} value={"120"} />
      <StatCard title={"Total"} value={"400"} />
      <StatCard title={"Active Offers"} value={"252"} />
      <StatCard title={"Live Users"} value={"120"} />
      <StatCard title={"Today Updates"} value={"5"} />
    </Box>
  );
};

export default StatBar;
