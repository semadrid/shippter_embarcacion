const express = require("express");
const mongoose = require("mongoose");
const shipRoutes = require("../shippter_test/src/routes/ship.js");

//para variables entorno
require("dotenv").config();

const app = express();

//Middleware
app.use(express.json());
app.use("/api", shipRoutes); // se debe agregar "/api" a la URI para consultar

const port = 8000;

async function connect() {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MONGODB"))
    .catch((error) => console.log(error));
}

connect();

//test de api
app.get("/", (req, res) => {
  res.send("Test api correcto");
});

app.listen(port, () => {
  console.log("Servidor escuchando en puerto 8000");
});
