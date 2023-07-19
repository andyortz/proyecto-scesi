import React from "react";
import  ServiceItem  from "./ServiceItem";

export default function ServicesList({ services, toggleService }) {
  return (
    <ul>
      {services.map((service) => (
        <ServiceItem key={service.img} service ={service} toggleService={toggleService}/>
      ))}
    </ul>
  );
}
