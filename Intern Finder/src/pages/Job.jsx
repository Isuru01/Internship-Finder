import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import brand from "../assets/brand.jpg";
import { useParams } from "react-router-dom";
import { getJob } from "../api/jobs.api.mjs";
import PublicIcon from "@mui/icons-material/Public";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  CardMedia,
  Toolbar,
} from "@mui/material";
import NavBar from "../components/NavBar";
import { FormattedTime } from "../components/util/FormattedDay.mjs";

const Job = ({ id }) => {
  const { jid } = useParams();
  id = id ? id : jid;

  const { isLoading, data: job } = useQuery({
    queryKey: ["job", id],
    queryFn: getJob,
    onSuccess: () => {},
    onError: () => {},
  });

  if (isLoading || !job) {
    return <div>Loading</div>;
  }

  console.log(job);

  return (
    <Box>
      <NavBar />
      <Toolbar />
      <Box
        component={Paper}
        elevation={4}
        sx={{ margin: "auto", maxWidth: "1000px" }}
      >
        <Box component={Paper} sx={{ borderRadius: 0, p: 2 }}>
          <Typography sx={{ textAlign: "right" }} color="text.secondary">
            {FormattedTime(job.startedAt)}
          </Typography>

          <Box sx={{ display: { xs: "block", md: "flex" }, gap: 5 }}>
            <CardMedia
              component="img"
              sx={{
                width: { xs: "4rem", sm: "8rem" },
                height: { xs: "4rem", sm: "8rem" },
                my: { xs: 2, sm: 2 },
              }}
              image={job.companyImg ? job.companyImg : ""}
              alt="Live from space album cover"
            />

            <Box sx={{ width: "100%" }}>
              <Typography variant="h1" sx={{ fontSize: "1.8rem" }}>
                {job?.title}
              </Typography>
              <Typography
                variant="h2"
                color="text.secondary"
                sx={{ fontSize: "1rem" }}
              >
                {job.company}
              </Typography>

              <Box mt={2}>
                <Chip
                  label={job.location}
                  size="small"
                  sx={{
                    borderRadius: 0,
                    backgroundColor: "lightGreen",
                    color: "#FFFFFF",
                    fontWeight: 600,
                  }}
                />

                <Chip
                  label={job.type}
                  size="small"
                  sx={{
                    ml: 1,
                    borderRadius: 0,
                    backgroundColor: "lightGreen",
                    color: "#FFFFFF",
                    fontWeight: 600,
                  }}
                />
              </Box>

              <Box mt={2}>
                {job.tags.map((tag) => (
                  <Chip
                    variant="outlined"
                    sx={{
                      mr: 1,
                      fontWeight: "600",
                      p: "2px 4px",
                    }}
                    label={tag}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          <Typography mt={6} mb={1} fontWeight={600} color="primary">
            Industry Analytics
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                component={Paper}
                minWidth="140px"
                p={2}
                sx={{
                  borderRadius: 0,
                  borderLeft: "2px solid blue",
                }}
              >
                <Typography color="primary" fontSize="1.2rem">
                  Avg Salary
                </Typography>
                <Typography fontSize="1rem" color="text.secondary">
                  ----
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                component={Paper}
                minWidth="140px"
                p={2}
                sx={{
                  borderRadius: 0,
                  borderLeft: "2px solid blue",
                }}
              >
                <Typography color="primary" fontSize="1.2rem">
                  Experience
                </Typography>
                <Typography fontSize="1rem" color="text.secondary">
                  ----
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                component={Paper}
                p={2}
                minWidth="140px"
                sx={{
                  borderRadius: 0,
                  borderLeft: "2px solid blue",
                }}
              >
                <Typography color="primary" fontSize="1.2rem">
                  Rating
                </Typography>
                <Typography fontSize="1rem" color="text.secondary">
                  ----
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box mt={4}>
            <Button
              variant="contained"
              sx={{ borderRadius: 0, pl: 4, pr: 4, mr: 2 }}
              href={job.link}
            >
              Apply
            </Button>
            <Button variant="outlined" sx={{ borderRadius: 0, pl: 4, pr: 4 }}>
              <BookmarkBorderIcon sx={{ mr: 1 }} />
              Save
            </Button>
          </Box>
        </Box>

        <Box sx={{ borderRadius: 0, p: 2, mt: 2 }} component={Paper}>
          <Typography variant="h6" color="primary">
            Job Description
          </Typography>

          <Box dangerouslySetInnerHTML={{ __html: job.body }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Job;
