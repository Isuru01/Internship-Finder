import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Avatar } from "@mui/material";

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
    field: "status",
    headerName: "Status",
    width: 150,
  },
  {
    field: "interest",
    headerName: "Interest",
    width: 150,
  },
  {
    field: "education",
    headerName: "Education",
    width: 150,
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
  },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const UserTable = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
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

export default UserTable;
