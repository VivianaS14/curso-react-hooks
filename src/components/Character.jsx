import React, { useContext } from "react";
import { Avatar, Chip, Button } from "@mui/material";
import {
  Face5Outlined,
  WcOutlined,
  FiberManualRecordOutlined,
  Favorite,
} from "@mui/icons-material";
import "../styles/Character.css";
import { ThemeContext } from "../context/ThemeContext";

const Character = ({
  image,
  name,
  species,
  gender,
  status,
  location,
  handleFavorite,
}) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? "card-light" : "card"}`}>
      <Avatar
        className="card-avatar"
        src={image}
        sx={{ width: 150, height: 150 }}
      />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{location}</p>
        <div className="card-tags">
          <Chip
            label={species}
            color="info"
            size="small"
            icon={<Face5Outlined />}
          />
          <Chip
            label={gender}
            color="secondary"
            size="small"
            icon={<WcOutlined />}
          />
          <Chip
            label={status}
            color="warning"
            size="small"
            icon={<FiberManualRecordOutlined />}
          />
        </div>
        <Button
          className="btn-favorite"
          type="button"
          variant="contained"
          color="error"
          onClick={handleFavorite}
        >
          <Favorite />
          Favorite
        </Button>
      </div>
    </div>
  );
};

export default Character;
