import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment";

const ModalForm = ({ info, visible, setVisible, handleSubmit }) => {
  const handleOnClick = () => {
    setVisible(!visible);
  };
  const [ship, setShip] = useState({});
  const handleClose = () => setVisible(false);

  const handleChange = (e) => {
    setShip({
      ...ship,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClickSubmit = () => {
    handleSubmit(ship);
  };

  console.log("ship", ship);
  useEffect(() => {
    setShip(info);

    return () => {
      setShip({});
    };
  }, [info]);

  if (!visible) return null;
  return (
    <div className={`modal ${visible ? "" : "off"}`} id="modal">
      <Button variant="primary" onClick={setVisible}>
        Launch demo modal
      </Button>

      <Modal show={visible} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar {ship.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="content">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  value={ship.name}
                  name="name"
                  onChange={handleChange}
                  type="Text"
                  id="name"
                  className="form-control"
                  placeholder="Nombre de la embarcación"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="pos_x" className="form-label">
                  Latitud
                </label>
                <input
                  value={ship.pos_x}
                  name="pos_x"
                  onChange={handleChange}
                  type="number"
                  id="pos_x"
                  className="form-control"
                  placeholder="Ingresar valor de la Latitud +- 0-90"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="pos_y" className="form-label">
                  Longitud
                </label>
                <input
                  value={ship.pos_y}
                  name="pos_y"
                  onChange={handleChange}
                  type="number"
                  id="pos_y"
                  className="form-control"
                  placeholder="Ingresar valor de Longitud +- 0-180"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="destiny" className="form-label">
                  Destino
                </label>
                <input
                  value={ship.destiny}
                  name="destiny"
                  onChange={handleChange}
                  type="Text"
                  id="destiny"
                  className="form-control"
                  placeholder="Destino de la embarcación"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="pointing_at" className="form-label">
                  Apuntando
                </label>
                <input
                  value={ship.pointing_at}
                  name="pointing_at"
                  onChange={handleChange}
                  type="Text"
                  id="pointing_at"
                  className="form-control"
                  placeholder="Si apunta a Norte/Sur/Este/Oeste"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="sail_date" className="form-label">
                  Fecha de Salida
                </label>
                <input
                  value={moment.utc(ship.sail_date).format("yyyy-MM-DD")}
                  name="sail_date"
                  onChange={handleChange}
                  type="Date"
                  id="sail_date"
                  className="form-control"
                ></input>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleOnClickSubmit}>
            Actualizar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

ModalForm.defaultProps = {
  handleSubmit: () => {},
};
export default ModalForm;
