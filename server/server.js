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
const storage = multer.diskStorage({
  destination:(req, file, bd) =>{
    bd(null, 'public/images')
  },
  filename: (req, file, bd) =>{
    bd(null, file.fieldname + "_" + Date.now() +  path.extname(file.originalname))
  }
})
const upload = multer({
  storage: storage
})
app.post("/services", (req, res) =>{
  const value =[
    req.body.category,
    req.body.title,
    req.body.idUser,
    req.body.price,
    req.body.description,
    req.body.foto
   ]
   const sql = "INSERT INTO servicios(category, title, idUser, foto, price, description) VALUES(?)";
  bd.query(sql, [value],
  (err, result) =>{
    if(err){
      return res.json({message: "Error"});
    }else{
      return res.json({status: "succed"});
    }
  });
})
app.post("/user", upload.single('foto'), (req, res) =>{
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
      return res.json({message: "Error"});
    }else{
      return res.json({status: "succed"});
    }
  });
})
app.post("/login", (req, res) =>{
  const value =[
    req.body.email,
    req.body.password
  ]
  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  bd.query(sql, [value],
  (err, result) =>{
    if(err){
      console.log(err);
    }else{
      console.log("Si se ingreso sesion")
      if(result.length > 0){
        res.send(JSON.stringify(result));
      }else{
        res.send("Datos incorrectos");
      }
    }
  });
})
app.get("/servicios", (req, res) =>{
  bd.query("SELECT * FROM servicios", (err, result) =>{
    if(err){
      return res.json(err);
    }else{
      res.setHeader("Content-Type", "aplication/json");
      return res.json(result);
    }
  })
})
app.listen(4000, () => console.log("server"))