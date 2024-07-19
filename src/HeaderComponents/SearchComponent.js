import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Card } from "@mui/material";

const SearchComponent = () => {
  return (
    <Card
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 150,
        height: 30,
        border: "2px solid black",
        borderRadius: "15px",
        backgroundColor: "#63ffc7",
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Card>
  );
};

export default SearchComponent;
