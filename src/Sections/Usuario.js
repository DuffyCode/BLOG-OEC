import './PageSecction.css';
import User from '../Components/UsuApp';
import Coment from '../Components/ComApp';
import Contact from '../Components/ContactApp';
import React, {useState} from 'react';


export default function Usuario(){

	const [clicked, setClicked] = useState(false)
	const HandClicked = () =>{
		useState(!clicked)
	}

	return(
		<main className="All">
			<h1>Usuarios<br/><hr/></h1>
			<nav className="Barra">
				<p className="Title">Ingresar</p>
			</nav>
			<button onClicked={User} className="Buttons">Ingresar</button>
			<br/><br/><br/>
			<nav className="Barra">
				<p className="Title">Registrarse</p>
			</nav>
			<button className="Buttons">Registrarse</button>
			<br/><br/>
			<hr/>
			<User/>
			<br/>
			<hr/>
			<Coment/>
			<br/>
			<hr/>
			<Contact/>
		</main>
		);
}