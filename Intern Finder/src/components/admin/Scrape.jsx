import React from "react";
import { Box } from "@mui/material";
import StatCard from "../cards/StatCard";
import JobsTable from "../tables/JobsTable";
import ScrapeTable from "../tables/ScrapeTable";

const Scrape = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <StatCard title="Last Run On" value="19 July 23" />
        <StatCard title="Today Scrape" value="32" />
      </Box>

      <ScrapeTable />
    </Box>
  );
};

export default Scrape;
