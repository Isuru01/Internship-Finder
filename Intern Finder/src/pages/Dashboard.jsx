import React, { useEffect, useState } from "react";
import bannerbg from "../assets/bannerbg.png";
import { Select, Option } from "@mui/joy";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Box,
  Typography,
  TextField,
  Paper,
  Avatar,
  Toolbar,
  Autocomplete,
  Button,
} from "@mui/material";

import NavBar from "../components/NavBar";
import JobCard from "../components/cards/JobCard";
import { fetchSavedJob, fetchUser } from "../api/user.api.mjs";

const Dashboard = () => {
  const { isLoading: loadUser, data: user } = useQuery({
    queryFn: fetchUser,
    queryKey: ["user"],
    onSuccess: (data) => {},
    onError: () => {},
  });

  const { isLoading: loadJobs, data: jobs } = useQuery({
    queryFn: fetchSavedJob,
    queryKey: ["myjob"],
    onSuccess: (data) => {},
    onError: () => {},
  });

  if (loadJobs || loadUser) return <div></div>;

  const jobList = jobs?.map((job) => <JobCard key={job.key} job={job} />);
  return (
    <Box>
      <NavBar />

      <Toolbar />
      <Toolbar />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "repear(1, 1fr)", md: "repeat(2, 1fr)" },
          gap: 2,
          maxWidth: "1300px",
          margin: "auto",
        }}
      >
        <Box
          component={Paper}
          variant="outlined"
          sx={{ borderRadius: 0, p: 2 }}
        >
          <Typography color="primary" sx={{ fontSize: "1.4rem", mb: 2 }}>
            Profile
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{ width: 60, height: 60, p: 1, border: "2px solid red" }}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography color="text.secondary" sx={{ fontSize: "1.2rem" }}>
                Welcome
              </Typography>

              <Typography sx={{ fontSize: "1.8rem" }}>
                {user?.firstName} {user?.lastName}
              </Typography>

              <Typography color="text.secondary" sx={{ fontSize: "1rem" }}>
                {user?.email}
              </Typography>
              {/* <Typography mt={1} fontWeight={600} color="primary">
                {`> Change Email`}
              </Typography> */}
              <Typography fontWeight={600} color="primary">
                {`> Change Password`}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 5 }}>
            <Box>
              <form>
                {/* <Box
                  sx={{
                    display: "flex",
                    mb: 2,
                    flexDirection: "column",
                    gap: 2,
                    width: "60%",
                  }}
                >
                  <Select placeholder="Current Status">
                    <Option>Unemoloyed</Option>
                  </Select>
                  <Select placeholder="Level Of Education">
                    <Option>Some College</Option>
                  </Select>
                  <Select placeholder="Field In Interest">
                    <Option>Technology</Option>
                  </Select>
                </Box>
                <Button variant="contained">Update</Button> */}
              </form>
            </Box>

            <Box sx={{ mt: 4 }}>
              <form>
                <Box sx={{ mb: 2 }}>
                  <Typography color="primary" sx={{ fontSize: "1.4rem" }}>
                    Feedbacks
                  </Typography>
                  <TextField
                    multiline
                    rows={5}
                    fullWidth
                    label="Your Feedback"
                  />
                </Box>
                <Button variant="contained">Submit</Button>
              </form>
            </Box>
          </Box>
        </Box>

        <Box
          variant="outlined"
          sx={{ borderRadius: 0, p: 2 }}
          component={Paper}
        >
          <Typography color="primary" sx={{ fontSize: "1.4rem", mb: 2 }}>
            Saved Results
          </Typography>

          <Box
            sx={{
              height: "1000px",
              overflow: "auto",
            }}
          >
            {jobList}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
