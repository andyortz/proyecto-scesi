import React from "react";
import { useState, useEffect } from "react";

import { CheckBox } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import ExpandService from "./ExpandService";
import {
  Typography,
  Checkbox,
  Toolbar,
  Button,
  IconButton,
  Card,
  CardActionArea,
  AppBar,
} from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ServiceItem({ service, toggleService }) {
  const [openPopup, setOpenPopup] = useState(false);

  const { id, titulo, category, user, price, description, isCompleted } =
    service;
  const handleChange = () => {
    toggleService(id);
  };
  return (
    <Card
      sx={{
        p: 3,
        marginY: 2,
        marginX: "auto",
        maxWidth: "85%",
        flexGrow: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <CardActionArea onClick={() => {setOpenPopup(true)}}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 250, height: 185, marginX: 2 }}>
              <Img
                alt="complex"
                src={require("../img/emily-bernal-v9vII5gV8Lw-unsplash.jpg")}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs sx={{ margin: 2 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {titulo}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Precio: {price}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ flexGrow: 1, margin: 0, p: 0 }}
                  color="text.secondary"
                >
                  Category: {category}.{" "}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, margin: 0, p: 0 }}
                  color="text.secondary"
                >
                  By: {user}.{" "}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
                  quibusdam. Dolorum temporibus distinctio omnis eos illum
                  cupiditate quam commodi mollitia iusto? Tempora harum facilis,
                  a hic aut sint rem sequi?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardActionArea>
      <ExpandService openPopup={openPopup} setOpenPopup={setOpenPopup} service = {service}/>
    </Card>
  );
}
