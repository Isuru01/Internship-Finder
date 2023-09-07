import React from "react";
import { Box, Paper, Typography } from "@mui/material";
// import ReactECharts from "echarts-for-react";

const PastUsers = () => {
  // const option = {
  //   xAxis: {
  //     type: "category",
  //     data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //   },
  //   yAxis: {
  //     type: "value",
  //   },
  //   series: [
  //     {
  //       data: [120, 200, 150, 80, 70, 110, 130],
  //       type: "bar",
  //     },
  //   ],
  // };

  return (
    <Box variant="outlined" component={Paper} sx={{ p: 2, width: "100%" }}>
      <Typography color="primary" sx={{ fontSize: "1.2rem" }}>
        New Users
      </Typography>
      {/* <ReactECharts option={option} style={{ width: "100%" }} /> */}
    </Box>
  );
};

export default PastUsers;
