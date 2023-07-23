import Navbar from "./components/Navbar";
import ServicesList from "./components/ServicesList";
import { useState, useEffect } from "react";
import "./App.css";
import {
  Button,
  Switch,
  ThemeProvider,
  Typography,
  createMuiTheme,
} from "@mui/material";
import {  Route, Routes } from "react-router-dom";

function App() {
  const [loged, setLoged] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    foto: "",
    password: "",
    telf: "",
    red: "",
  });

  return (
    <>
      <Navbar loged={loged} setLoged={setLoged} user={user} setUser={setUser} />
        <Routes>
            <Route path="/servicio">mostrar service</Route>
            <Route path="/perfil">Perfil de usuario</Route>
            <Route path="/" exact element={<ServicesList loged={loged} user={user}/>}></Route>
          <Route path="*" element={<h2> Direccion no encontrada</h2>}></Route>
        </Routes>
    </>
  );
}
export default App;
