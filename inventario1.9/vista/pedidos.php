<html>
<?php require_once('comunes/cabecera.php'); ?>
    <head>
        <link rel="stylesheet" type="text/css" href="css/estilogeneral.css">
    <body>
<!--linea para enlazar con el modal-->
<?php require_once("comunes/modal.php"); ?>
<div class="container">
   <nav class="navbar navbar-expand-lg navbar-light" id="encabezado">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button> 
        <img src="img/logo1c.png" alt="logo" id="logo1c">
		<label class="navbar-brand text-white" ><h3>Pedidos</h3> </label>
		<?php require_once('comunes/menu.php'); ?>
  </nav>
</div>  

<div class="container">
<hr/>
</div>
<div class="container"> <!-- todo el contenido ira dentro de esta etiqueta-->

<form method="post" action="" id="f">
            <div class="modal-content">
<div class="container">
    <div class="row">
        <div class="col">
		   <label for="codigop">Código del Pedido</label>
		   <input class="form-control" type="text" id="codigop" name="codigop" />
		   <span id="scodigop"></span>
		</div>
        
        <div class="col">
		   <label for="fecha">Fecha del Pedido</label>
		   <input class="form-control" type="date" id="fecha" name="fecha" />
		   <span id="sfecha"></span>
		</div>
        
        <div class="col">
		   <label for="numerop">Número del Pedido</label>
		   <input class="form-control" type="text" id="numerop" name="numerop" />
		   <span id="snumerop"></span>
		</div>
	</div>
    
		
    <div class="row">
        <div class="col">
		   <label for="codigoproducto">Codigo del Producto</label>
		   <input class="form-control" type="text" id="codigoproducto" name="codigoproducto" />
		   <span id="scodigoproducto"></span>
		</div>
        
		<div class="col">
		   <label for="cantidad">Cantidad</label>
		   <input class="form-control" type="text" id="cantidad" name="cantidad" />
		   <span id="scantidad"></span>
		</div>
		
         <div class="col">
		   <label for="color">Color</label>
		   <input class="form-control" type="text" id="color" name="color" />
		   <span id="scolor"></span>
		</div>
		

	</div>
    
    
	<div class="row">
		<div class="col">
			<hr/>
		</div>
	</div>

	<div class="row">
		<div class="col">
			   <button type="button" class="btn btn-primary" id="incluir" name="incluir">INCLUIR</button>
		</div>
		<div class="col">	
			   <button type="button" class="btn btn-primary" id="consultar" 
			   name="consultar">CONSULTAR</button>
		</div>
		<div class="col">	
			   <button type="button" class="btn btn-primary" id="modificar" name="modificar">MODIFICAR</button>
		</div>
		<div class="col">	
			   <button type="button" class="btn btn-primary" id="eliminar" name="eliminar">ELIMINAR</button>
		</div>
		<div class="col">	
			   <a href="." class="btn btn-primary">REGRESAR</a>
		</div>
	</div>
</div>
</form>
	
</div> <!-- fin de container -->

<!-- seccion del modal -->
<div class="modal fade" tabindex="-1" role="dialog"  id="modal1">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-header text-light bg-info">
        <h5 class="modal-title">Listado de Pedidos</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-content">
		<table class="table table-striped table-hover">
		<thead>
		  <tr>
			<th>Código del Pedido</th>
			<th>Fecha del Pedido</th>
			<th>Número del Pedido</th>
            <th>Cantidad</th>
			<th>Color</th>
		  </tr>
		</thead>
            <tbody>
		  <tr>
			<td>1234</td>
			<td>10/03/2020</td>
			<td>2465</td>
            <td>254</td>
			<td>Amarillo</td>
		  </tr>
		  <tr>
			<td>123</td>
			<td>10/03/2020</td>
			<td>3459</td>
            <td>56</td>
			<td>Verde</td>
		  </tr>
		  <tr>
			<td>12345678</td>
			<td>10/03/2020</td>
			<td>2343</td>
            <td>25</td>
			<td>Rojo</td>
		  </tr>
		</tbody>
		</table>
		<tbody id="cuerpoconsulta">
		  
		</tbody>
		</table>
    </div>
	<div class="modal-footer bg-light">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
    </div>
  </div>
</div>
<!--fin de seccion modal-->

<script type="text/javascript" src="js/pedidos.js"></script>

</body>
</html>