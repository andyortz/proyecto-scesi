import * as React from "react";
import { useState, useRef } from "react";
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
  Modal,
} from "@mui/material";

export default function Create(props) {
  const { openPopup, setOpenPopup, user } = props;
  const handleCreate = () => {
    console.log("jija");
  };
  const script = () => {
    const file = document.getElementById('foto');
    const img = document.getElementById('img')
    file.addEventListener("change", (e) => {
      console.log(e);
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
              <input accept="image/*" name= "foto" type="file" id="foto" onChange={script} />

              <TextField
                margin="normal"
                required
                fullWidth
                id="user"
                label="Email Address or User"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                login
              </Button>
            </form>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
