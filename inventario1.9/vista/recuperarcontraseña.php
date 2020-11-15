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
		<label class="text-white" ><h1>Recuperar contraseña</h1></label>
  </nav>
</div> 

     <div class="modal-dialog text-center">
        <div class="col-sm-8 main-section">
            <div class="modal-content">
               <div class="col-12  user-img">
                    <img src="img/usuario.png"/>
                </div>
                <form class="col-12">
                    <div class="form-group" id="user-group">
                        <label for="correo">Introduzca su correo electronico</label>
                        <input type="text" id='correo' class="form-control" />
                    </div>
                    <button type="submit" class="btn btn-primary"><i class="fas fa-sign-in-alt"></i><a class="text-white" href="">Recuperar Contraseña</button>
                        
                    <div>
                    <p>
                    <a href="?pagina=inicio">Haz click aquí</a> si ya tienes la contraseña para acceder al sistema de Diseño y Confecciones F&M
                    </p>
                    </div>
                
            </div>
             </form> 
                </div>
        </div>
    </div>
		
    
</body>
</html>