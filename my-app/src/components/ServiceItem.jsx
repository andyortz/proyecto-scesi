import React from "react";
import { useState, useEffect } from "react";

import { CheckBox } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import ExpandService from "../pages/ExpandService";
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

export default function ServiceItem({ service }) {
  const [openPopup, setOpenPopup] = useState(false);
  const { id, title, category, user, price, description } =
    service;
  
  return (
    <Card
      sx={{
        marginY: 2,
        marginX: "auto",
        maxWidth: "85%",
        flexGrow: 2,
        border: 2,
        borderColor: "lightgray",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
      elevation={0}
    >
      <CardActionArea onClick={() => {setOpenPopup(true)}}>
        <Grid container spacing={2} sx={{p:3}}>
          <Grid item md={3} xs={12} sx={{display:"flex"}}>
              <Img
                sx={{borderRadius: 2}}
                maxWidth
                alt="complex"
                src={require("../img/" + Math.floor(Math.random() * 7)+".jpg")}
              />
          </Grid>
          <Grid item md={9} xs={12}container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs sx={{ margin: 2 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
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
                  By: {user}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
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
