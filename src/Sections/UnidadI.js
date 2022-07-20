import './PageSecction.css';
import Imagens from '../Img/Images';

export default function UnidadI(){
	return(
		<main className="All">
			<h1>Unidad I<br/><hr/></h1>
			<h2 className= "Head">Contenido:</h2>
			<section className="List">
				<li>Introducción</li>
				<li>Organización y estructura de las computadoras.</li>
				<li>Lenguajes, Niveles y máquinas virtuales.</li>
				<li>Máquinas multinivel contemporáneas.
					<li className="List2">Nivel de lógica digital.</li>
					<li className="List2">Nivel de micro arquitectura.</li>
					<li className="List2">Nivel ISA.</li>
					<li className="List2">Nivel de sistema Operativo.</li>
					<li className="List2">Nivel de lenguaje ensamblador. </li>
					<li className="List2">Nivel de lenguaje orientado a aplicaciones.</li>
				</li>
				<li>Evolución de las máquinas multinivel.</li>
				<hr/><br/>
			</section>	
			<h2 className="Head">Introducción</h2>
			<p className="Secondary">Computador digital:</p>
			<p className="Parrafo">
				Máquina electrónica capaz de almacenar información y tratarla 
				automáticamente mediante operaciones matemáticas y lógicas con 
				la finalidad de resolver problemas.
			</p>

			<p className="Secondary">Programa:</p>
			<p className="Parrafo">
				Secuencia de instrucciones que permiten resolver una tarea como tal.
			</p>

			<p className="Secondary">Lenguaje de Máquina:</p>
			<p className="Parrafo">
				El lenguaje de máquina o código máquina es el sistema de códigos 
				directamente interpretable por un circuito microprogramable, como 
				ser el microprocesador del computador.
			<hr/><br/>
			</p>

			<h2 className="Head">Organización y estructura de las computadoras</h2>
			<p className="Parrafo">
				Es la estructura del computador como una serie de abstracciones, 
				donde cada una de estas se apoya en la que está debajo de ella. 
				De este modo es posible controlar la complejidad y diseñar sistemas de 
				cómputo de manera sistemática y organizada.
			<hr/>
			<br/>
			</p>

			<h2 className="Head">Lenguajes, niveles y máquinas virtuales</h2>
			<p className="Parrafo">
				Existe una gran diferencia entre lo que es cómodo para las personas y lo 
				que es cómodo para las computadoras. Las personas quieren hacer X, pero las 
				computadoras sólo PUEDEN hacer Y. Y esto genera un problema.
				<br/><br/> 
				La solución para esto, se identifican los lenguajes L0 y L1. L0 representa 
				las instrucciones de máquinas originales y el L1 que es el nuevo conjunto de 
				instrucciones que es más fácil de comprender para las personas. 
			</p>
			<p className="Secondary">Traductor (compilador):</p>
			<p className="Parrafo">
				Se refiere a tener un programa escrito en L1, y cada una de las instrucciones 
				escritas en L1 se lleva a una secuencia de instrucciones equivalentes en L0.	
			</p>

			<p className="Secondary">Interpretador:</p>
			<p className="Parrafo">
				Programa escrito en L0 y que toma como datos de entrada en tiempo de ejecución 
				las instrucciones de L1, una a una las decodifica y ejecuta.
			<br/><br/>
				Para que este proceso sea práctico, los lenguajes L0 y L1 no deben ser demasiado 
				diferentes. Pese a L1 ser más fácil para el hombre de comprender, aún dista bastante 
				de ser ideal para la mayoría de las aplicaciones. Por tanto, se lleva a la creación 
				de un tercer conjunto de instrucciones que esté más orientado a las personas y menos 
				orientado a la máquina que L1. Este nuevo lenguaje sería L2, con una máquina virtual 
				M2. Y esta creación de nuevos lenguajes puede continuar indefinidamente hasta llegar 
				al adecuado.
			<br/><br/>
				Para que este proceso sea práctico, los lenguajes L0 y L1 no deben ser demasiado 
				diferentes. Pese a L1 ser más fácil para el hombre de comprender, aún dista bastante 
				de ser ideal para la mayoría de las aplicaciones. Por tanto, se lleva a la creación 
				de un tercer conjunto de instrucciones que esté más orientado a las personas y menos 
				orientado a la máquina que L1. Este nuevo lenguaje sería L2, con una máquina virtual 
				M2. Y esta creación de nuevos lenguajes puede continuar indefinidamente hasta llegar 
				al adecuado. 
			<br/><br/>
				El sistema operativo separa al programador de trabajar directamente con el hardware 
				a bajo nivel (bits, transistores, puertas lógicas, etc) y presenta una interfaz 
				sencilla ocultando asuntos desagradables como interrupciones, temporizadores, 
				administración de memoria, etc. Desde esta perspectiva, una de las funciones del 
				sistema operativo es presentar al usuario el equivalente de una máquina virtual, 
				que es más fácil de programar que el hardware.
			<br/><br/>
				Las máquinas interpretan más fácilmente las señales on y off, lo que equivale a 
				interpretar la presencia o ausencia de voltaje. Por lo tanto, el lenguaje empleado 
				por las máquinas consta de dos símbolos, el 1 y el 0, lo que equivale a verdadero 
				o true, y falso o false respectivamente. Este lenguaje se conoce como lenguaje 
				binario, y es éste lenguaje el empleado para construir todos los comandos e 
				instrucciones necesarias para comunicarnos con la máquina. Las instrucciones 
				que se ejecutan en un computador, son colecciones de bits, por ejemplo, el siguiente 
				patrón indica al computador que debe sumar dos números: 1000110010100000. Escribir 
				un programa a base de bits, es muy complicado para los programadores, para solucionar 
				este problema existe lo que llamamos máquina multinivel. Éste concepto es una 
				estructuración de capas bajo una serie de abstracciones, donde cada capa se apoya 
				en la que está debajo de ella, y facilita el trabajo con el sistema operativo. 
				Llegando así a una máquina multinivel: 
			<br/>
			<img src={Imagens.img11} className="Images" alt="Img11"/>
			<hr/><br/> 	
			</p> 
			<h2 className="Head">Máquinas multinivel contemporáneas</h2>
			<p className="Parrafo">
				Es un computador de 6 niveles que va desde el más bajo hasta el más alto. 
				Sin embargo se pueden identificar otros niveles, como el de dispositivo, 
				por debajo que el de lógica digital, que constituye a la construcción de las
				 compuertas lógicas. Igualmente puede haber uno más alto, que sería el de aplicaciones. 
			<br/>
			<img src={Imagens.img0} className="Images" alt="Img0"/>
			<hr/><br/>
			</p>
			<p className="Secondary">Nivel de lógica digital</p>
			<p className="Parrafo">
				Representa e Hardware de la máquina, tales como las compuertas lógicas, 
				las cuales pueden combinarse para crear una memoria de un bit, guardando 
				así un 0 o 1 en un momento determinado.
			<br/>
			<img src={Imagens.img1} className="Images" alt="Img1"/>
			<br/><br/>
			</p>

			<p className="Parrafo">
				Los detalles del funcionamiento de estas compuertas pertenecen al nivel de 
				dispositivo, inferior al nivel 0, donde se estudian también circuitos integrados, 
				combinacionales, buses, relojes, microprocesadores, etc.
			<br/>
			<img src={Imagens.img2} className="Images" alt="Img2"/>
			<hr/><br/> 	
			</p>

			<p className="Secondary">Nivel de microarquitectura</p> 
			<p className="Parrafo">
				En este nivel se conforman los registros, que son las colecciones de registros 
				que conforman una memoria local, también llamada banco de registros. 
				La Unidad Aritmético Lógica (UAL), encargada de las operaciones aritméticas 
				y lógicas. Y la Lógica de control, siendo esta la que coordina el trabajo entre 
				los anteriores, siendo esta irregular y muy específica para cada procesador.
			<br/>
			<img src={Imagens.img3} className="Images" alt="Img3"/>
			<hr/><br/>
			</p>

			<p className="Secondary">Nivel ISA</p> 
			<p className="Parrafo">
				El ISA es el nivel al que se dirige un compilador (aunque las optimizaciones son 
				sensibles a la microarquitectura, particularmente en términos de programación óptima). 
				La ISA es una definición simplificada pero suficiente de la interfaz de hardware.
				<br/><br/>
				La ISA describe el comportamiento abstracto del motor de cálculo subyacente y cuáles 
				son las operaciones fundamentales que pueden codificarse en las instrucciones de código 
				de máquina. Definirá qué tipo de registros tiene el procesador, cómo interactúan con 
				la memoria y qué operaciones aritméticas son posibles.
				<br/><br/>
				El ISA también puede influir en la facilidad con la que se optimiza la implementación 
				(por ejemplo, tuberías largas o problemas generales) y puede implementar funciones 
				destinadas a lenguajes específicos de alto nivel 
				(o simplificar la tarea de un compilador).
			<hr/><br/>
			</p>

			<p className="Secondary">Nivel de Sistema Operativo</p> 
			<p className="Parrafo">
				En este nivel se encuentran nuevas instrucciones que tiene que ver con la 
				organización de memoria, ejecución de los programas, etc. Pero también existen 
				instrucciones del nivel ISA. Las nuevas funciones son desempeñadas por un 
				intérprete que se ejecuta en el nivel de sistema operativo.
			<br/>
			<img src={Imagens.img4} className="Images" alt="Img4"/>
			<hr/><br/>
			</p>
			<p className="Secondary">Nivel de lenguaje Ensamblador</p> 
			<p className="Parrafo">
				Representa un método para escribir programas para los niveles 1, 2 y 3 de 
				forma más comprensible. Estos programas escritos en ensamblador son traducidos 
				a lenguaje 1, 2 o 3 y luego se interpretan por la máquina virtual o real apropiada 
				(dicho traductor también es llamado ensamblador).
			<br/>
			<img src={Imagens.img5} className="Images" alt="Img5"/>
			<hr/><br/>
			</p>

			<p className="Secondary">Nivel de lenguaje Orientado a problemas</p> 
			<p className="Parrafo">
				Consta de los lenguajes diseñados para programadores de aplicaciones, 
				con la finalidad de la resolución de problemas. Estos son conocidos como 
				lenguajes de alto nivel y existen cientos de ellos. Los programas escritos 
				son traducidos por los llamados compiladores. Aunque también suelen ser interpretados.
			<br/>
			<img src={Imagens.img6} className="Images" alt="Img6"/>
			<hr/><br/>
			</p>
			<h2 className="Head">Evolución de las máquinas multinivel</h2> 
			<p className="Parrafo">
				Con la evolución de las máquinas multiniveles nos referimos en sí a la evolución 
				del computador en general como tal, el cual a través del tiempo se ha vuelto a nivel 
				estructural mucho más simple pero a la vez con funciones mucho más complejas, ha 
				aumentado su velocidad y potencia de cómputo y su tamaño se ha reducido considerablemente.
			<br/><br/>
				Con los años de desarrollo y estudio se consiguieron avances tales como la invención 
				del sistema operativo, el lenguaje ensamblador, las instrucciones ISA, la invención 
				del circuito integrado y muchos más avances que han hecho una contribución importante 
				a lo que hoy comprendemos como una maquina multiniveles la cual se compone de una serie 
				de capas que no necesariamente deben conocerse unas con otras por lo cual permite un nivel 
				de abstracción mayor. Y la capacidad de poder trabajar en diferentes niveles de forma 
				independiente.
			<br/>
			<img src={Imagens.img12} className="Images" alt="Img12"/>
			<hr/><br/>
			</p>
		</main>
		);
}