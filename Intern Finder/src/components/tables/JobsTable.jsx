import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Chip } from "@mui/material";

import { useNavigate } from "react-router-dom";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    width: 220,
  },
  {
    field: "company",
    headerName: "Company",
    width: 150,
  },
  {
    field: "field",
    headerName: "Field",
    width: 150,
    renderCell: (params) => {
      return params.value ? (
        <Chip label={params.value} />
      ) : (
        <Chip label={params.value} />
      );
    },
  },
  {
    field: "originally",
    headerName: "Originally",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return params.value ? <Chip label="suspend" /> : <Chip label="suspend" />;
    },
  },
  {
    field: "published",
    headerName: "D.O.P",
    width: 100,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 150,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Infor",
    field: "Tech",
    originally: "jobs4u.com",
    status: true,
    published: "28 Jun 2023",
    age: 35,
  },
  {
    id: 2,
    title: "Lannister",
    company: "Cersei",
    field: "Business",
    originally: "jobs4u.com",
    age: 42,
  },
  { id: 3, title: "Lannister", company: "Jaime", age: 45 },
  { id: 4, title: "Stark", company: "Arya", age: 16 },
  { id: 5, title: "Targaryen", company: "Daenerys", age: null },
  { id: 6, title: "Melisandre", company: null, age: 150 },
  { id: 7, title: "Clifford", company: "Ferrara", age: 44 },
  { id: 8, title: "Frances", company: "Rossini", age: 36 },
  { id: 9, titlle: "Roxie", company: "Harvey", age: 65 },
];

const JobsTable = () => {
  const naviagte = useNavigate();

  const handleClick = () => {
    naviagte("/admin/dashboard/jobs/create");
  };

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Button onClick={handleClick} variant="contained" sx={{ mb: 2 }}>
        New Job
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default JobsTable;
