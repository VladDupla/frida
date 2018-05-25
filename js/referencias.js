/**-------------------------------------------------------------------------------------------**/
/**                                 Media-Querie con JS Vainilla                              +*/  
/**-------------------------------------------------------------------------------------------**/

		function funcionMediaQuery(mq){
			if (mq.matches){ //----------------------------------> Sí el MediaQuery es alcanzado
				document.body.style.backgroundColor = "yellow";
		    } else {
		        document.body.style.backgroundColor = "pink";
		    }

		}

		var mq = window.matchMedia("(min-width: 769px)"); // Se contiene en en una variable la MediaQuerie
		sleep(mq); // llama a la funcion colocando la variable que contiene la medida del MediaQuerie
		mq.addListener(funcionMediaQuery); // Se agrega un addListener para 
										   // escuchar cuando cambia la resolucion!


/**-------------------------------------------------------------------------------------------**/
/**                                 Media-Querie con Jquery                                   +*/  
/**-------------------------------------------------------------------------------------------**/

		$(document).ready(() => {

			$(window).resize(function(){

				if ($(window).width() > 769) {  
				    document.body.style.backgroundColor = "yellow";
				}
				else{
						document.body.style.backgroundColor = "pink";
				}  

			});
		});

/**-------------------------------------------------------------------------------------------**/
/**                                         SlideShow                                         +*/  
/**-------------------------------------------------------------------------------------------**/


	var slideIndex = 1; //variable que indica el index en el slider.
		
	$(".slider-container").hide(); //Se inicia el slider (si es el caso) oculto.

	$(".single-proyecto .descripcion-post img").click(function(){ // Aqui se da click
		slider(slideIndex);										  // en el lugar que
		$(".slider-container").show();							  // tu elijas (img)
	});

	$(".slider-container .btn-cerrar").click(function(){ // Aqui es el Boton para
		$(".slider-container").hide();  				 // ocultar el slider
	});

	$(".flecha-slider-izq").click(flechaIzq); // Se llama la funcion que ejecuta el boton de flecha hacia la Izquieda

	$(".flecha-slider-der").click(flechaDer); // Se llama la funcion que ejecuta el boton de flecha hacia la derecha

	// //Gestos Touch-----------------------
	// $(".slider-container img").hammer().on("swipeleft", flechaDer);
	// $(".slider-container img").hammer().on("swiperight", flechaIzq);

	function slider(n) {
	    var i;
	    var x = $(".galeria")
	    if (n > x.length) {slideIndex = 1} 		// La Funcion calcula cuantos elementos hay con la clase
	    if (n < 1) {slideIndex = x.length} ;	// "galeria", para agruparlas en un array y despues
	    for (i = 0; i < x.length; i++) {		// llamar los contenedores por medio del Index
	        x[i].style.display = "none"; 
	    }
	    x[slideIndex-1].style.display = "block"; 
	}

	function flechaIzq() {			// La funcion resta 1 al index
		slider(slideIndex += -1);	// para que se convoque otra posicion 
	}								// en el array de las imagenes del slider

	function flechaDer() {			// La funcion suma 1 al index
		slider(slideIndex += 1);	// para que se convoque otra posicion 
	}								// en el array de las imagenes del slider

/**-------------------------------------------------------------------------------------------**/
/**						   	      Varios SlideShows en la misma pagina                        +*/  
/**-------------------------------------------------------------------------------------------**/

	var slideIndex = [1,1];
	var slideId = ["mySlides1", "mySlides2"] // Al ser un Array podemos indicar en la misma funcion
	slider(1, 0);							 // Sobre que slider se activaran las caracteristicas.
	slider(1, 1);

	function flechas(indexImgSlide, indexArray) {
	  slider(slideIndex[indexArray] += indexImgSlide, indexArray);
	}

	function slider(indexImgSlide, indexArray) {
	  var i;
	  var x = document.getElementsByClassName(slideId[indexArray]);
	  if (indexImgSlide > x.length) {slideIndex[indexArray] = 1}    
	  if (indexImgSlide < 1) {slideIndex[indexArray] = x.length}
	  for (i = 0; i < x.length; i++) {
	     x[i].style.display = "none";  
	  }
	  x[slideIndex[indexArray]-1].style.display = "block";  
	}


/**-------------------------------------------------------------------------------------------**/
/**						   	             Sticky-Elements                                      +*/  
/**-------------------------------------------------------------------------------------------**/


	// LA magia de esto es gracias al Plugin de HC-Sticky	
	// Lo puedes encontrar en:	
	// https://github.com/somewebmedia/hc-sticky	
	// Donde encontraras toda la guia en su idioma original.

	// Nota: este plugin se tiene que descargar y alojarlo en
    // una carpeta local o del mismo host para que se pueda
    // utilizar sin ningun problema, no cuenda con CDN.

	// Llamamos al plugin por medio del tag de <script>	
	// en html o copiamos y pegamos todo el codigo del plugin	
	// hasta arriba del js en el que lo estes invocando.

	
	$(".cajita").hcSticky({
		stickTo: ".container-de-la-cajita", // El contenedor donde se movera el elemento sticky.
		top: 50, //Distancia en px desde el top del window hasta el elemento que se hizo sticky una vez que esta agarrado.
		bottom: 50, //Distancia en px desde el bot del window hasta el elemento que se hizo sticky una vez que esta agarrado.
	    innerTop: 180, //Distancia en px desde el top del window hasta el elemento que va a ser agarrado!
	    bottomEnd: 180, //Distancia en px desde el bottom del elemento hasta el fin del contenedor en el que esta sujeto!
	});





















