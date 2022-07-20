import './PageSecction.css';
import Imagens from '../Img/Images';

export default function UnidadII(){
	return(
		<main className="All">
			<h1>Unidad II<br/><hr/></h1>
			<h2 className= "Head">Contenido:</h2>
			<section className="List">
				<li>Sistemas numéricos posicionales.</li>
				<li>Sistema numérico Decimal.</li>
				<li>Sistema numérico Binario.</li>
				<li>Sistema Numérico Octal.</li>
				<li>Sistema Numérico Hexadecimal.</li>
				<li>Conversiones entre Bases.</li>
				<li>Operaciones en binario.</li>
				<li>Operaciones en Octal.</li>
				<li>Operaciones en Hexadecimal.</li>
				<li>Representación de números Negativos en el sistema Binario</li>
				<li>Código binario.</li>
				<hr/><br/>
			</section>	
			<h2 className="Head">Sistemas de números posicionales</h2>
			<p className="Parrafo">
				Son aquellos donde las cantidades están formadas por una serie de dígitos, 
				donde cada uno de ellos tiene una posición asociada, la cantidad se forma mediante 
				la sum ponderada de cada dígito por la base del sistema elevada a la posición del dígito.
			<br/><br/>
				Ejemplos son el sistema numérico decimal (base 10), sistema numérico binario (base 2) 
				sistema numérico octal (base 8), sistema numérico Hexadecimal (base 16), entre otros.
			<br/><br/>	
				El sistema de numeración decimal, es un sistema de numeración posicional en el que las 
				cantidades se representan utilizando como base aritmética el número diez. El conjunto 
				de símbolos utilizado se compone de diez cifras: cero, uno, dos, tres, cuatro, cinco, 
				seis, siete, ocho y nueve 
			<br/>
			<img src={Imagens.img13} className="Images" alt="Img13"/>
			<hr/><br/>
			</p>
			<h2 className="Head">Sistema numérico Binario</h2>
			<p className="Parrafo">
				El sistema binario, también llamado sistema diádico en ciencias de la computación, 
				es un sistema de numeración en el que los números son representados utilizando 
				únicamente dos cifras: 0 y 1.
			<br/>
			<img src={Imagens.img14} className="Images" alt="Img14"/>
			<hr/><br/>
			</p>
			<h2 className="Head">Sistema numérico Octal</h2>
			<p className="Parrafo">
				El sistema octal es el sistema de numeración posicional cuya base es 8, utilizando 
				los dígitos indio arábigos: 0, 1, 2, 3, 4, 5, 6, 7. En informática a veces se utiliza 
				la numeración octal en vez de la hexadecimal. Tiene la ventaja de que no requiere 
				utilizar otros símbolos diferentes de los dígitos.
			<br/>
			<img src={Imagens.img15} className="Images" alt="Img15"/>
			<hr/><br/>
			</p>
			<h2 className="Head">Sistema Numérico Hexadecimal</h2>
			<p className="Parrafo">
				El sistema hexadecimal reduce un número de ocho bits a sólo dos dígitos hexadecimales. 
				Esto reduce la confusión que se puede generar al leer largas cadenas de números binarios 
				y la cantidad de espacio que exige la escritura de números binarios. 
			<br/><br/>
				Los números hexadecimales son números representados en base 16 , que significa los 
				dígitos 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F en lugar de solamente 0-9.
			<br/>
			<img src={Imagens.img16} className="Images" alt="Img16"/>
			<hr/><br/>
			</p>
			<h2 className="Head">Operaciones entre bases</h2>
			<p className="Secondary">Conversión de decimal a binario</p>
			<p className="Parrafo">
				Para convertir a binario el número decimal 12, comenzamos dividiendo 12 entre 2.
				Luego cada cociente resultante se divide por 2 hasta que se obtiene un cociente 
				cuya parte entera es 0. Lo que indica que en la posición 2-1 hay un 1, en la 
				posición 2-2 un 0 y en la posición 2-3 un 1. 
			<br/>
			<img src={Imagens.img17} className="Images" alt="Img17"/>
			<hr/><br/>
			</p>
			<p className="Secondary">Conversión de binario a decimal</p> 
			<p className="Parrafo">
				Basta con numerar los dígitos de derecha a izquierda comenzando desde cero, 
				a cada número se le asigna la correspondiente potencia base 2 y al final se 
				suman las potencias. Por ejemplo el número binario 10101100 a decimal sería:  
				(0 x 20 = 0. 0 x 21 = 0).
			<br/>
			<img src={Imagens.img18} className="Images" alt="Img18"/>
			<hr/><br/>
			</p>
			<p className="Secondary">Conversión de decimal a octal</p> 
			<p className="Parrafo">
				Basta con dividir continuamente entre 0 y los residuos se tomarán en orden 
				ascendente para dar con el resultado.
			<br/>
			<img src={Imagens.img19} className="Images" alt="Img19"/>
			<hr/><br/>
			</p>
			<p className="Secondary">Conversión de octal a decimal</p> 
			<p className="Parrafo">
				De derecha a izquierda: multiplicamos la primera cifra por 1 (1 es 80); 
				la segunda, por 8 (8 es 81); la tercera, por 82; la cuarta, por 83. Y así
				 hasta que hayamos multiplicado todas las cifras.
			<br/><br/>
				Luego sumamos cada uno de los valores obtenidos.
			<br/>
			<img src={Imagens.img20} className="Images" alt="Img20"/>
			<hr/><br/>
			</p>
			<p className="Secondary">Conversión de octal a binario</p> 
			<p className="Parrafo">
				Se nos da un numero: 1723.
				<br/><br/>
				Lo separamos en sus digitos: 1 7 2 3.
				<br/><br/>
				les asignamos valores binarios a cada dígito (los valores estan más 
				arriba) 1 = 001 7 = 111 2 = 010 3 = 011.
				<br/><br/>
				por ultimo los escribimos es ese orden: 001111010011.
			<br/>
			<img src={Imagens.img21} className="Images" alt="Img21"/>
			<hr/><br/>
			</p>
			<p className="Secondary">Conversión de binario a octal</p>
			<p className="Parrafo">
				Para convertirlo comenzaremos agarrando los tres primeros dígitos del 
				número binario «101» de derecha a izquierda, luego los tres siguientes 
				«100», el siguiente «101», siguiente «100» y por último, como nos faltan 
				dígitos le agregaremos ceros «001»
			<br/>
			<img src={Imagens.img22} className="Images" alt="Img22"/>
			<hr/><br/>
			</p>
			<p className="Secondary">Conversión de decimal a hexadecimal</p>
			<p className="Parrafo">
				Dividimos el número entre 16, Si el cociente es mayor o igual que 
				16, lo dividimos entre 16. Continuamos así hasta obtener un cociente menor que 16.
			<br/>
			<img src={Imagens.img23} className="Images" alt="Img23"/>
			<hr/><br/>
			</p>
			<p className="Secondary">Conversión de hexadecimal a decimal</p>
			<p className="Parrafo">
				Se lleva cada número o letra a su equivalente en decimal,
				se eleva a las potencias respectivas, de derecha a izquierda,
				se calcula y se suman los resultados.
			<br/>
			<img src={Imagens.img24} className="Images" alt="Img24"/>
			<hr/><br/>
			</p>
			<p className="Secondary">Conversión de hexadecimal a binario</p>
			<p className="Parrafo">
				Primero necesitamos saber su equivalente en decimal, luego se juntan.
			<br/>
			<img src={Imagens.img25} className="Images" alt="Img25"/>
			<hr/><br/>
			</p>	
			<p className="Secondary">Conversión de binario a hexadecimal</p>
			<p className="Parrafo">
				Identificar el número a convertir, dividir en grupos de cuatro bits de 
				derecha a izquierda, tomar cada grupo de cuatro bits y obtener el 
				equivalente en sistema hexadecimal, escribir el nuevo número en el 
				mismo orden que se realizó la separación.
			<br/>
			<img src={Imagens.img26} className="Images" alt="Img26"/>
			<hr/><br/>
			</p>
			<p className="Secondary">Conversión de octal a hexadecimal</p>
			<p className="Parrafo">
				El procedimiento más rápido es convertir los números en octal 
				en su equivalente en binario y tomar los números en binario y 
				llevarlos a su equivalente en hexadecimal.
			<br/>
			<img src={Imagens.img27} className="Images" alt="Img27"/>
			<hr/><br/>
			</p>
			<p className="Secondary">Conversión de hexadecimal  a octal</p>
			<p className="Parrafo">
				Se llevan los números en Hexadecimal a su equivalente en binario 
				luego se agrupan de derecha a izquierda en grupos de tres y
				se llevan cada grupo de tres a su equivalente en octal.
			<br/>
			<img src={Imagens.img28} className="Images" alt="Img28"/>
			<hr/><br/>
			</p>
			<h2 className="Head">Operaciones en Binario</h2>
			<p className="Parrafo">
				Para llevar a cabo la suma binaria, hay que recordar las propiedades:<br/><br/>
				0 + 0 = 0<br/>
				0 + 1 = 1<br/>
				1 + 0 = 1<br/>
				1 + 1 = 0 y llevo 1.<br/>
			<img src={Imagens.img29} className="Images" alt="Img29"/>
			<br/><br/>
				En el caso de la resta binaria, hay que recordar las propiedades:<br/><br/>
				0 - 0 = 0<br/> 
				0 - 1 = 1 y pido 1.<br/>
				1 - 0 = 1<br/>
				1 - 1 = 0<br/> 
			<img src={Imagens.img30} className="Images" alt="Img30"/>
			<br/><br/>
				Igualmente, denotamos la suma y resta Octal, para la suma de números 
				en octal sumamos naturalmente, en dado caso de que una sumatoria de un 
				número mayor a 8, necesitamos representar ese número en octal, y colocar 
				dicha representación en la suma para proseguir.
			<br/>
			<img src={Imagens.img31} className="Images" alt="Img31"/>
			<br/><br/>
				Para la resta, se resta normalmente, y en caso de que una resta no se pueda, 
				por ejemplo, 7 - 9, se tiene que pedir prestado al número de al lado, restándole 
				1 a ese número al cual se le pidió prestado y usando ese 1 para conformar el número 
				en octal.
			<br/>
			<img src={Imagens.img32} className="Images" alt="Img32"/>
				En el caso de la suma hexadecimal, se suma normalmente y si el número resultado 
				es mayor a 9, se coloca respectivamente por su equivalencia en hexadecimal: 
				a, b, c, d, e, f.<br/><br/>
				En caso de que el número resultado igualmente sea mayor al 15 en hexadecimal, 
				se debe representar ese valor.
			<br/>
			<img src={Imagens.img33} className="Images" alt="Img33"/>
				Para el caso de la resta, igualmente si el número resultado de la resta es 
				negativo, por ejemplo 7 – C (7 - 12), se pide prestado al número de al lado y 
				a este se le resta uno. Y ese uno que se pidió prestado se usa para completar 
				el valor faltante.
			<br/>
			<img src={Imagens.img34} className="Images" alt="Img34"/>
			<br/><hr/><br/>
			</p>
			<h2 className="Head">Representación de los números negativos en el sistema binario</h2>	
			<p className="Secondary">¿Qué es la técnica de signo magnitud?</p>
			<p className="Parrafo">
				El formato Signo/Magnitud está fundamentado en el sistema posicional binario 
				que representa el signo del entero separado de su magnitud. Se separa un bit para 
				representar el signo; la costumbre es asignar el valor de cero para representar 
				positivo y uno para representar el signo negativo.	
			<br/>
			<img src={Imagens.img35} className="Images" alt="Img35"/>
			<br/>
				Y por otro lado, la técnica de A1 o C1, o complemento A1 de un número binario es
				 encontrado simplemente cambiando todos los 1s por 0s y todos los 0s por 1s. 
				 Como alternativa para representar números negativos puede usarse un sistema 
				 conocido como complemento A1.
			<br/>
			<img src={Imagens.img36} className="Images" alt="Img36"/>
			<br/>
				Ambas técnicas tienden a un error al añadir siempre un cero, y por eso existe 
				una tercera técnica, que es el complemento A2 o C2, que es igualmente una forma 
				de almacenar números enteros, la cual se utiliza para representar números negativos 
				en sistema binario.
			<br/>
			<img src={Imagens.img37} className="Images" alt="Img37"/>
			<br/>
				Encontramos la conversión de Decimal a Complemento A2.
			<br/>
			<img src={Imagens.img38} className="Images" alt="Img38"/>
			<br/>
				La conversión de A2 a Decimal con signo.
			<br/>
			<img src={Imagens.img39} className="Images" alt="Img39"/>
			<br/>
				La suma en A2 y C2.
			<br/>
			<img src={Imagens.img40} className="Images" alt="Img40"/>
			<br/>
				E igualmente, la resta en C2.
			<br/>
			<img src={Imagens.img41} className="Images" alt="Img41"/>
			<br/>
			<br/><hr/><br/>		
			</p>
			<h2 className="Head">Códigos binarios con peso o Ponderados</h2>
			<p className="Secondary">Código decimal Codificado en Binario</p>
			<p className="Parrafo">
				El código BCD es un código ponderado; a cada bit le corresponde un valor 
				(peso) de acuerdo con la posición que ocupa, igual que el binario natural. 
				Los pesos son: 8-4-2-1. La representación del 1 al 9 corresponde con el binario 
				natural, pero a partir del número decimal 10, se precisan grupos de 4 bits por dígito.
			<br/>
			<img src={Imagens.img42} className="Images" alt="Img42"/>
			<br/><br/>	 
			</p>
			<p className="Secondary">Código Aiken (2-4-2-1)</p>
			<p className="Parrafo">
				También es un código ponderado, aunque ahora los pesos de las cifras según
				su posición serán: 2, 4, 2 y 1. Ejemplo 35 = 0011 1011. Es decir 3 
				(0011, si miramos el peso de los dígitos será = 0 + 0 + 2 +1 = 3) y 5 
				(1011, si miramos el peso = 2 + 0 +2 +1).
			<br/>
			<img src={Imagens.img43} className="Images" alt="Img43"/>
			<br/><br/>
			</p>
			<p className="Secondary">Código binario Exceso-3</p>
			<p className="Parrafo">
				3-exceso (normalmente abreviado como XS-3 o X3) o código Stibitz
				(por George Stibitz) es un código decimal codificado en binario
				auto complementario y un sistema de numeración. Es una representación parcial.
			<br/>
			<img src={Imagens.img44} className="Images" alt="Img44"/>
			<br/><br/>
			</p>
			<p className="Secondary">Código Gray o de cambio mínimo</p>
			<p className="Parrafo">
				Su principal característica es que 2 números sucesivos, cuales quieras, 
				solo varían en 1 bit. Por tanto, para un código Gray de n bits se toma 
				el correspondiente Gray de n-1 bits, se le aplica simetría y se rellena 
				su parte superior con 0s y la parte inferior de 1s.
			<br/>
			<img src={Imagens.img45} className="Images" alt="Img45"/>
			<br/><hr/><br/>
			</p>
			<h2 className="Head">Álgebra de Boole</h2>
			<p className="Parrafo">
				Es una estructura algebraica que esquematiza las operaciones 
				lógicas en forma de ecuaciones algebraicas.
			<br/>
			<img src={Imagens.img46} className="Images" alt="Img46"/>
			<br/><br/>
				Se denotan las identidades básicas del Álgebra de Boole:
			<br/>
			<img src={Imagens.img47} className="Images" alt="Img47"/>
			<br/><br/>
				Y se puede utilizar, por ejemplo, el teorema de DeMorgan 
				para demostrar la validez de las identidades: 
			<br/>
			<img src={Imagens.img48} className="Images" alt="Img48"/>
			<br/><br/>
			<img src={Imagens.img49} className="Images" alt="Img49"/>
			<br/><hr/><br/>
			</p>
			<h2 className="Head">Minitérminos y Maxitérminos</h2>
			<p className="Parrafo">
				Un mintiérmino es una expresión algebraica booleana de n variables 
				booleanas que solamente se evalúa como verdadera para una única combinación 
				de esas variables, es la expresión opuesta a la de los maxitérminos.
			<br/><br/>
				Por su lado los maxitérminos consisten únicamente en una expresión algebraica 
				booleana de disyunción lógica de una serie de variables booleanas, cada una de 
				las cuales puede estar negada o no. Como es una disyunción lógica, solamente se 
				evalúa como falsa para una única combinación de esas variables
			<br/><br/>
			<img src={Imagens.img50} className="Images" alt="Img50"/>
			<br/><br/>
			<img src={Imagens.img51} className="Images" alt="Img51"/>
			<br/><hr/><br/>
			</p>
			<h2 className="Head">Mapas de Karnaugh</h2>
			<p className="Parrafo">
				Un mapa de Karnaugh es un diagrama utilizado para la simplificación 
				de funciones algebraicas Booleanas. El mapa de Karnaugh fue inventado 
				en 1953 por Maurice Karnaugh, un físico y matemático de los laboratorios Bell.
			<br/><br/>
				Los mapas de Karnaugh reducen la necesidad de hacer cálculos extensos para la 
				simplificación de expresiones booleanas, aprovechando la capacidad del cerebro 
				humano para el reconocimiento de patrones y otras formas de expresión analítica, 
				permitiendo así identificar y eliminar condiciones muy inmensas.
			<br/><br/>
			<img src={Imagens.img52} className="Images" alt="Img52"/>
			<br/><hr/><br/>
			</p>
		</main>
		);
}