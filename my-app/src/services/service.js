import axios from "axios";

export const servicesGetAll = () =>{
  return axios
    .get("http://localhost:4000/servicios")
    .then(res=> (res))
    .catch(err => (err)) 
}
export const createService = (values) =>{
  return axios
    .put("http://localhost:4000/servicios")
    .then(res => (res))
    .catch(err => (err))
}