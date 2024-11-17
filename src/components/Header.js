import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#3f51b5" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Contact Management App
        </Typography>
        <Box>
          <Link to="/" style={{ textDecoration: "none", color: 'white' }}>
            <Button color="inherit" sx={{ marginLeft: 2 }}>
              Home
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
