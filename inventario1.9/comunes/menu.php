

<div class="container">
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-opaque">

	
	 <button class="navbar-toggler" type="button" data-toggle="collapse" 
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

		
<div class="collapse navbar-collapse" id="navbarSupportedContent">
	 <?php 
	 
	  if(isset($_SESSION['ok'])){
	?>

<div class="collapse navbar-collapse" id="navbarNavDropdown">
		 <ul class="navbar-nav">
			

			   <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
					   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					  <?php
					  	echo $_SESSION['usuario'];
					  ?>
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="?pagina=inicio1">Inicio</a>
						<?php if($_SESSION['ok']=='1'){ ?>
			 				 <a class="dropdown-item" href="?pagina=usuarios">Usuarios</a>		  
	  					<?php } ?>
						<a class="dropdown-item" href="?pagina=mercancia">Productos</a>
						<a class="dropdown-item" href="?pagina=pedidos">Pedidos</a>
						<a class="dropdown-item" href="?pagina=materiaprima">Materia Prima</a>
						<a class="dropdown-item" href="?pagina=recepcion">Recepción de la Materia Prima</a>
						<a class="dropdown-item" href="?pagina=proveedor">Proveedor</a>
						<a class="dropdown-item" href="?pagina=reportes">Reportes</a>
						<a class="dropdown-item" href="?pagina=ayuda">Ayuda</a>
					</div>
			  </li>
		
			  <form method="post" action="salir.php" id="sale"> 
		  <a class="btn btn-outline-success my-2 my-sm-0" 
		  onclick="document.getElementById('sale').submit();">
		  SALIR</a>
		  </form>
		 </ul>
		 <?php }  
		  else { 		
		?>
		<button class="btn btn-secundary">
		<a class="btn btn-outline-success my-2 my-sm-0 a-login" 
	  href="?" >
	  Ingresar</a></button>
	<?php
		  }
	?>
		
</div>
</div>		

</nav>
</div>


