import React, {Component} from 'react';
import moment from "moment";


//tabla para ships TO DO editar y borrar
const ShipList = ({ships}) => {
    return (
        <table className='table'>
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
                {ships.map(ship => (
                    <tr key={(ship._id)}>
                        <td>{ship.name}</td>
                        <td>{ship.pos_x}</td>
                        <td>{ship.pos_y}</td>
                        <td>{ship.pos_z}</td>
                        <td>{ship.destiny}</td>
                        <td>{ship.pointing_at}</td>
                        <td>{moment.utc(ship.sail_date).format("D/MM/YYYY")}</td>
                        <td>
                            <div className='mb-3'>
                            </div>
                        </td>
                    </tr>

                ))}
            </tbody>
        </table>
    )
} 

export default ShipList;
