import * as React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled, useTheme } from "@mui/material/styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Drawer,
  Button,
  Box,
  Fab,
  useScrollTrigger,
  CssBaseline,
  Typography,
  IconButton,
  List,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Login from "./Login";
import Create from "./Create";
import Register from "./Register";
import EditarPerfil from "./EditarPerfil";

function ScrollTop(props) {
  const { children, window, categories, loged, setLoged, user, setUser} = props;
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };
  return (
    <Box
      onClick={handleClick}
      role="presentation"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
    >
      {children}
    </Box>
  );
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function BackToTop(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [users, setUsers] = useState([
    {
      idProfile: 1,
      foto: "",
      name: "Andy",
      email: "prueba@gmail.com",
      password: "12345678",
      telf: "73755412",
      red: "https://github.com/andyortz",
    },
  ]);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Products & Services Page
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            {
              // <Button
              //   variant="contained"
              //   onClick={() => setOpenPopup(true)}
              //   align="rigth"
              // >
              //   {" "}
              //   Login{" "}
              // </Button>
            }
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            color="primary"
            sx={{ bgcolor: "lightgray" }}
          >
            {theme.direction === "ltr" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {props.loged ? (
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }} onClick={() => {setOpenProfile(true)}}>
                {
                  //<ListItemIcon>
                  // {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  // </ListItemIcon>
                }
                <ListItemText sx={{color:"primary.main" }} primary={" Editar Perfil "} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }} onClick={() => {setOpenCreate(true)}}>
                <ListItemText sx={{color:"primary.main" }} primary={" Crear "} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }} onClick={() => {props.setLoged(false)}}>
                <ListItemText sx={{color:"primary.main" }} primary={" Cerrar Sesion "} />
              </ListItemButton>
            </ListItem>
          </List>
        ) : (
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }} onClick={() => {setOpenLogin(true)}}>
                <ListItemText sx={{color:"primary.main" }} primary={" Login "} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center"}} onClick={() => {setOpenRegister(true)}}>
                <ListItemText primary={" Register "} sx={{color:"primary.main" }} />
              </ListItemButton>
            </ListItem>
          </List>
        )}
      </Drawer>
      <Login openPopup={openLogin} setOpenPopup={setOpenLogin} loged={props.loged} setLoged={props.setLoged}
      user = {props.user} setUser = {props.setUser}
      />
      <Create
        openPopup={openCreate}
        setOpenPopup={setOpenCreate}
        categories={props.categories}
      />
      <Register
        openPopup={openRegister}
        setOpenPopup={setOpenRegister}
      />
      <EditarPerfil openPopup={openProfile} setOpenPopup={setOpenProfile} user={props.user}/>
    </>
  );
}
