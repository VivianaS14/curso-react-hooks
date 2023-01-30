import React from "react";
import { Avatar, Chip } from "@mui/material";
import {
  Face5Outlined,
  WcOutlined,
  FiberManualRecordOutlined,
} from "@mui/icons-material";
import "../styles/Character.css";

const Character = ({
  image,
  name,
  species,
  gender,
  status,
  location,
  darkMode,
}) => {
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
      </div>
    </div>
  );
};

export default Character;
