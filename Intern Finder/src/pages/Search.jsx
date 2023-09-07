import React from "react";
import { Box, CssBaseline, Toolbar, Divider } from "@mui/material";
import PrimaryBanner from "../components/banner/PrimaryBanner";
import NavBar from "../components/NavBar";
import SearchFields from "../components/search/SearchFields";
import SearchResults from "../components/search/SearchResults";
import SearchProvider from "../context/SearchProvider";

const Search = () => {
  return (
    <Box>
      <NavBar />

      <SearchProvider>
        <Toolbar />
        <PrimaryBanner />
        <Divider />
        <SearchFields />
        <Divider />
        <SearchResults />
      </SearchProvider>
    </Box>
  );
};

export default Search;
