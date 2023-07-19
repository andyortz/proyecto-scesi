import { CheckBox } from "@mui/icons-material";
import { Typography, Checkbox, Toolbar, Button } from "@mui/material";
import React from "react";

export default function ServiceItem({ service, toggleService }) {
  const { img, text, isCompleted } = service;
  const handleChange = () =>{
    toggleService(img);
  };
  return (
    <li>
      <Toolbar>
      <Typography>
        {text}, {img}, {isCompleted? "yes":"no"}
      </Typography>
      <Button variant="contained" onClick={handleChange}>Delete</Button>
      </Toolbar>
    </li>
  );
}
