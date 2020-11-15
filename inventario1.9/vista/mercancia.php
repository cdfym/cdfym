<html>
<?php require_once('comunes/cabecera.php'); ?>
<head>
	<link rel="stylesheet" type="text/css" href="css/estilogeneral.css">
</head>
    <body>
<!--linea para enlazar con el modal-->
<?php require_once("comunes/modal.php"); ?>
<div class="container">
   <nav class="navbar navbar-expand-lg navbar-light" id="encabezado">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button> 
        <img src="img/logo1c.png" alt="logo" id="logo1c">
		<label class="navbar-brand text-white" ><h3>Productos</h3></label>
		<?php require_once('comunes/menu.php'); ?>
  </nav>
</div>  

<div class="container">
<hr/>
</div>
<div class="container"> <!-- todo el contenido ira dentro de esta etiqueta-->

<form method="post" action="" id="dprov">
        <div class="modal-content">

        <div class="container">
		<div class="row" >
		   <div class="col">
		   <label for="codigomerc">Código del producto</label>
		   <input class="form-control" type="text" id="codigomerc" name="codigomerc" />
		   <span id="scodigomerc"></span>
		</div>
         <div class="col">
		   <label for="nombre">Nombre</label>
		   <input class="form-control" type="text" id="nombre" name="nombre" />
		   <span id="snombre"></span>
		</div>
        <div class="col">
            <label for="disponibilidad">Disponibilidad</label>
		   <input class="form-control" type="number" id="disponibilidad" name="disponibilidad" />
		   <span id="sdisponibilidad"></span> 
		</div>
       </div>
            
            
    	<div class="row">
            
        <div class="col">
            <label for="stockmin">Stock Mínimo</label>
		   <input class="form-control" type="text" id="stockmin" name="stockmin" />
		   <span id="sstockmin"></span> 
		</div>
            
        <div class="col">
            <label for="stockmax">Stock Máximo</label>
		   <input class="form-control" type="text" id="stockmax" name="stockmax" />
		   <span id="sstockmax"></span> 
		</div>
            
        <div class="col">
		   <label for="precio">Precio</label>
		   <input class="form-control" type="email" id="precio" name="precio" />
		   <span id="sprecio" ></span>
		</div>   
	
		</div>
	
		 <div class="row">
             
              <div class="col">
            <label for="descripcion">Descripción</label>
		   <input class="form-control" type="text" id="descripcion" name="descripcion" />
		   <span id="sdescripcion"></span> 
		</div>
             
          <div class="col">
            <label for="presentacion">Presentación</label>
		   <input class="form-control" type="text" id="presentacion" name="presentacion" />
		   <span id="spresentacion"></span> 
		</div>
       <div class="col">
		   <label for="codigomaterial">Código del Material</label>
		   <input class="form-control" type="text" id="codigomaterial" name="codigomaterial" min="0" />
		   <span id="scodigomaterial"></span>
		</div>
	</div>
            
     <div class="row">
		<div class="col">
			 <label for="cantidad">Cantidad</label>
		   <input class="form-control" type="number" id="cantidad" name="cantidad" />
		   <span id="scantidad"></span> 
		</div>
         
         <div class="col">
			 <label for="medida">Medida</label>
		   <input class="form-control" type="text" id="medida" name="medida" />
		   <span id="smedida"></span> 
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
    </div>

</form>
	
</div> <!-- fin de container -->

<!-- seccion del modal -->
<div class="modal fade" tabindex="-1" role="dialog"  id="modal1">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-header text-light bg-info">
        <h5 class="modal-title">Proveedores Registrados</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-content">
		<table class="table table-striped table-hover table-responsive">
		<thead>
		  <tr>
			<th>Código del producto</th>
			<th>Nombre</th>
			<th>Color</th>
            <th>Cantidad</th>
            <th>Costo</th>
		  </tr>
             <tr>
			<td>1458</td>
			<td>Camisas</td>
			<td>Rosa</td>
            <td>13</td>
            <td>10.000.000</td>
		  </tr>
		  <tr>
			<td>1438</td>
			<td>Sueter</td>
			<td>Amarillo</td>
            <td>2</td>
            <td>3.000.000</td>
		  </tr>
		</thead>
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

<script type="text/javascript" src="js/producto.js"></script>

</body>
</html>