import React from "react";
import { Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import bg from "../assets/bannerbg.png";
import PrimaryBanner from "../components/banner/PrimaryBanner";
import NavBar from "../components/NavBar";

import HomeBanner from "../components/banner/HomeBanner";
import IndustryBanner from "../components/banner/IndustryBanner";
import NewJobs from "../components/Jobs/NewJobs";

const Home = () => {
  return (
    <Box>
      <NavBar />
      <Toolbar />
      <HomeBanner />
      <NewJobs />
      <IndustryBanner />
    </Box>
  );
};

export default Home;
