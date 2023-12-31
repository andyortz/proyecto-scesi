import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import { createTheme, makeStyles, ThemeProvider } from "@mui/material/styles";
import {
  Alert,
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

export default function EditProfile(props) {
  const { openPopup, setOpenPopup, user, setUser } = props;
  const data = props.user;
  const onChange = (event) =>{
    props.setUser({
      ...props.user, [event.target.name]: event.target.value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setOpenPopup(false);
    alert("Pefil Actualizado Correctamente");
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
    <Dialog fullWidth open={openPopup}>
      <DialogTitle>
        <Toolbar>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            PERFIL
          </Typography>
          <Button variant="contained" onClick={() => {
            setOpenPopup(false);
            props.setUser(data);
          }}>
            X
          </Button>
        </Toolbar>
      </DialogTitle>
      <DialogContent>
        <Container component="main">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <form
              style={{
                margin: 0,
                minWidth: "100%",
              }}
              onSubmit={handleSubmit}
            >
              <Box
                fullWidth
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Avatar
                  sx={{
                    m: 4,
                    bgcolor: "secondary.main",
                    minHeight: 100,
                    minWidth: 100,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Img id="img" alt="🥸" />
                </Avatar>
                <TextField
                  accept="image/*"
                  name="foto"
                  type="file"
                  id="foto"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  value={user.name}
                  onChange={onChange}
                  name="name"
                  label="Nombre Completo"
                  type="text"
                  id="name"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  value={user.email}
                  onChange={onChange}

                  label="Correo Electronico"
                  name="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  value={user.password}
                  label="Constraseña"
                  type="password"
                  onChange={onChange}

                  id="password"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="telf"
                  label="Telefono"
                  value={user.telf}
                  onChange={onChange}

                  id="telf"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="red"
                  value={user.red}
                  onChange={onChange}

                  label="Link de alguna Red Social(opcional)"
                  id="red"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Actualizar Cambios
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
}