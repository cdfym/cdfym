<?php
  

require_once('modelo/usuarios.php');


if (!is_file("modelo/".$pagina.".php")){

	echo "Falta definir la clase ".$pagina;
	exit;
}  
  
  if(is_file("vista/".$pagina.".php")){
	  
	 
	  
	  $o = new usuarios(); 
	  
	  if(isset($_POST['accion'])){
		  
		 
		  $accion = $_POST['accion'];
		  
		  if($accion=='consultar'){
			 
			  echo $o->consultar();
			  exit;
		  }


		  $o->set_cedula($_POST['cedula']);
          $o->set_cedula($_POST['nombre']);
          $o->set_cedula($_POST['apellido']);
          $o->set_cedula($_POST['correo']);
		  $o->set_usuario($_POST['telefono']);
		  $o->set_clave($_POST['usuario']);
          $o->set_cedula($_POST['contraseña']);
		  
		  $accion = $_POST['accion'];
		  if($accion=='incluir'){
			echo  $o->incluir();
		  }
		  elseif($accion=='modificar'){
			echo  $o->modificar();
			
		  }
		  elseif($accion=='eliminar'){
			echo  $o->eliminar();
			
		  }
		  exit;
	  }
	  
	  require_once("vista/".$pagina.".php"); 
  }
  else{
	  echo "pagina en construccion";
  }
?>