import React from "react";
import { Button, ListItemText, ListItemButton } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { logOut } from "../../api/auth.api.mjs";
import { Navigate, useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      localStorage.removeItem("log");

      navigate("/signin");
    },
    onError: () => {},
  });

  const handleSubmit = () => {
    mutation.mutateAsync();
  };

  return (
    <ListItemButton onClick={handleSubmit} sx={{ textAlign: "center" }}>
      <ListItemText primary="Logout" />
    </ListItemButton>
  );
};

export default Logout;
