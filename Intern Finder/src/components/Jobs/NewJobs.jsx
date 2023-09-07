import React from "react";
import { Box, Typography } from "@mui/material";
import JobCard from "../cards/JobCard";

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
];

const NewJobs = () => {
  const jobList = jobs.map((job) => <JobCard job={job} />);

  return (
    <Box sx={{ margin: "auto", maxWidth: "1600px", p: 4 }}>
      <Typography
        color="primary"
        sx={{ fontSize: "1.6rem", pt: 2, pb: 2, textAlign: "center" }}
      >
        New Offers
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          },
          maxWidth: { md: "1000px", lg: "1100px", xl: "1500px" },
          margin: "auto",
          gap: 1,
        }}
      >
        {jobList}
      </Box>
    </Box>
  );
};

export default NewJobs;
