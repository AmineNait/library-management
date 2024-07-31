import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../molecules/SearchBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Library Management
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              color: "inherit",
              textDecoration: "none",
              marginRight: "1rem",
            }}
          >
            Home
          </Link>
          <Link
            to="/books"
            style={{
              color: "inherit",
              textDecoration: "none",
              marginRight: "1rem",
            }}
          >
            Books
          </Link>
          <Link
            to="/authors"
            style={{
              color: "inherit",
              textDecoration: "none",
              marginRight: "1rem",
            }}
          >
            Authors
          </Link>
        </Box>
        <SearchBar onSearch={handleSearch} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
