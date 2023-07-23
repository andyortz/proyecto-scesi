import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import {
  Alert,
  Grid,
  AppBar,
  Dialog,
  DialogContent,
  DialogTitle,
  Toolbar,
  FormControl,
} from "@mui/material";
import {
  AirlineSeatLegroomReduced,
  LegendToggle,
  PersonOutline,
} from "@mui/icons-material";
const defaultFile =
  "https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Register(props) {
  const { openPopup, setOpenPopup, service } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      user: event.target.email.value,
      password: event.target.password.value,
      img: event.target.img.value,
    };
    if (data.user === "prueba" && data.password === "12345678") {
      setOpenPopup(false);
      const username = data.user;
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };
  const script = () => {
    const file = document.getElementById("foto");
    if (file == null) {
      img.src = defaultFile;
      return;
    }
    const img = document.getElementById("img");
    file.addEventListener("change", (e) => {
      if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          img.src = e.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
      } else {
        img.src = defaultFile;
      }
    });
  };

  return (
    <Dialog maxWidth="xl" open={openPopup}>
      <DialogTitle display="flex" sx={{ justifyContent: "flex-end", m: 0 }}>
        <Button variant="contained" onClick={() => setOpenPopup(false)}>
          X
        </Button>
      </DialogTitle>
      <DialogContent fullWidth>
        <Grid container spacing={2}>
          <Grid item xs={6} fullWidth>
            <Box>
              <Img
                id="img"
                alt="🥸"
                src={require("../img/" + Math.floor(Math.random() * 7)+".jpg")}
              />
            </Box>
          </Grid>
          <Grid item xs={6} fullWidth>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              {props.service.titulo}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Desde: {props.service.price}
            </Typography>
            <Typography
              variant="body1"
              sx={{ flexGrow: 1, margin: 0, p: 0 }}
              color="text.secondary"
            >
              Categoria: {props.service.category}
            </Typography>
            <Typography
              variant="body2"
              sx={{ flexGrow: 1, margin: 0, p: 0 }}
              color="text.secondary"
            >
              By: {props.service.user}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.service.description}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
              quibusdam. Dolorum temporibus distinctio omnis eos illum
              cupiditate quam commodi mollitia iusto? Tempora harum facilis, a
              hic aut sint rem sequi?
            </Typography>
            <CssBaseline />
            <Button fullWidth variant="contained" sx={{ mt: 4, mb: 3 }}>
              Contactarse
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
