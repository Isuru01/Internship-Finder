import React from "react";
import { Box } from "@mui/material";
import ModeratorForm from "../forms/ModeratorForm";
import ModeratorTable from "../tables/ModeratorTable";

const Moderator = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "column", xl: "row" },
        gap: 2,
      }}
    >
      <ModeratorForm />
      <ModeratorTable />
    </Box>
  );
};

export default Moderator;
