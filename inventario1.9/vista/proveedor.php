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
		<label class="navbar-brand text-white" ><h3>Proveedor</h3> </label>
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
		   <label for="codigop">Código del Proveedor</label>
		   <input class="form-control" type="text" id="codigop" name="codigop" />
		   <span id="scodigop"></span>
		</div>
        
        <div class="col">
		   <label for="razons">Razón Social</label>
		   <input class="form-control" type="text" id="razons" name="razons" />
		   <span id="srazons"></span>
		</div>
        
        <div class="col">
		   <label for="telefonop">Teléfono</label>
		   <input class="form-control" type="text" id="telefonop" name="telefonop" />
		   <span id="stelefonop"></span>
		</div>
	</div>
    
		
    <div class="row">
         <div class="col">
		   <label for="correo">Correo</label>
		   <input class="form-control" type="text" id="correo" name="correo" />
		   <span id="scorreo"></span>
		</div>
		<div class="col">
		   <label for="direccion">Dirección</label>
		   <input class="form-control" type="text" id="direccion" name="direccion" />
		   <span id="sdireccion"></span>
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
			<th>Código del Proveedor</th>
			<th>Razón Social</th>
			<th>Dirección</th>
            <th>Telefono/th>
			<th>Correo</th>
		  </tr>
		</thead>
            <tbody>
		  <tr>
			<td>1234</td>
			<td>J-45678656</td>
			<td>Calle 10 entre 20 y 21</td>
            <td>04169567849</td>
			<td>carlag.garciay@gmail.com</td>
		  </tr>
		  <tr>
			<td>1234</td>
			<td>J-45678656</td>
			<td>Calle 10 entre 20 y 21</td>
            <td>04169567849</td>
			<td>carlag.garciay@gmail.com</td>
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

<script type="text/javascript" src="js/proveedores.js"></script>

</body>
</html>