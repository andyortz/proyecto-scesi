import React from "react";
import  ServiceItem  from "./ServiceItem";
import { Box, Paper } from "@mui/material";

export default function ServicesList({ services, toggleService }) {
  return (
    <Paper
      sx={{
      py: 2,
      flexGrow: 1}}>
      {services.map((service) => (
          <ServiceItem sx={{py:2}}key={service.img} service ={service} toggleService={toggleService}/>
      ))}
    </Paper>
  );
}
