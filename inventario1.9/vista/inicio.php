<html>
<?php require_once('comunes/cabecera.php');?>
    <head>
        <link rel="stylesheet" type="text/css" href="css/iniciosesion.css">
        
        <!-- Los iconos tipo Solid de Fontawesome--> <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/solid.css"> <script src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script> 
    </head>
<body>
<div class="container">
   <nav class="navbar navbar-expand-lg navbar-light" id="encabezado">
        <img src="img/logo1c.png" alt="logo" id="logo1c">
		<label class="text-white" ><h1>Confecciones y Diseños F&M</h1></label>
  </nav>
</div> 

     <div class="modal-dialog text-center">
        <div class="col-sm-8 main-section">
            <div class="modal-content">
                <div class="col-12  user-img">
                    <img src="img/usuario.png"/>
                </div>
                <form class="col-12" method="post" action="" id="f">
                    <div class="form-group" id="user-group">
                        <input type="text" name="usuario" id="usuario" class="form-control" placeholder="Nombre de Usuario"/>
                    </div>
                    <div class="form-group" id="contrasena-group">
                        <input type="password" name="clave" id="clave" class="form-control" placeholder="Contraseña"/>
                    </div>
                    
                    <?php
                        if(isset($mensaje)){
                            echo "<div>$mensaje</div><br>";
                        }
                    ?>
                    
                    <button type="button" id="ingresar" class="btn btn-primary"><i class="fas fa-sign-in-alt"></i><a class="text-white"> Ingresar</button>
                </form>         
                <div class="col-12 opciones">
                    
                    <a href="?pagina=recuperarcontraseña">Recuperar contraseña</a>
                
                </div>
            </div>
        </div>
    </div>
		
    <script src="js/iniciar_sesion.js"></script>
</body>
</html>