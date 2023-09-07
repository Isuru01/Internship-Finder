import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  Divider,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Scrape from "../components/admin/Scrape";
import Jobs from "../components/admin/Jobs";
import Users from "../components/admin/Users";
import Overview from "../components/admin/Overview";
import Moderator from "../components/admin/Moderator";

import { useParams, useNavigate } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

const Admin = () => {
  const { type, action } = useParams();

  const naviagte = useNavigate();

  const handleClick = (endpoint) => naviagte(`/admin/dashboard/${endpoint}`);

  const menuItems = ["overview", "users", "jobs", "scrape", "moderator"].map(
    (text, index) => (
      <ListItem key={text} onClick={() => handleClick(text)}>
        <ListItemButton>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText
            primary={text}
            primaryTypographyProps={{ fontSize: "1.2rem", color: "primary" }}
          />
        </ListItemButton>
      </ListItem>
    )
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#005BBB ",
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-betweem",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" noWrap component="div">
                Intern Finder
              </Typography>
            </Box>

            <Avatar
              sx={{
                border: "1px solid red",
                maxWidth: "300px",
                ml: "800px",
              }}
              src="https://th.bing.com/th/id/R.4ff3a1239c85c629c76a3ff5c2549982?rik=GxlgWxmGoaqI8g&pid=ImgRaw&r=0"
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          backgroundColor: "#CAEEF6",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List
          sx={{
            color: "#FFFFFF",
          }}
        >
          {menuItems}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {type === "overview" && <Overview action={action} />}
        {type === "scrape" && <Scrape action={action} />}
        {type === "jobs" && <Jobs action={action} />}
        {type === "users" && <Users action={action} />}
        {type === "moderator" && <Moderator action={action} />}
      </Box>
    </Box>
  );
};

export default Admin;
