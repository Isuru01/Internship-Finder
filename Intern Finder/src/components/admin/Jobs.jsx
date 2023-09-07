import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JobsTable from "../tables/JobsTable";
import VacancyForm from "../forms/VacancyForm";

const Jobs = ({ action }) => {
  const naviagte = useNavigate();

  const handleClick = () => {
    naviagte("/admin/dashboard/jobs/create");
  };

  return (
    <Box>
      <Box>
        {action == "create" && <VacancyForm />}
        {action == null && <JobsTable />}
      </Box>
    </Box>
  );
};

export default Jobs;
