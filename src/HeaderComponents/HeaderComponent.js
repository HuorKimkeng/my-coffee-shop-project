import React from "react";
import "./HeaderComponent.css";
import { Avatar, Box, Grid, IconButton } from "@mui/material";
import Profile from "./Profile";
import SearchComponent from "./SearchComponent";

const pages = ["Home", "Menu", "About", "Contact"];

const HeaderComponent = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid className="header" container spacing={1}>
          <Grid xs={1.5}>
            <Profile />
          </Grid>
          <Grid className="menu" xs={7}>
            {pages.map((page, index) => (
              <Grid item key={index} sx={{ margin: "0 20px" }}>
                {page}
              </Grid>
            ))}
          </Grid>
          <Grid xs={3.5} container justifyContent="center" alignItems="center">
            <SearchComponent />
            <Box>
              <IconButton>
                <Avatar src="/profile.png"></Avatar>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeaderComponent;
