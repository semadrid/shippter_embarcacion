import React, { useState } from "react";
import moment from "moment";
import ModalForm from "./ModalForm";

//tabla para ships TO DO editar y borrar
const ShipList = ({ ships, ship, setListUpdated }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    name: "",
    pos_x: 0,
    pos_y: 0,
    pos_z: 0,
    destiny: "",
    pointing_at: "",
    sail_date: "",
  });
  const handleDelete = (id) => {
    const requestInit = {
      method: "DELETE",
    };
    fetch("http://localhost:8000/api/ships/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setListUpdated(true);
  };
  const handleOnClickUpdate = (ship) => {
    setShowModal(true);
    setModalInfo(ship);
  };
  const handleSubmit = (ship) => {
    ship.pos_x = parseFloat(ship.pos_x);
    ship.pos_y = parseFloat(ship.pos_y);
    ship.pos_z = parseFloat(ship.pos_z);
    //validación campos vacíos
    if (
      ship.name === "" ||
      ship.pos_x === null ||
      ship.pos_y === null ||
      ship.pos_z === null ||
      ship.destiny === "" ||
      ship.pointing_at === "" ||
      ship.sail_date === ""
    ) {
      alert("Los campos deben estar completados correctamente");
      return;
    }
    const requestInit = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ship),
    };
    fetch("http://localhost:8000/api/ships/" + ship._id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setShowModal(false);
    setListUpdated(true);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Pos X</th>
            <th>Pos Y</th>
            <th>Pos Z</th>
            <th>Destino</th>
            <th>Apuntando</th>
            <th>Fecha de Salida</th>
          </tr>
        </thead>
        <tbody>
          {ships.map((ship) => (
            <tr key={ship._id}>
              <td>{ship.name}</td>
              <td>{ship.pos_x}</td>
              <td>{ship.pos_y}</td>
              <td>{ship.pos_z}</td>
              <td>{ship.destiny}</td>
              <td>{ship.pointing_at}</td>
              <td>{moment.utc(ship.sail_date).format("D/MM/YYYY")}</td>
              <td>
                <div className="mb-3">
                  <button
                    onClick={() => handleDelete(ship._id)}
                    className="btn btn-danger"
                  >
                    Borrar
                  </button>
                  <button
                    onClick={() => handleOnClickUpdate(ship)}
                    className="btn btn-danger"
                  >
                    Actualizar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalForm
        info={modalInfo}
        visible={showModal}
        setVisible={setShowModal}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ShipList;
