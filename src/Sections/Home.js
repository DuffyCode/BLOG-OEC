import './PageSecction.css';
import React from 'react';

export default class Home extends React.Component{
	render(){
	return(
		<main className="All">
			<h1>OEC Organización y Estructura del Computador (233-2444)<br/><hr/></h1>
			<p className="Info">	
				Organización y estrucutura del computador, con ella números
				refierimos a las unidades funcionales de una computadora 
	      		(como la unidad central de procesamiento, unidad de memoria 
	      		y los dispositivos de entrada/salida) y sus interconexiones, 
	      		que materializan especificaciones arquitectónicas.
	      		<br/><br/><br/>
	      		La organización de una computadora y su arquitectura están 
	      		estrechamente relacionadas; sin embargo, no se deben confundir 
	      		la arquitectura con la organización, que en algunos casos suele ser usada como 
	      		un sinónimo de esta última, puesto que la arquitectura se enfoca a la forma de 
	      		construir las unidades funcionales para que realicen las funciones especificadas 
	      		por su organización, al igual que su forma de comunicarse e interactuar entre ellas. 
	      		Un ejemplo de atributos de la arquitectura computacional son el número de bits usados 
	      		para representar los tipos de datos (números, caracteres, etc.), mecanismos de 
	      		entrada/salida (I/O), entre otros. Algunos de los atributos de la organización 
	      		son las interfaces entre la computadora y los periféricos, las señales de 
	      		control en el hardware y la tecnología de la memoria usada.
	      		<br/><br/><br/>
	      		OEC es una materia que pertenece al area informatica, esta materia es
	      		dictada en la Universidad de Oriente (UDO) actualmente (2022) 
	      		por la licensiada: 
	      		<br/>Margarita Fajardo.
	      		<br/><br/><br/>
	      	</p>
		</main>
		);
	}
}