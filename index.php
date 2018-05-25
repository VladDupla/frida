
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<!--                                    Header                                -->
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->

	<?php include "header.php" ?>

<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<!--                                    Body                                  -->
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->

<body>

<div class="wrapper">

<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<!--                                Overlay/Menu                              -->
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->

	<?php include "menu.php" ?>

<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<!--                                     PHP                                  -->
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->

	<?php 
	if (isset($_GET['p'])) {
	$pagina = 'pages/'. $_GET['p'] . '.php'; 
	include $pagina;	
	?>	
	<?php
	} else {
	?>

<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<!--                                   Contenido                              -->
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->


	<div class="container home">

		<!-- 1ra fila -->

		<div class="row proyectos">
			
			<div class="titulo">
				<h2>Proyectos</h2>
			</div>

			<div class="permanentes col-12 col-m-3">

				<div class="imagenes-permanentes">

					<div class="img-post 01 b-lazy" style="background-image: url(./upload/up-1.jpg);"></div>

					<div class="img-post 02 b-lazy" style="background-image: url(./upload/up-2.jpg);"></div>

					<div class="img-post 03 b-lazy" style="background-image: url(./upload/up-3.jpg);"></div>

					<div class="img-post 04 b-lazy" style="background-image: url(./upload/up-4.jpg);"></div>

					<div class="img-post 05 b-lazy" style="background-image: url(./upload/up-5.jpg);"></div>

					<div class="img-post 06 b-lazy" style="background-image: url(./upload/up-6.jpg);"></div>

					<div class="img-post 07 b-lazy" style="background-image: url(./upload/up-7.jpg);"></div>

					<div class="img-post 08 b-lazy" style="background-image: url(./upload/up-8.jpg);"></div>

				</div>

				<div class="subtitulo">
					<h3>Permanentes</h3>
				</div>

				<div class="caja p-01">
					<p class=""><span>2005</span></p>
					<p class="col"><a href="?p=single-proyecto">Caja Gris</a></p>
				</div>

				<div class="caja p-02">
					<p class=""><span>2008</span></p>
					<p class="col"><a href="?p=single-proyecto">Villa 49 Ordos 100</a></p>
				</div>

				<div class="caja p-03">
					<p class=""><span>2010</span></p>
					<p class="col"><a href="?p=single-proyecto">La Tallera</a></p>
					
				</div>

				<div class="caja p-04">
					<p class=""><span>2013</span></p>
					<p class="col"><a href="?p=single-proyecto">Librería Octavio Paz</a></p>
				</div>

				<div class="caja p-05">
					<p class=""><span>2014</span></p>
					<p class="col"><a href="?p=single-proyecto">Los Fresnos</a></p>
				</div>

				<div class="caja">
					<p class=""><a href="?p=proyectos">...</a></p>
					<p class="col"><a href="?p=proyectos">ver más</a></p>
				</div>
				
			</div>

			<div class="temporales col-12 col-m-3">
				<div class="imagenes-temporales">

					<div class="img-post 01 b-lazy" style="background-image: url(./upload/up-11.jpg);"></div>

					<div class="img-post 02 b-lazy" style="background-image: url(./upload/up-10.jpg);"></div>

					<div class="img-post 03 b-lazy" style="background-image: url(./upload/up-9.jpg);"></div>

					<div class="img-post 04 b-lazy" style="background-image: url(./upload/up-8.jpg);"></div>

					<div class="img-post 05 b-lazy" style="background-image: url(./upload/up-7.jpg);"></div>

					<div class="img-post 06 b-lazy" style="background-image: url(./upload/up-6.jpg);"></div>

					<div class="img-post 07 b-lazy" style="background-image: url(./upload/up-5.jpg);"></div>

					<div class="img-post 08 b-lazy" style="background-image: url(./upload/up-4.jpg);"></div>

				</div>

				<div class="subtitulo">
					<h3>Permanentes</h3>
				</div>

				<div class="caja t-01">
					<p class=""><span>2005</span></p>
					<p class="col"><a href="?p=single-proyecto">Caja Gris</a></p>
				</div>

				<div class="caja t-02">
					<p class=""><span>2008</span></p>
					<p class="col"><a href="?p=single-proyecto">Villa 49 Ordos 100</a></p>
				</div>

				<div class="caja t-03">
					<p class=""><span>2010</span></p>
					<p class="col"><a href="?p=single-proyecto">La Tallera</a></p>
					
				</div>

				<div class="caja t-04">
					<p class=""><span>2013</span></p>
					<p class="col"><a href="?p=single-proyecto">Librería Octavio Paz</a></p>
				</div>

				<div class="caja t-05">
					<p class=""><span>2014</span></p>
					<p class="col"><a href="?p=single-proyecto">Los Fresnos</a></p>
				</div>

				<div class="caja">
					<p class=""><a href="?p=proyectos">...</a></p>
					<p class="col"><a href="?p=proyectos">ver más</a></p>
				</div>
				
			</div>

		</div>

		<!-- 2da fila -->

		<div class="row seccion-textos">
			
			<div class="titulo">
				<h2>Textos</h2>
			</div>

			<div class="textos-list col-12 col-m-auto">

				<div class="caja">
					<p class=""><span>2009</span></p>
					<p class="col"><a href="?p=texto">Voluptatem sequi nesciunt. Neque porro quisquam est.</a></p>
				</div>

				<div class="caja">
					<p class=""><span>2013</span></p>
					<p class="col"><a href="?p=texto">Voluptatem sequi nesciunt. Neque porro quisquam est.</a></p>
				</div>

				<div class="caja">
					<p class=""><span>2017</span></p>
					<p class="col"><a href="?p=texto">Quidolorem ipsum quia dolor sit amet, consectetur.</a></p>
					
				</div>

				<div class="caja oculto">
					<p class=""><span>2018</span></p>
					<p class="col"><a href="?p=texto">Consequuntur magni porro quisquam.</a></p>
				</div>

				<div class="caja oculto">
					<p class=""><span>2018</span></p>
					<p class="col"><a href="?p=texto">Neque qui ratione sedquia.</a></p>
					
				</div>

				<div class="caja">
					<p class=""><a href="#">...</a></p>
					<p class="mas-textos col"><span>ver más</span></p>
				</div>
				
			</div>

		</div>

		<!-- 3ra fila -->

		<div class="row seccion-noticias">
			
			<div class="titulo">
				<h2>Noticias</h2>
			</div>

			<div class="noticias-list col-12 col-m-auto">

				<div class="caja">
					<p class=""><span>2018</span></p>
					<p class="col"><a href="?p=single-noticia">Serpentine Pavilion 2018 announcement</a></p>
				</div>

				<div class="caja">
					<p class=""><a href="?p=noticias">...</a></p>
					<p class="col"><a href="?p=noticias">ver más</a></p>
				</div>
				
			</div>

		</div>

	</div>




	<?php
	} //cierra el codigo
	?>

<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<!--                                   Footer                                 -->
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->

	<?php include "footer.php" ?>

</div>
     
</body>
</html> 