import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, makeStyles, ThemeProvider } from '@mui/material/styles';
import { Alert, AppBar, Dialog, DialogContent, DialogTitle, Toolbar } from "@mui/material";
import { AirlineSeatLegroomReduced, LegendToggle } from '@mui/icons-material';

const defaultTheme = createTheme();
let incorrecto = false;
export default function Login(props){
    const {openPopup, setOpenPopup} = props;
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          user: event.target.email.value,
          password: event.target.password.value
        }
        if(data.user === 'prueba' && data.password === '12345678') {
          console.log("xD");
          setOpenPopup(false);
          const username =data.user ;
        } else {
          alert('Usuario o contraseña incorrectos');
          incorrecto = true;
        }
      }
      return (
    <Dialog open={openPopup} maxWidth="md">
        <DialogTitle>
            <Toolbar>
            <Typography component="h1" variant="h5" sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}>
              LOGIN
            </Typography>
            <Button variant='contained' onClick={() => setOpenPopup(false)}>
              X
            </Button>
              </Toolbar>
        </DialogTitle>
        <DialogContent>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
          <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
    {//incorrecto? (<Alert>'contraseña o usuario incorrecto'</Alert>): ''
    }
    </Dialog>
    )
}