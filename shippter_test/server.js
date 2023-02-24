const express = require('express');
const mongoose = require('mongoose');

//para variables entorno
require("dotenv").config();

const app = express();

const port = 8000;

async function connect(){
    await mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log("Conectado a MONGODB"))
    .catch((error) => console.log(error))
}

connect();

//test de api
app.get('/', (req, res) => {
    res.send('Test api correcto');
}) 

app.listen(port, () => {
    console.log("Servidor escuchando en puerto 8000")
})