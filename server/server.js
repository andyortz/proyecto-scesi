import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import multer from 'multer'
import path from 'path'
import bodyParser from 'body-parser'

const app = express();
app.use(cors());
app.use(express.json())
const bd = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pagina",
  port: "3307"
});

app.post("/user", (req, res) =>{
  const value =[
   req.body.name,
   req.body.email,
   req.body.password,
   req.body.foto,
   req.body.telf,
   req.body.red
  ]
  const sql = "INSERT INTO user(name, email, password, foto, telf, red) VALUES(?)";
  bd.query(sql, [value],
  (err, result) =>{
    if(err){
      console.log(err);
    }else{
      res.send("Empleado regsitrado");
    }
  });
})
app.listen(4000, () => console.log("server"))