import React, { useContext, useState } from "react";
import { Box, Autocomplete, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import { searchJobs } from "../../api/search.api.mjs";
import { SearchContext } from "../../context/SearchProvider";

const SearchFields = () => {
  const naviagate = useNavigate();
  const { setResults, setSearch, search } = useContext(SearchContext);

  const handleSearch = (name, value) => {
    const params = new URLSearchParams(search);
    naviagate(`/search?${params.toString()}`);
    setSearch((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        m: 2,
        gridTemplateColumns: { sx: "repeat(1fr)", md: "3fr 2fr 1fr" },
      }}
    >
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        onInputChange={(event, value) => handleSearch("title", value)}
        options={titles}
        renderInput={(params) => (
          <TextField {...params} label="Search" sx={{ borderRadius: 0 }} />
        )}
      />

      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={fields}
        onInputChange={(event, value) => handleSearch("field", value)}
        renderInput={(params) => (
          <TextField {...params} label="Field" sx={{ borderRadius: 0 }} />
        )}
      />
      <Button variant="outlined" fullWidth onClick={handleSearch}>
        <SearchIcon />
        Search
      </Button>
    </Box>
  );
};

const fields = [
  { label: "Bussiness Analysis" },
  { label: "Software Engineering" },
  { label: "Tech" },
];

const titles = [
  { label: "Bussiness Analysis Internship" },
  { label: "Software Engineering Internship" },
  { label: "Tech" },
];

export default SearchFields;
