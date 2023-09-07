import * as React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Logout from "./btn/Logout";

const drawerWidth = 240;
const navItems = [
  { title: "Home", link: "/" },
  { title: "Dashboard", link: "/dashboard" },
];

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  const handleNavigate = (link) => {
    console.log(navigate);
    navigate(link);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Intern Finder
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNavigate(item.link)}
            >
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}

        {!localStorage.getItem("log") && (
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavigate("/signup")}>
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </ListItem>
        )}

        {localStorage.getItem("log") && <Logout />}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#005BBB " }} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Intern Finder
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item, index) => (
              <ListItemButton
                key={index}
                onClick={() => handleNavigate(item.link)}
                sx={{ textAlign: "center" }}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            ))}

            {!localStorage.getItem("log") && (
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  onClick={() => handleNavigate("/signup")}
                >
                  <ListItemText primary="Sign Up" />
                </ListItemButton>
              </ListItem>
            )}

            {localStorage.getItem("log") && <Logout />}

            <Avatar
              onClick={handleClick}
              sx={{ ml: 2, border: "1px solid red" }}
              src=""
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
