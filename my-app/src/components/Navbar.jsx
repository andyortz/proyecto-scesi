import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
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
  AppBar
} from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import LoginIcon from '@mui/icons-material/Login';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Login from "./Login";
import Create from "./Create";
import Register from "./Register";
import EditarPerfil from "./EditarPerfil";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
const categories = [
  "Desarrollo Mobil",
  "Desarrollo Web",
  "Diseño de Logo",
  "Diseño Grafico",
  "Diseño UX/UI",
  "Diseño Web",
  "Edicion de Audio",
  "Edicion de Video",
  "Fotografía",
  "Marketing",
  "Musica",
  "Tutoria",
  "Otro",
];
function ScrollTop(props) {
  const { children, window, loged, setLoged, user, setUser } =
    props;
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
  sx={{ position: "fixed", bottom: 16, right: 16, boxShadow: "none" }}
    >
      {children}
    </Box>
  );
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

export default function BackToTop(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const actions = [
    {
      name: "Editar Perfil",
      click: () => {
        setOpenProfile(true);
      },
    },
    {
      name: "Crear",
      click: () => {
        setOpenCreate(true);
      },
    },
    {
      name: "Cerrar Sesión",
      click: () => {
        props.setLoged(false);
      },
    },
    {
      name: "Login",
      click: () => {
        setOpenLogin(true);
      },
    },
    {
      name: "Register",
      click: () => {
        setOpenRegister(true);
      },
    },
  ];
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
  return (
    <Box sx={{display:"flex"}}>
      <CssBaseline />
        <AppBar elevation={0}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "block" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography  variant="h6" component="div" sx={{flexGrow: 1, textAlign:"center"}}>
              Products & Services Page Planet
            </Typography>
          </Toolbar>
        </AppBar>
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
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            color="primary"
            sx={{ bgcolor: "lightgray" }}
          >
            <ChevronLeftIcon /> 
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {actions.map((action, index) => {
            if (index < 3 && props.loged) {
              return (
                <ListItem key={action.name} disablePadding>
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    onClick={() => {
                      action.click();
                    }}
                  >
                    <ListItemText
                      sx={{ color: "primary.main" }}
                      primary={action.name}
                    />
                  </ListItemButton>
                </ListItem>
              );
            } else if(index >=3 && index <=4 && !props.loged){
              return(
              <ListItem key={action.name} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "left" }}
                  onClick={() => {
                    action.click();
                  }}
                >
                 <ListItemIcon>
                  {index  === 3? <LoginIcon /> : <VpnKeyIcon />}
                  </ListItemIcon> 
                  <ListItemText
                    sx={{ color: "primary.main" }}
                    primary={action.name}
                  />
                </ListItemButton>
              </ListItem>);
            } else if(index === 1 && props.loged){
              <Link to = "/create"> Create</Link>
            }
          })}
        </List>
      </Drawer>
      <Login
        openPopup={openLogin}
        setOpenPopup={setOpenLogin}
        loged={props.loged}
        setLoged={props.setLoged}
        user={props.user}
        setUser={props.setUser}
      />
      <Create
        openPopup={openCreate}
        setOpenPopup={setOpenCreate}
        categories={categories}
      />
      <Register openPopup={openRegister} setOpenPopup={setOpenRegister} loged={props.loged} setLoged={props.setLoged}/>
      <EditarPerfil
        openPopup={openProfile}
        setOpenPopup={setOpenProfile}
        user={props.user}
        setUser = {props.setUser}
      />
    </Box>
  );
}
