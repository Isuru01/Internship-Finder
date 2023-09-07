import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import PastUsers from "../charts/barchart/PastUsers";
import FieldChart from "../charts/piechart/FieldChart";
import StatCard from "../cards/StatCard";
import StatBar from "../StatBar";
import JobCard from "../cards/JobCard";
import MessageCard from "../cards/MessageCard";

const jobs = [
  {
    title: "Data Science Internship",
    company: "RootCode",
    comImg:
      "https://th.bing.com/th/id/OIP.OA5S6oTot7eDebdkylyWTQHaHa?pid=ImgDet&rs=1",
    tags: ["python", "algorithm", "computer science"],
    dop: "1 Day ago",
  },
  {
    title: "Software Engineer Intern",
    company: "99X",
    comImg:
      "https://99x.io/static/7de1e9509a52ff0b775ffd6be19265c2/47498/photo-99x-brand-featured-image.jpg",
    tags: ["programming", "java", "web"],
    dop: "4 Day ago",
  },
  {
    title: "Full Stack Developer Trainee",
    company: "DigiLab",
    comImg:
      "https://th.bing.com/th/id/OIP.2pSvnlcCJf6jlhD1e-RvBAHaHa?pid=ImgDet&w=512&h=512&rs=1",
    tags: ["html5", "css", "javascript"],
    dop: "1 Day ago",
  },
  {
    title: "HR Intern",
    company: "Dialog",
    comImg:
      "https://th.bing.com/th/id/OIP.huCKw6zksAfm70eRgthXdQHaHa?pid=ImgDet&w=195&h=195&rs=1",
    tags: ["social", "team work", "communication"],
    dop: "23 Jun",
  },
  {
    title: "Data Science Internship",
    company: "RootCode",
    comImg:
      "https://th.bing.com/th/id/OIP.OA5S6oTot7eDebdkylyWTQHaHa?pid=ImgDet&rs=1",
    tags: ["python", "algorithm", "computer science"],
    dop: "1 Day ago",
  },
  {
    title: "Software Engineer Intern",
    company: "99X",
    comImg:
      "https://99x.io/static/7de1e9509a52ff0b775ffd6be19265c2/47498/photo-99x-brand-featured-image.jpg",
    tags: ["programming", "java", "web"],
    dop: "4 Day ago",
  },
  {
    title: "Full Stack Developer Trainee",
    company: "DigiLab",
    comImg:
      "https://th.bing.com/th/id/OIP.2pSvnlcCJf6jlhD1e-RvBAHaHa?pid=ImgDet&w=512&h=512&rs=1",
    tags: ["html5", "css", "javascript"],
    dop: "1 Day ago",
  },
  {
    title: "HR Intern",
    company: "Dialog",
    comImg:
      "https://th.bing.com/th/id/OIP.huCKw6zksAfm70eRgthXdQHaHa?pid=ImgDet&w=195&h=195&rs=1",
    tags: ["social", "team work", "communication"],
    dop: "23 Jun",
  },
];

const Overview = () => {
  const jobList = jobs.map((job) => <JobCard job={job} />);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <StatBar />

        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <PastUsers />
          <FieldChart />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Box
            variant="outlined"
            component={Paper}
            sx={{ p: 2, pr: 0, width: "100%" }}
          >
            <Typography color="primary" sx={{ fontSize: "1.2rem", mb: 1 }}>
              Most Popular
            </Typography>
            <Box
              sx={{
                height: "500px",
                overflow: "auto",
              }}
            >
              {jobList}
            </Box>
          </Box>

          <Box variant="outlined" component={Paper} sx={{ p: 2, pr: 0 }}>
            <Typography color="primary" sx={{ fontSize: "1.2rem" }}>
              Messages
            </Typography>
            <Box sx={{ maxWidth: "580px", height: "500px", overflow: "auto" }}>
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
