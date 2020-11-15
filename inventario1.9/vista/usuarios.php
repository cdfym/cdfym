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
		<label class="navbar-brand text-white" ><h3>Usuarios</h3> </label>
		<?php require_once('comunes/menu.php'); ?>
  </nav>
</div>  

<div class="container">
<hr/>
</div>
<div class="container"> <!-- todo el contenido ira dentro de esta etiqueta-->

<form method="post" action="" id="f">
<div class="container">
    <div class="modal-content">
    <div class="row">
		<div class="col">
		   <label for="cedula">Cedula</label>
		   <input class="form-control" type="text" id="cedula" name="cedula" />
		   <span id="scedula"></span>
		</div>
        
        <div class="col">
		   <label for="nombre">Nombres</label>
		   <input class="form-control" type="text" id="nombre" name="nombre" />
		   <span id="snombre"></span>
		</div>
	</div>
    
		
    <div class="row">
		
		<div class="col">
		   <label for="apellido">Apellidos</label>
		   <input class="form-control" type="text" id="apellido" name="apellido" />
		   <span id="sapellido"></span>
		</div>
		
		<div class="col">
		   <label for="correo">Correo</label>
		   <input class="form-control" type="text" id="correo" name="correo" />
		   <span id="scorreo"></span>
		</div>
		
	</div>
    
    <div class="row">
		<div class="col">
		   <label for="telefono">Teléfono</label>
		   <input class="form-control" type="text" id="telefono" name="telefono" />
		   <span id="stelefono"></span>
		</div>
        
        <div class="col">
		   <label for="usuario">Usuario</label>
		   <input class="form-control" type="text" id="usuario" name="usuario" />
		   <span id="susuario"></span>
		</div>
    </div>
        
        <div class="row">
           <div class="col">
		   <label for="contraseña">Contraseña</label>
		   <input class="form-control" type="password" id="contraseña" name="contraseña" />
		   <span id="scontraseña"></span>
		   </div> 
            
            <div class="col">
		   <label for="rolusuario">Rol</label>
		    <select class="form-control" name="rolusuario" id="rolusuario">
		   <option value='administrador'>Administrador</option>
		   <option value='usuario'>Usuario</option>
		   </select>
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
			   <a href="?pagina=inicio1" class="btn btn-primary">REGRESAR</a>
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
        <h5 class="modal-title">Listado de Usuarios</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-content">
		<table class="table table-striped table-hover table-responsive">
		<thead>
		  <tr>
			<th>Cedula</th>
			<th>Nombres</th>
			<th>Apellidos</th>
			<th>Correo</th>
			<th>Telefono</th>
			<th>Usuario</th>
		  </tr>
		</thead>
            <tbody>
		  <tr>
			<td>26898393</td>
			<td>Carla Gloriangel</td>
			<td>García Yépez</td>
            <td>Carlag.garciay@gmail.com</td>
			<td>04169567849</td>
            <td>carlag.29</td>
		  </tr>
		  <tr>
			<td>25787363</td>
			<td>Maria Daniela</td>
			<td>Torres García</td>
            <td>MariaD.torresy@gmail.com</td>
			<td>04146787656</td>
            <td>DanielaT.25</td>
		  </tr>
		  <tr>
			<td>253456798</td>
			<td>Eloisa del Carmen</td>
			<td>Perez Gómez</td>
            <td>EloisaD.perezG@gamil.com</td>
			<td>04167878743</td>
            <td>EloisaP.60</td>
		  </tr>
          <tr>
			<td>25345698</td>
			<td>Maria Gabriela</td>
			<td>Parra Perez</td>
            <td>MariaG.ParraP@gamil.com</td>
			<td>04167878743</td>
            <td>MariaG.60</td>
		  </tr>
		</tbody>
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

<script type="text/javascript" src="js/usuarios.js"></script>

</body>
</html>