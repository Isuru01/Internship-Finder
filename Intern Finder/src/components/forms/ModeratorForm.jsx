import React from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";

const ModeratorForm = () => {
  return (
    <form>
      <Box
        component={Paper}
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          gap: 3,
          width: "400px",
        }}
      >
        <Typography variant="h2" color="primary" sx={{ fontSize: "1.2rem" }}>
          Create New Moderator
        </Typography>

        <TextField type="email" size="small" label="Email" />
        <TextField size="small" type="password" label="Password" />
        <TextField size="small" type="password" label="Retype Password" />

        <Button size="small" variant="contained">
          Create Moderator
        </Button>
      </Box>
    </form>
  );
};

export default ModeratorForm;
