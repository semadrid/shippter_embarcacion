import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import ShipList from "./components/ShipList";
import Form from "./components/Form";
import MapChart from "./components/MapChart";

function App() {
  //para crear usuario
  const [ship, setShip] = useState({
    name: "",
    pos_x: 0,
    pos_y: 0,
    pos_z: 0,
    destiny: "",
    pointing_at: "",
    sail_date: "",
  });
  // para traer ships
  const [ships, setShips] = useState([]);

  const [listUpdated, setListUpdated] = useState(false);

  useEffect(() => {
    const getShips = () => {
      fetch("http://localhost:8000/api/ships")
        .then((res) => res.json())
        .then((res) => setShips(res));
    };
    getShips();
    setListUpdated(false);
  }, [listUpdated]);

  return (
    <Fragment>
      <Navbar brand="Aplicacion de control Embarcaciones" />
      <div className="container mx-auto">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Lista de Embarcaciones</h2>
            <ShipList
              ships={ships}
              ship={ship}
              setListUpdated={setListUpdated}
            ></ShipList>
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Crear Embarcación</h2>
            <Form
              ship={ship}
              setShip={setShip}
              setListUpdated={setListUpdated}
            />
          </div>
          <div className="row">
            <div className="col-12">
              <MapChart ships={ships}></MapChart>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
