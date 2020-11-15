<html>
<?php require_once('comunes/cabecera.php');?>
<head>
	<link rel="stylesheet" type="text/css" href="css/estilogeneral.css">
</head>
<body>
<div class="container">
	<nav class="navbar navbar-expand-lg navbar-light" id="encabezado">
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		 <img src="img/logo1c.png" alt="logo" id="logo1c">
		<label class="navbar-brand text-white" ><h3>Reportes</h3> </label>
		<?php require_once('comunes/menu.php'); ?>
	</nav>


<div class="container">
<hr/>
</div>
        

<div class="modal-content">
<div class="container"> <!-- todo el contenido ira dentro de esta etiqueta-->
	<div class="text-center">
  		<label><h3>Generar Reportes</h3></label> 
  	</div>
			<p>
				- <a class="" href="?pagina=">Reporte General de Productos</a><br>
				-  <a class="" href="?pagina=">Reporte por Color</a><br>
				-  <a class="" href="?pagina=">Reporte de Materia Prima</a><br>
				-  Reportes de pedidos:<br>
                <a class="" href="?pagina=">Por Día</a><br>
				<a class="" href="?pagina=">Por Mes</a><br>
			</p>
			
                </div>
</div>
</div>



</body>
</html>