import React from "react";
import "./HeaderComponent.css";
import { Avatar, Box, Grid, IconButton } from "@mui/material";
import Profile from "./Profile";
import SearchComponent from "./SearchComponent";
import Link from "next/link";

const pages = [
  { name: "Home", path: "/home" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const HeaderComponent = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid className="header" container spacing={1}>
          <Grid xs={1}>
            <Profile />
          </Grid>
          <Grid className="menu" xs={9}>
            {pages.map((page, index) => (
              <Grid item key={index} sx={{ margin: "0 20px" }}>
                <Link href={page.path} style={{ textDecoration: "none", color: "inherit" }}>
                  {page.name}
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid xs={2} container justifyContent="center" alignItems="center">
            <SearchComponent />
            <Box>
              <IconButton>
                <Avatar src="/profile.png" className="right-profile"></Avatar>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeaderComponent;
