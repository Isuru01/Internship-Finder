import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Avatar, Switch, Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "profileImg",
    headerName: "",
    width: 80,
    sortable: false,
    renderCell: (params) => (
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    ),
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    width: 180,
    editable: true,
  },
  {
    field: "lastLogged",
    headerName: "Last Log",
    width: 150,
  },
  {
    field: "access",
    headerName: "Access",
    width: 150,
    renderCell: (params) => <Switch defaultChecked labe="active" />,
  },
];

const rows = [
  {
    id: 1,
    profileImg: "",
    lastName: "Snow",
    firstName: "Jon",
    email: "denaris@yaho.com",
    age: 35,
    lastLogged: "23 Jun 24 11:58p.m.",
  },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
];

const ModeratorTable = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Typography color="primary" mb={1} sx={{ fontSize: "1.2rem" }}>
        Moderator Log
      </Typography>
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

export default ModeratorTable;
