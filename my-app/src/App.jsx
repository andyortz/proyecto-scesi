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
      id: 1,
      titulo: "Recover Title",
      category: "Consegurir de tipo Cat",
      user: "getUser",
      price: 0.00,
      description: "Descripcion del producto",
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
      return [...prevServices, {id: services.length + 1, titulo: "XD", isCompleted: false, description:"aholas"}]
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
      
    </>
  );
}
export default App;
