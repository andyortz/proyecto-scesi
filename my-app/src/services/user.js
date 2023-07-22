import axios from "axios";
export const createUser = (values) =>{
   return axios
      .post("http://localhost:4000/user", values)
      .then(res=> (res))
      .catch(err => (err))
}

export const loginUser = (values) =>{
  return axios
     .post("http://localhost:4000/user", values)
     .then(res=> (res))
     .catch(err => (err))
}
