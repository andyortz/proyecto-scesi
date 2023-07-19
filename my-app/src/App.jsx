import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { ServicesForm } from "./components/ServicesForm";
import "./App.css";
import { Button, ThemeProvider, Typography, createMuiTheme } from "@mui/material";
import  ServicesList  from "./components/ServicesList";
let num = 1;
const IMG = "servicesApp.services";
function App() {
  const [services, setServices] = useState([
    {
      img: 0,
      text: "learning",
      isCompleted: false,
    },
  ]);
  useEffect(()=>{
    if(services.length > 1){
      localStorage.setItem(IMG, JSON.stringify(services));
    }
  }, [services]);
  
  useEffect(()=>{
    const storedServices = JSON.parse(localStorage.getItem(IMG));
    if(storedServices){
      setServices(storedServices);
    }
  },[ ]);
  
  const addService = () =>{
    setServices((prevServices) =>{
      return [...prevServices, {img: num++, text: "XD", isCompleted: false}]
    })
  };
  const toggleService = (img) =>{
    const newServices = [...services];
    const service = newServices.find((service) => service.img === img);
    service.isCompleted = !service.isCompleted;
    setServices(newServices);
  };
  return (
    <>
      <Navbar/>
      <ServicesList services={services} toggleService={toggleService} />
      <Button variant="contained" onClick={addService}>Press me </Button>
      <Typography variant="h1" color="primary">
        Lorem x dolor sit amet consectetur, adipisicing elit. Eius quas odio,
        mollitia nulla dicta, totam quis sunt reiciendis illum error porro,
        libero ut fugiat. Numquam pariatur labore alias soluta est!
      </Typography>
    </>
  );
}
export default App;
