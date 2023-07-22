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
import axios from "axios";
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
export default function Register(props) {
  const { openPopup, setOpenPopup, users, setUsers } = props;
  const [values, setValues] = useState({
    name: "",
    email: "",
    foto: "",
    password: "",
    telf: "",
      red: ""
    });
  const handleSubmit = (event) => {
    event.preventDefault();
        setValues({
          foto: event.target.foto.value,
          name: event.target.name.value,
          email: event.target.email.value,
          password: event.target.password.value,
          telf: event.target.telf.value,
          red: event.target.red.value,
        });
    console.log(values);

    axios
      .post("http://localhost:4000/user", values)
      .then(res=> console.log(res))
      .catch(err => console.log(err))
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
            REGISTRO
          </Typography>
          <Button variant="contained" onClick={() => setOpenPopup(false)}>
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
              onSubmit={handleSubmit}
              style={{
                margin: 0,
                minWidth: "100%",
              }}
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
                  onClick={script}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
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
                  label="Correo Electronico"
                  name="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Constraseña"
                  type="password"
                  id="password"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="telf"
                  label="Telefono"
                  id="telf"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="red"
                  label="Link de alguna Red Social(opcional)"
                  id="red"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Registrarse
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
