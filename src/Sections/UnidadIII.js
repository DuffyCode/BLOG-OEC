import './PageSecction.css';
import Imagens from '../Img/Images';

export default function UnidadIII(){
	return(
		<main className="All">
			<h1>Unidad III<br/><hr/></h1>
			<h2 className= "Head">Contenido:</h2>
			<section className="List">
				<li>Definición de Organización y Arquitectura del computador.
					<li className="List2">Unidad Central de procesamiento (UCP).</li>
					<li className="List2">Unidad aritmética lógica (UAL).</li>
					<li className="List2">Unidad de control (UC).</li>
				</li>
				<li>Memoria principal.</li>
				<li>Unidades E/S.</li>
				<li>Buses del Sistema.
					<li className="List2">Bus de Datos.</li>
					<li className="List2">Bus de Direcciones.</li>
					<li className="List2">Bus de control.</li>
				</li>
				<li>Definición de instrucción.</li>
				<li>Partes de una instrucción.</li>
				<li>Formatos de instrucción.</li>
				<li>Modos de Direccionamiento.</li>
				<hr/><br/>
			</section>
			<h2 className= "Head">Organización y Arquitectura del computador</h2>
			<p className="Parrafo">
				La organización de computadoras se refiere a las unidades funcionales 
				de una computadora y sus interconexiones, que materializan especificaciones 
				arquitectónicas, mientras que la arquitectura se refiere a el diseño, 
				el concepto, la estructura operacional en sí, fundamental de un sistema 
				de computadoras.1Es decir, es un modelo y una descripción funcional de 
				los requerimientos y las implementaciones de diseño para varias partes 
				de una computadora, con especial interés en la forma en que la unidad 
				central de proceso (CPU) trabaja internamente y accede a las direcciones 
				de memoria.
			<br/><br/><hr/><br/>
			</p>	
			<h3 className="Secondary">Unidades funcionales o lógicas del computador</h3>
			<h4 className="Secondary"><li>Memoria principal (MP)</li></h4>
			<p className="Parrafo">
				Memoria primaria, memoria principal, memoria central o memoria 
				interna, es la memoria de la computadora donde se almacenan temporalmente
			 	tanto los datos como los programas que la unidad central de procesamiento está 
			 	procesando o va a procesar en un determinado momento. Es la parte de la computadora 
			 	que almacena software del sistema operativo, aplicaciones de software y otra 
			 	información para la unidad de procesamiento central (CPU) y así tener acceso 
			 	rápido y directo cuando sea necesario para realizar las tareas. Se llama 
			 	"acceso aleatorio" porque la CPU puede acceder directamente a una sección 
			 	de la memoria principal, y no debe emprender el proceso en un orden secuencial.
			<br/>
			</p>
			<h4 className="Secondary"><li>Unidad centra de procesamiento (UCP)</li></h4>
			<p className="Parrafo">
				Es el auténtico cerebro, el que controla y coordina el funcionamiento del PC. 
				Esta unidad genera el conjunto de órdenes necesarias, para que se realice 
				cualquier tarea mediante la interpretación de las instrucciones que integran 
				el programa de esta unidad.
			<br/>
			</p>
			<h4 className="Secondary"><li>Unidades de entrada y salida</li></h4>
			<p className="Parrafo">
				Los dispositivos de entrada y salida o unidades de entrada/salida 
				son los equipos físicos conectados a la computadora. Estos dispositivos 
				permiten comunicar información entre el usuario y la computadora o 
				manejar un soporte de información.
			<br/><br/><hr/><br/>
			</p>
			<h3 className="Secondary">Unidad de control</h3>
			<p className="Parrafo">
				Es uno de los tres bloques funcionales principales en los 
				que se divide una unidad central de procesamiento. En ella 
				intervienen 3 señales, que son los indicadores de control, 
				la instrucción y el Reloj, estas señales llegan al intérprete 
				y son decodificadas para luego ser enviadas como órdenes por 
				separado a los elementos del computador.
			<br/><br/>
				La unidad de control a su vez se sub divide en 2 elementos; 
				el reloj y el intérprete, y en 3 registros: Registro de estado, 
				Registro contador de programas y el Registro de instrucción.
			</p>
			<h4 className="Secondary"><li>Reloj</li></h4>
			<p className="Parrafo">
				Encargado de proporcionar una sucesión de impulsos eléctricos 
				a intervalos constantes, que marcan los instantes en que han de 
				comenzar los distintos pasos de que consta cada instrucción.
			<br/>
			</p>
			<h4 className="Secondary"><li>Intérprete</li></h4>
			<p className="Parrafo">
				Es el circuito encargado de decodificar la instrucción del registro 
				de instrucciones en el momento.
			<br/>
			</p>
			<h4 className="Secondary"><li>Registro de estado</li></h4>
			<p className="Parrafo">
				Encargado de guardar los indicadores de estado. 
				Información que constituyen un registro histórico de las operaciones.
			<br/>
			</p>
			<h4 className="Secondary"><li>Registro contador de programas</li></h4>
			<p className="Parrafo">
				Almacena la dirección de la siguiente instrucción que se debe ejecutar.
			<br/>
			</p>
			<h4 className="Secondary"><li>Registro De Instrucción</li></h4>
			<p className="Parrafo">
				Guarda la instrucción que está siendo decodificada por el intérprete.
			<br/>
			<img src={Imagens.img53} className="Images" alt="Img53"/>
			<br/>
				En este caso, se llama unidad de tres registros, porque hace uso de 
				los registros REN 1 y REN 2, el registro de estado y el registro acumulador. 
			<br/>
			<img src={Imagens.img54} className="Images" alt="Img54"/>
			<br/>
				En cambio, esta unidad es de dos registros porque no hace uso del registro 
				de acumulador si no que la información salida del circuito operacional va 
				directamente al bis de datos.
			<br/><br/><hr/><br/>
			</p>
			<h4 className="Secondary">Registros de estado</h4>
			<p className="Parrafo">
				Registros de memoria en los que se deja constancia 
				de algunas condiciones que se dieron en la última operación realizada y 
				que podrán ser tenidas en cuenta en operaciones posteriores. Por ejemplo, 
				en el caso de hacer una resta, en el registro de estado queda constancia 
				de si el resultado fue cero, positivo o negativo, o si se sobrepasó la 
				capacidad de representación.
			<br/><br/>
				Cada modelo de procesador tiene sus propios registros de estados, pero 
				los más comunes son:
			<br/><br/>
				<li className="List2">Z = Zero flag: El resultado es cero.</li>
				<br/><br/>
				<li className="List2">S = Sign flag: El resultado es negativo.</li>
				<br/><br/>
				<li className="List2">V = Overflow flag: El resultado supera el número de bits 
				que puede manejar la ALU.</li>
				<br/><br/>
				<li className="List2">P = Parity flag: Paridad del número de 1 en los datos.</li>
				<br/><br/>
				<li className="List2">I = Interrupt flag: Se ha producido una interrupción.</li>
				<br/><br/>
				<li className="List2">C = Carry flag: Acarreo de la operación realizada.</li>
			<br/><hr/><br/>
			</p>
			<h2 className="Head">Estructura de la memoria principal</h2>
			<p className="Parrafo">
			<img src={Imagens.img55} className="Images" alt="Img55"/>
			<br/>
				Para la escritura en la memoria principal se llevan a cabo los siguientes pasos:
				<br/><br/>
				<li >La UC envía una señal indicando que se realizará 
					un acceso a escritura.</li>
				<br/>
				<li >La UC envía una señal con el DATO o INSTRUCCIÓN 
					que se escribirá en MP</li>
				<br/>	
				<li >La UC envía una señal con la dirección de la “palabra” 
					donde se escribirá el dato o la instrucción.</li>
				<br/>
				<li >La UC envía una señal para que se inicie el proceso.</li>
				<br/>
				<li >La UC espera que el proceso finalice.</li>
				<br/>
			</p>
			<p className="Parrafo"><strong>Para la lectura en la memoria principal</strong>
			<br/><br/>
				Para la escritura en la memoria principal se llevan a cabo los siguientes pasos:
				<br/><br/>
				<li >La UC envía una señal indicando que se realizará un 
					acceso a lectura.</li>
				<br/>
				<li >La UC envía una señal con la dirección de la palabra donde se 
					leerá el dato o la instrucción. </li>
				<br/>
				<li >La UC envía una señal para que se inicie el proceso.</li>
				<br/>
				<li >La UC espera que el proceso finalice.</li>
				<br/>
			<br/><hr/><br/>
			</p>
			<h2 className="Head">Unidades de entrada y salida</h2>
			<p className="Parrafo">
				Los dispositivos o unidades de entrada/salida son los equipos
			 	físicos conectados a la computadora. Estos dispositivos permiten 
			 	comunicar información entre el usuario y la computadora o manejar 
			 	un soporte de información.
			 <br/>
			 <img src={Imagens.img56} className="Images" alt="Img56"/>
			 <br/><hr/><br/>
			 </p>
			 <h2 className="Secondary">Buses del sistema</h2>
			 <p className="Parrafo">
			 	Son los “caminos” por los cuales los datos viajan, 
			 	por ejemplo del microprocesador al disco rígido, o de la 
			 	memoria al disco. Los objetivos de un bus de sistema son cuatro: 
			 	Conectar las placas con el micro, la RAM, etc. para permitir el 
			 	intercambio de datos y según la información que viajan por ellos 
			 	se clasifican en:
			 	<br/><br/>
			 	<li>
			 		<strong>Buses de datos:</strong>
			 		<p className="Parrafo">
			 		Por el viajan los datos y las instrucciones. 
			 		Es bidireccional.</p>
			 	</li>
			 	<hr/>
			 	<li>
			 		<strong>Bus de direcciones:</strong>
			 		<p className="Parrafo">
			 		Lo que viajan a través de ellos son las direcciones. 
			 		Es únicamente unidireccional.</p>
			 	</li>
			 	<hr/>
			 	<li>
			 		<strong>Bus de control:</strong>
			 		<p className="Parrafo">
			 		Viajan las señales para coordinar el trabajo de las unidades funcionales. 
			 		Es bidireccional.</p>
			 	</li>
			 	<hr/><br/>
			 </p>
			 <h2 className="Head">Definición de instrucción</h2>
			 <p className="Parrafo">
			 	Una instrucción es un conjunto de datos insertados 
			 	en una secuencia estructurada o específica que el procesador interpreta 
			 	y ejecuta. A bajo nivel esta instrucción es una secuencia de ceros y unos.
			 <br/>
			 <img src={Imagens.img57} className="Images" alt="Img57"/>
			 <br/><hr/><br/>
			 </p>
			 <h2 className="Head">Formatos de una instrucción</h2>
			 <p className="Parrafo">
			 	<li>Clasificación general:
			 		Formato de una palabra de MP.
			 		<br/>
			 		<img src={Imagens.img58} className="Images" alt="Img58"/>
			 		<br/>
			 		Formato de “N” palabras de MP.
			 		<br/>
			 		<img src={Imagens.img59} className="Images" alt="Img59"/>
				</li>
				<li>Según el número de direcciones:
			 		<br/>
			 		<img src={Imagens.img60} className="Images" alt="Img60"/>
			 		<br/>
			 		<img src={Imagens.img61} className="Images" alt="Img61"/>
				</li>
			 <br/>
			 <br/><hr/><br/>
			 </p>
			 <h2 className="Head">Modos de direccionamiento</h2>
			 <p className="Parrafo">
			 	Son las diferentes maneras de especificar un operando dentro de una 
			 	instrucción en lenguaje ensamblador.
			 <br/><br/>
				Los tipos de modos de direccionamiento son:
			 <br/><br/>
			 <li><strong>Implícito:</strong><br/><br/>
			 		En este modo de direccionamiento no es necesario poner 
			 		ninguna dirección de forma explícita, ya que en el propio 
			 		código de operación se conoce la dirección de el/los 
			 		operando/s al (a los) que se desea acceder o con el/los 
			 		que se quiere operar.
			 		<br/>
			 		<img src={Imagens.img62} className="Images" alt="Img62"/>
			 		<br/>
				</li>
				<li><strong>Inmediato:</strong><br/><br/>
					En la instrucción está incluido directamente el operando. 
					En este modo el operando es especificado en la instrucción misma. 
					En otras palabras, una instrucción de modo inmediato tiene un campo 
					de operando en vez de un campo de dirección. El campo del operando 
					contiene el operando actual que se debe utilizar en conjunto con 
					la operación especificada en la instrucción. Las instrucciones 
					de modo inmediato son útiles para inicializar los registros
					en un valor constante.
					<br/><br/>
					Cuando el campo de dirección especifica un registro del procesador, 
					la instrucción se dice que está en el modo de registro.
					<br/><br/>
					Su valor es fijo, por lo que se suele utilizar en operaciones aritméticas 
					o para definir constantes y variables. Como ventaja, no se requiere 
					acceso adicional a memoria para obtener el dato, pero el tamaño 
					del operando está limitado por el tamaño del campo de direccionamiento.
					<br/><br/>
					Las desventajas principales son que el valor del dato es constante 
					y el rango de valores que se pueden representar está limitado 
					por el tamaño de este operando.
			 		<br/><br/>
			 		<img src={Imagens.img63} className="Images" alt="Img63"/>
				</li>
				<li><strong>Directo o absoluto:</strong><br/><br/>
			 		El campo de operando en la instrucción contiene la dirección en 
			 		memoria donde se encuentra el operando.
			 		<br/><br/>
					En este modo la dirección efectiva es igual a la parte de dirección 
					de la instrucción. El operando reside en la memoria y su dirección 
					es dada directamente por el campo de dirección de la instrucción. 
					En una instrucción de tipo ramificación el campo de dirección 
					especifica la dirección de la rama actual.
					<br/><br/>
					Si hace referencia a un registro de la máquina, el dato estará 
					almacenado en este registro y hablaremos de direccionamiento 
					directo a registro; si hace referencia a una posición de memoria, 
					el dato estará almacenado en esta dirección de memoria 
					(dirección efectiva) y hablaremos de direccionamiento 
					directo a memoria. Estos modos de direccionamiento 
					tienen una forma muy simple y no hay que hacer cálculos 
					para obtener la dirección efectiva donde está el dato. 
					El tamaño del operando, en el caso del direccionamiento 
					directo a registro, dependerá del número de registros que 
					tenga la máquina; en el direccionamiento directo a memoria, 
					dependerá del tamaño de la memoria.
			 		<br/>
			 		<img src={Imagens.img64} className="Images" alt="Img64"/>
			 		<br/>
				</li>
				<li><strong>Indirecto:</strong><br/><br/>
			 		El campo de operando contiene una dirección de memoria, 
			 		en la que se encuentra la dirección efectiva del operando.
			 		<br/><br/>
					Si hace referencia a un registro de la máquina, la dirección de 
					memoria (dirección efectiva) que contiene el dato estará en este 
					registro y hablaremos de direccionamiento indirecto a registro; 
					si hace referencia a una posición de memoria, la dirección de 
					memoria (dirección efectiva) que contiene el dato estará almacenada 
					en esta posición de memoria y hablaremos de direccionamiento 
					indirecto a memoria.
					<br/><br/>
					La desventaja principal de este modo de direccionamiento es que 
					necesita un acceso más a memoria que el directo. Es decir, 
					un acceso a memoria para el direccionamiento indirecto a registro 
					y dos accesos a memoria para el direccionamiento indirecto a 
					memoria; por este motivo este segundo modo de direccionamiento 
					no se implementa en la mayoría de las máquinas.
			 		<br/>
			 		<img src={Imagens.img65} className="Images" alt="Img65"/>
			 		<br/>
				</li>
				<li><strong>Indexado:</strong><br/><br/>
					Se une el valor que contiene uno de los operando con lo que 
					contiene un registro índice para formar la dirección efectiva, 
					es decir, donde se encuentra el valor como tal.
			 		<br/>
			 		<img src={Imagens.img66} className="Images" alt="Img66"/>
			 		<br/>
				</li>
			 <br/>
			 <br/><hr/><br/>
			 </p>
		</main>
		);	
}