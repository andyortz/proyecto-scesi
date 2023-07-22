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
});

app.post("/user", (req, res) =>{
  const value ={
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    foto: req.body.foto,
    telf: req.body.telf,
    red: req.body.red
  }
  db.query("INSERT INTO user(name, email, password, foto, telf, red) VALUES(?,?,?,?,?)", value,
  (err, result) =>{
    if(err){
      console.log(err);
    }else{
      res.send("Empleado regsitrado");
    }
  });
})
app.listen(4000, () => console.log("hola soy el servidor"))