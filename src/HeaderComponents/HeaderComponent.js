import React, { useState } from "react"; // Combine React and useState in one import
import "./HeaderComponent.css";
import { Avatar, Box, Grid, IconButton, Modal } from "@mui/material";
import Profile from "./Profile";
import SearchComponent from "./SearchComponent";
import Link from "next/link";
import LoginForm from "../LoginForm/loginform";


const pages = [
  { name: "Home", path: "/home" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const HeaderComponent = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <IconButton onClick={handleOpen}>
                <Avatar src="/profile.png" className="right-profile"></Avatar>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Modal for Login Form */}
      <Modal open={open} onClose={handleClose} aria-labelledby="login-modal">
        <div className="modal-container">
          <LoginForm />
        </div>
      </Modal>
    </>
  );
};

export default HeaderComponent;
