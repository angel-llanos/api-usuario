const express  = require("express");
const cors = require("cors")
const app = express();
const puerto = 2295;

const {getUsuarios, getUsuarioById} = require("./controllers/usuarios.controllers")

app.use(cors());

app.get("/" , getUsuarios)

app.get("/:id" , getUsuarioById)



app.listen( puerto, () => {
    console.log(`servidor arriba ok en el puerto ${puerto}`);
});