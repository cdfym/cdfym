<?php
  if(is_file("vista/".$pagina.".php")){
	
  	if(isset($_POST['usuario'])){
		
		require_once "modelo/Persona.php";
		require_once "modelo/Usuario.php";
		$usuario = new Usuario();
		$usu = $usuario->connect()->prepare("SELECT clave, rolusuario FROM usuarios WHERE usuario=:usuario");
		$usu->execute(["usuario"=>$_POST['usuario']]);
		$u = $usu->fetch(PDO::FETCH_OBJ);
		
		if (isset($u->clave)) {
			if ($u->clave == $_POST['clave']) {
			  	$_SESSION['usuario'] = $_POST['usuario'];
			  
				if($u->rolusuario=='Administrador'){
					$_SESSION['ok'] = '1';
				}
				else{
					$_SESSION['ok'] = '2';
				}
				header("Location: ?pagina=inicio1");
			}
			else{
			  $mensaje = "Contraseña incorrecta";
			}
		}
			else{
			$mensaje = "Usuario no registrado";
		}
		//  
		// header("Location: /inventario1.7/index.php?pagina=principal");
	 }
	  require_once("vista/".$pagina.".php"); 
  }
  else{
	  echo "pagina en construccion";
  }
?>