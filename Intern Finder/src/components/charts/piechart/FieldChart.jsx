import React from "react";
import { Box, Paper, Typography } from "@mui/material";
// import ReactECharts from "echarts-for-react";

const FieldChart = () => {
  // const option = {
  //   tooltip: {
  //     trigger: "item",
  //   },
  //   legend: {
  //     top: "5%",
  //     left: "center",
  //   },
  //   series: [
  //     {
  //       name: "Access From",
  //       type: "pie",
  //       radius: ["40%", "70%"],
  //       avoidLabelOverlap: false,
  //       label: {
  //         show: false,
  //         position: "center",
  //       },
  //       emphasis: {
  //         label: {
  //           show: true,
  //           fontSize: 40,
  //           fontWeight: "bold",
  //         },
  //       },
  //       labelLine: {
  //         show: false,
  //       },
  //       data: [
  //         { value: 1048, name: "IT & Tech" },
  //         { value: 735, name: "Engineering" },
  //         { value: 580, name: "Health" },
  //         { value: 484, name: "Management" },
  //         { value: 300, name: "People" },
  //       ],
  //     },
  //   ],
  // };

  return (
    <Box variant="outlined" component={Paper} sx={{ p: 2, width: "100%" }}>
      <Typography color="primary" sx={{ fontSize: "1.2rem" }}>
        Field Data
      </Typography>
      {/* <ReactECharts style={{ width: "100%" }} option={option} /> */}
    </Box>
  );
};

export default FieldChart;
