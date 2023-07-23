import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { createUser } from "../services/user";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Toolbar,
} from "@mui/material";

const defaultFile =
  "https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
export default function Register(props) {
  const { openPopup, setOpenPopup, users, setUsers, loged, setLoged } = props;
  const datos = [{
    name:"name", text: "Ingrese su Nombre", type:"text"
  },{
    name:"email", text: "Ingrese su Correo Electronico", type:"email"
  },{
    name:"password", text: "Ingrese una Contraseña", type:"password"
  },{
    name:"telf", text: "Ingrese su telefono", type:"text"
  },{
    name:"red", text: "Alguna red Social o Portafolio", type:"text"
  }
  ];
  const [values, setValues] = useState({
    name: "",
    email: "",
    foto: "",
    password: "",
    telf: "",
    red: "",
  });
  const onChange = (event) => {
    setValues({
      ...values, [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('img', values.foto);
    createUser(values).then(props.setLoged(true));
    //get USer y setearlo 
    alert('Usuario creado');
    props.setOpenPopup(false);
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
                  onChange={onChange}
                />
                {datos.map((dato) =>(
                  <TextField
                    key={dato.name}
                    margin="normal"
                    required
                    fullWidth
                    name={dato.name}
                    label={dato.text}
                    type={dato.type}
                    id={dato.name}
                    onChange={onChange}
                  />
                ))}
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
