import * as React from "react";
import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { createService} from "../services/service";
import Container from "@mui/material/Container";
import { createTheme, makeStyles, ThemeProvider } from "@mui/material/styles";
import {
  InputLabel,
  Alert,
  AppBar,
  Dialog,
  DialogContent,
  DialogTitle,
  Toolbar,
  Modal,
  OutlinedInput,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
const defaultFile =
  "https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
export default function Create(props) {
  const [category, setCategory] = useState("");
  const { openPopup, setOpenPopup, user, categories } = props;
  const [values, setValues] = useState({
    category: "",
    title: "",
    idUser: "1",
    price: "",
    description: "",
    foto: "",
  });
  const onChange = (event) => {
    setValues({
      ...values, [event.target.name]: event.target.value,
    });
  };
  const handleChange = (event) => {
    setCategory(event.target.value);
    setValues({
      ...values, [event.target.name]: event.target.value,
    });
  }
  const handleCreate = (event) => {
    event.preventDefault();
    createService(values);
    //get USer y setearlo 
    alert('Servicio creado');
    props.setOpenPopup(false);
    //insert insertion here ->_<-
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
    <Dialog open={openPopup} maxWidth="xl">
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
            CREATE
          </Typography>
          <Button variant="contained" onClick={() => setOpenPopup(false)}>
            X
          </Button>
        </Toolbar>
      </DialogTitle>
      <DialogContent>
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <form onSubmit={handleCreate} sx={{ mt: 1 }}>
              <Img id="img" alt="avatar" />
              <TextField
                accept="image/*"
                name="foto"
                type="file"
                required
                id="foto"
                onClick={script}
                onChange={onChange}

              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoFocus
                onChange={onChange}

              />
              <Box display="flex" sx={{ flexDirection: "row"}}>
                <TextField
                  sx={{maxWidth:160, mr: 2}}
                  margin="normal"
                  required
                  fullWidth
                  name="price"
                  label="Precio en $"
                  type="number"
                  id="price"
                  onChange={onChange}

                />
                
                <FormControl fullWidth sx={{ my: 2, p: "auto",ml: 2 }}>
                  <InputLabel id="demo-simple-select-label" required>
                    Categorias
                  </InputLabel>
                  <Select
                    value={category}
                    required
                    name="category"
                    id="category"
                    label="Category"
                  onChange={handleChange}
                  onClick={onChange}
                    input={<OutlinedInput label="Categorias" />}
                  >
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="Decripcion..."
                type="text"
                multiline
                onChange={onChange}
                id="description"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"

                sx={{ mt: 3, mb: 2 }}
              >
                Crear
              </Button>
            </form>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
