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
		<label class="navbar-brand text-white" ><h3>Recepción de Materia Prima</h3> </label>
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
		   <label for="codigo">Código del Material</label>
		   <input class="form-control" type="text" id="codigo" name="codigo" />
		   <span id="scodigo"></span>
		</div>
        
        <div class="col">
		   <label for="recepcion">Numero de Recepción</label>
		   <input class="form-control" type="text" id="recepcion" name="recepcion" />
		   <span id="srecepcion"></span>
		</div>
        
        <div class="col">
		   <label for="fechar">Fecha de Recepcion</label>
		   <input class="form-control" type="date" id="fechar" name="fechar" />
		   <span id="sfechar"></span>
		</div>
        
        <div class="col">
		   <label for="monto">Monto</label>
		   <input class="form-control" type="text" id="monto" name="monto" />
		   <span id="smonto"></span>
		</div>
        
	</div>
    
		
    <div class="row">
		<div class="col">
		   <label for="cantidad">Cantidad</label>
		   <input class="form-control" type="number" id="cantidad" name="cantidad" min="1"/>
		   <span id="scantidad"></span>
		</div>
		
         <div class="col">
		   <label for="costo">Costo</label>
		   <input class="form-control" type="text" id="costo" name="costo" />
		   <span id="scosto"></span>
		</div>
		
        <div class="col">
		   <label for="color">Color</label>
		   <input class="form-control" type="text" id="color" name="color" />
		   <span id="scolor"></span>
		</div>
        
        <div class="col">
		   <label for="cproveedor">Código del Proveedor</label>
		   <input class="form-control" type="text" id="cproveedor" name="cproveedor" />
		   <span id="scproveedor"></span>
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
        <h5 class="modal-title">Recepción de Materia Prima</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-content">
		<table class="table table-striped table-hover">
		<thead>
		  <tr>
			<th>Número de Recepción</th>
			<th>Fecha del Recepción</th>
			<th>Monto</th>
			<th>Cantidad</th>
            <th>Costo</th>
            <th>Color</th>
		  </tr>
		</thead>
            <tbody>
		  <tr>
			<td>123</td>
			<td>10/03/2020</td>
			<td>13.000.000</td>
            <td>25</td>
			<td>50.000.000</td>}
            <td>Verde</td>
		  </tr>
		  <tr>
			<td>453</td>
			<td>10/03/2020</td>
			<td>14.000.000</td>
            <td>27</td>
			<td>60.000.000</td>}
            <td>Naranja</td>
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

<script type="text/javascript" src="js/recepcion.js"></script>

</body>
</html>