import React, { useContext } from "react";
import "../styles/Search.css";
import { Box, TextField } from "@mui/material";
import { PersonSearch } from "@mui/icons-material";
import { ThemeContext } from "../context/ThemeContext";
import { light } from "@mui/material/styles/createPalette";

const Search = ({ search, handleSearch }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="input-search">
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <PersonSearch
          fontSize="large"
          sx={{
            mr: 1,
            my: 0.5,
          }}
        />
        <TextField
          fullWidth
          id="input"
          label="Search name"
          variant="standard"
          size="small"
          value={search}
          onChange={handleSearch}
        />
      </Box>
    </div>
  );
};

export default Search;
