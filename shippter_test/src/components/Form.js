import React from "react";

const Form = ({ ship, setShip, setListUpdated }) => {
  //si se edita un campo
  const handleChange = (e) => {
    setShip({
      ...ship,
      [e.target.name]: e.target.value,
    });
  };

  let { name, pos_x, pos_y, pos_z, destiny, pointing_at, sail_date } = ship;

  const handleSubmit = () => {
    pos_x = parseFloat(pos_x);
    pos_y = parseFloat(pos_y);
    pos_z = parseFloat(pos_z);
    //validación campos vacíos
    if (
      name === "" ||
      pos_x === null ||
      pos_y === null ||
      destiny === "" ||
      pointing_at === "" ||
      sail_date === ""
    ) {
      alert("Los campos deben estar completados correctamente");
      return;
    }
    const requestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ship),
    };
    fetch("http://localhost:8000/api/ships", requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res))
      .then(
        setShip({
          name: "",
          pos_x: 0,
          pos_y: 0,
          destiny: "",
          pointing_at: "",
          sail_date: "",
        })
      );
    //actualizar lista usuario
    setListUpdated(true);
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          value={name}
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
          Pos X
        </label>
        <input
          value={pos_x}
          name="pos_x"
          onChange={handleChange}
          type="number"
          id="pos_x"
          className="form-control"
          placeholder="Número de posición X"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="pos_y" className="form-label">
          Pos Y
        </label>
        <input
          value={pos_y}
          name="pos_y"
          onChange={handleChange}
          type="number"
          id="pos_y"
          className="form-control"
          placeholder="Número de posición Y"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="destiny" className="form-label">
          Destino
        </label>
        <input
          value={destiny}
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
          value={pointing_at}
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
          value={sail_date}
          name="sail_date"
          onChange={handleChange}
          type="Date"
          id="sail_date"
          className="form-control"
        ></input>
      </div>
      <button type="button" onClick={handleSubmit} className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default Form;
