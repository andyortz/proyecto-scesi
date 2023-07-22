import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import "./App.css";
import {
  Button,
  ThemeProvider,
  Typography,
  createMuiTheme,
} from "@mui/material";
import ServicesList from "./components/ServicesList";

const IMG = "servicesApp.services";
function App() {
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
    "Otro"
  ];
  const [services, setServices] = useState([
    {
      id: 1,
      titulo: "Recover Title",
      category: "Consegurir de tipo Cat",
      user: "id",
      price: 0.0,
      description: "Descripcion del producto",
      isCompleted: false,
    },
  ]);

  const [loged, setLoged] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    if (services.length > 1) {
      localStorage.setItem(IMG, JSON.stringify(services));
    }
  }, [services]);

  useEffect(() => {
    const storedServices = JSON.parse(localStorage.getItem(IMG));
    if (storedServices) {
      setServices(storedServices);
    }
  }, []);

  const addService = () => {
    setServices((prevServices) => {
      return [
        ...prevServices,
        {
          id: services.length + 1,
          titulo: "XD",
          isCompleted: false,
          description: "aholas",
        },
      ];
    });
  };
  const toggleService = (img) => {
    const newServices = [...services];
    const service = newServices.find((service) => service.img === img);
    service.isCompleted = !service.isCompleted;
    setServices(newServices);
  };
  return (
    <>
      <Navbar categories={categories} loged={loged} setLoged = {setLoged} user={user} setUser={setUser} />
      <ServicesList
        user = {user}
        services={services}
        toggleService={toggleService}
        categories={categories}
      />
      <Button variant="contained" onClick={addService}>
        Press me{" "}
      </Button>
    </>
  );
}
export default App;
