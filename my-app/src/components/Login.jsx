import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, makeStyles, ThemeProvider } from "@mui/material/styles";
import {
  Alert,
  AppBar,
  Dialog,
  DialogContent,
  DialogTitle,
  Toolbar,
} from "@mui/material";
import { loginUser } from "../services/user";

import { useState, useEffect } from "react";
import { PropaneSharp } from "@mui/icons-material";

export default function Login(props) {
  const { openPopup, setOpenPopup, loged, setLoged, user, setUser } = props;
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const onChange = (event) => {
    setValues({
      ...values, [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    props.setLoged(true)
    props.setUser({
      name: "Andy",
    email: "andy@hotmail.com",
    foto: "none",
    password: "12345678",
    telf: "73755412",
    red: "github",
    })
    props.setOpenPopup(false);
    return(
    <Alert severity="success">Inicio de Sesion exitoso</Alert>
    );
    // try{
    //   const res = await loginUser(values, user, setUser)
    //   //then(props.setLoged(true));
    //   props.setUser(res.data);
    //   console.log(res.data);
    // }catch(error){
    //   console.error("error", error);
    // }
  };
  return (
    <Dialog open={openPopup} maxWidth="sm">
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
            INICIO DE SESION
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
            <Avatar
              sx={{
                m: 4,
                bgcolor: "secondary.main",
                minHeight: 100,
                minWidth: 100,
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={onChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesion
              </Button>
            </form>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
