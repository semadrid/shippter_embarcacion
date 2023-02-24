import React, {Fragment, useState, useEffect } from 'react';
import Navbar from './components/NavBar';
import ShipList from './components/ShipList';

function App() {
  // para traer ships
	const [ships, setShips] = useState([]); 
  useEffect(() => {
	  const getShips = () => {
		fetch('http://localhost:8000/api/ships')
		.then(res => res.json())
		.then(res => setShips(res))
	  }
	  getShips()
	}, [])


  return (
    <Fragment>
			<Navbar brand='Aplicacion de control Embarcaciones'/>
			<div className='container'>
				<div className='row'>
					<div className='col-7'>
						<h2 style={{textAlign: 'center'}}>Lista de embarcaciones</h2>
						<ShipList ships={ships}></ShipList>
					</div>
				</div>		
			</div>	
		</Fragment>
  );
}

export default App;
