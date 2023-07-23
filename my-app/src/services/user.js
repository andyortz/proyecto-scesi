import axios from "axios";
export const createUser = (values) =>{
   return axios
      .post("http://localhost:4000/user", values)
      .then(res=> (res))
      .catch(err => (err))
}

export const loginUser = ({values, user, setUser}) =>{
   console.log(values)
   console.log(user.name)


  return axios
     .get("http://localhost:4000/login", values)
     .then(res=> {
      setUser(res.data);
     })
     .catch(err => (err))
}
