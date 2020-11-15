document.onload = carga();

function carga(){
	
//1ERO VALIDACIONES PARA LA CEDULA	
	document.getElementById('cedula').maxLength = 8;
	
	document.getElementById('cedula').onkeypress = function(e){
	
		er = /^[0-9]*$/; 
		
	
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('cedula').onfocus = function(){
	
		document.getElementById('scedula').innerText = "Solo numeros entre 7 y 8 caracteres ";
	};
	
	
	document.getElementById('cedula').onblur = function(){
		document.getElementById('scedula').innerText = "";
	};
	
	
	document.getElementById('cedula').onkeyup = function(){
	
		er = /^[0-9]{7,8}$/;
		r = validarkeyup(er,this,document.getElementById('scedula'),"Solo numeros entre 7 y 8 caracteres ");
	}
	
    document.getElementById('nombre').maxLength = 20;
	document.getElementById('nombre').onkeypress = function(e){
		
		er = /^[A-Za-z\s]*$/; 
		
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('nombre').onfocus = function(){
		
		document.getElementById('snombre').innerText = "Introduzca sus nombres";
	};
	
	
	document.getElementById('nombre').onblur = function(){
		document.getElementById('snombre').innerText = "";
	};
	
	document.getElementById('nombre').onkeyup = function(){
		er = /^[A-Za-z\s]{3,20}$/;
		r = validarkeyup(er,this,document.getElementById('snombre'),"Introduzca sus nombres");
    }
	
	
	document.getElementById('apellido').maxLength = 20;
    document.getElementById('apellido').onkeypress = function(e){
		
		er = /^[A-Za-z\s]*$/; 
		
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('apellido').onfocus = function(){
        document.getElementById('sapellido').innerText = "Introduzca sus apellidos";
	};
	
	
	document.getElementById('apellido').onblur = function(){
		document.getElementById('sapellido').innerText = "";
	};
	
	
	document.getElementById('apellido').onkeyup = function(){
		er = /^[A-Za-z\s]{10,20}$/;
		r = validarkeyup(er,this,document.getElementById('sapellido'),"Introduzca sus apellidos");
    }

    document.getElementById('telefono').maxLength = 11;
    document.getElementById('telefono').onkeypress = function(e){
		
		er = /^[0-9]*$/; 
		
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('telefono').onfocus = function(){
        document.getElementById('stelefono').innerText = "Introduzca su numero telefonico";
	};
	
	
	document.getElementById('telefono').onblur = function(){
		document.getElementById('stelefono').innerText = "";
	};
	
	
	document.getElementById('telefono').onkeyup = function(){
		er = /^[0-9]$/;
		r = validarkeyup(er,this,document.getElementById('telefono'),"Introduzca su numero telefonico");
    }
	
	document.getElementById('correo').maxLength = 30;
    document.getElementById('correo').onkeypress = function(e){
		
		er = /^[A-Za-z0-9@._-]$/; 
		
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('correo').onfocus = function(){
        document.getElementById('scorreo').innerText = "Introduzca la direccion de su correo electronico";
	};
	
	
	document.getElementById('correo').onblur = function(){
		document.getElementById('scorreo').innerText = "";
	};
	
	
	document.getElementById('correo').onkeyup = function(){
		er = /^[A-Za-z0-9.-_\u00f1\u00d1\u00EO-\u00FC]{3,20}[@][A-Za-z]{3,10}[.][A-Za-z]{2,3}$/;
		r = validarkeyup(er,this,document.getElementById('correo'),"Introduzca la direccion de su correo electronico");
	}
	


	document.getElementById('contraseña').maxLength = 12;
	document.getElementById('contraseña').onkeypress = function(e){
		er = /^[0-9A-Za-z-_.#]*$/; 
		
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('contraseña').onfocus = function(){
	
		document.getElementById('scontraseña').innerText = "Solo numeros, letras y - _ . o # entre 8 y 12 caracteres ";
	};
	
	
	document.getElementById('contraseña').onblur = function(){
		document.getElementById('scontraseña').innerText = "";
	};
	
	
	document.getElementById('contraseña').onkeyup = function(){
	
		er = /^[0-9A-Za-z-_.#]{8,12}$/;
		r = validarkeyup(er,this,document.getElementById('scontraseña'),"Solo numeros, letras y - _ . o # entre 8 y 12 caracteres ");
	}
	
    document.getElementById('usuario').maxLength = 12;
	document.getElementById('usuario').onkeypress = function(e){
	
		er = /^[A-Za-z]*$/; 
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('usuario').onfocus = function(){
		document.getElementById('susuario').innerText = "Introduzca el nombre de su usuario";
	};
	
	
	document.getElementById('usuario').onblur = function(){
		document.getElementById('susuario').innerText = "";
	};
	
	
	document.getElementById('usuario').onkeyup = function(){
		er = /^[0-9A-Za-z-_.#]{8,12}$/;
		r = validarkeyup(er,this,document.getElementById('susuario'),"Introduzca el nombre de su usuario ");
	}
	


document.getElementById('incluir').onclick = function(){
		a = valida_datos(); 
		if(a!=''){
			$("#contenidodemodal").html(a);
			$("#mostrarmodal").modal("show");
			setTimeout(function() {
					$("#mostrarmodal").modal("hide");
			},4000);
		}
		else{
			 var datos = new FormData();
			 datos.append('accion','incluir');
			 datos.append('cedula',$("#cedula").val());
             datos.append('nombre',$("#nombre").val());
             datos.append('apellido',$("#apellido").val());
             datos.append('correo',$("#correo").val());
             datos.append('telefono',$("#telefono").val());
             datos.append('usuario',$("#usuario").val());
            datos.append('contraseña',$("#contraseña").val());
			 enviaAjax(datos);
			 limpia();
		}
	
}	

document.getElementById('modificar').onclick = function(){
		a = valida_datos(); 
		if(a!=''){
			$("#contenidodemodal").html(a);
			$("#mostrarmodal").modal("show");
			setTimeout(function() {
					$("#mostrarmodal").modal("hide");
			},4000);
		}
		else{
			 var datos = new FormData();
			 datos.append('accion','modificar');
			 datos.append('cedula',$("#cedula").val());
             datos.append('nombre',$("#nombre").val());
             datos.append('apellido',$("#apellido").val());
             datos.append('correo',$("#correo").val());
			 datos.append('telefono',$("#telefono").val());
			 datos.append('usuario',$("#usuario").val());
            datos.append('contraseña',$("#contraseña").val());
			 enviaAjax(datos);
			 limpia();
		}
	
}		

document.getElementById('eliminar').onclick = function(){
	        
	er = /^[0-9]{7,8}$/;;
	r = validarkeyup(er,document.getElementById('cedula'),document.getElementById('scedula'),"Solo numeros entre 7 y 8 caracteres");
	if(r==0){ 
	    $("#contenidodemodal").html("ERROR <br/>La Cedula debe contener <br/>Solo numeros entre 7 y 8 caracteres");
			   $("#mostrarmodal").modal("show");
				setTimeout(function() {
					$("#mostrarmodal").modal("hide");
	    },4000);
	}
	else{
		var datos = new FormData();
        datos.append('accion','eliminar');
        datos.append('cedula',$("#cedula").val());
        datos.append('nombre',$("#nombre").val());
        datos.append('apellido',$("#apellido").val());
        datos.append('correo',$("#correo").val());
        datos.append('telefono',$("#telefono").val());
        datos.append('usuario',$("#usuario").val());
        datos.append('contraseña',$("#contraseña").val());
			 enviaAjax(datos);
			 limpia();
	}
	
}	
	
	document.getElementById('consultar').onclick = function(){
	
	var datos = new FormData();
	datos.append('accion','consultar');
	consultaAjax(datos);
}
	
	
}

function consultaAjax(datos){
	$.ajax({
		    async: true,
            url: '', 
            type: 'POST',
			contentType: false,
            data: datos,
			processData: false,
	        cache: false,
            success: function(respuesta) {
			   $("#cuerpoconsulta").html(respuesta);
			   $("#modal1").modal("show");
            },
            error: function(){
               $("#contenidodemodal").html('Error con ajax');
			   $("#mostrarmodal").modal("show");
				setTimeout(function() {
					$("#mostrarmodal").modal("hide");
				},4000);
            }
			
    }); 
}


function enviaAjax(datos){
	
	$.ajax({
		    async: true,
            url: '', 
            type: 'POST',
			contentType: false,
            data: datos,
			processData: false,
	        cache: false,
            success: function(respuesta) {
			   $("#contenidodemodal").html(respuesta);
			   $("#mostrarmodal").modal("show");
				setTimeout(function() {
					$("#mostrarmodal").modal("hide");
				},4000);
            },
            error: function(){
               $("#contenidodemodal").html('Error con ajax');
			   $("#mostrarmodal").modal("show");
				setTimeout(function() {
					$("#mostrarmodal").modal("hide");
				},4000);
            }
			
    }); 
	
}
function limpia(){
	$("#cedula").val('');
    $("#nombre").val('');
	$("#apellido").val('');
	$("#correo").val('');
	$("#telefono").val('');
	$("#usuario").val('');
	$("#contraseña").val('');
}

function valida_datos(){ 
	var error = '';
	
	
	er = /^[0-9]{7,8}$/;;
	r = validarkeyup(er,document.getElementById('cedula'),document.getElementById('scedula'),"Solo numeros entre 7 y 8 caracteres");
	if(r==0){ 
	   error = "ERROR <br/>La Cedula debe contener <br/>Solo numeros entre 7 y 8 caracteres";   
	   return error;	
	}
    
    //para nombre
    er = /^[A-Za-z\s]{10,20}$/;  
	r = validarkeyup(er,document.getElementById('nombre'),document.getElementById('snombre'),"Ejemplo: Carla Gloriangel");
	if(r==0){ 
	   error = "ERROR EN NOMBRES, campo obligatorio";
	   return error;
	}

    //para apellidos
	er = /^[A-Za-z\s]{10,20}$/;
	r = validarkeyup(er,document.getElementById('apellido'),document.getElementById('sapellido'),"Ejemplo: Garcia Yepez");
	if(r==0){ 
	   error = "ERROR EN APELLIDOS, campo obligatorio";
	   return error; 
	}
    
     //para correo
	er = /^[A-Za-z0-9.-_\u00f1\u00d1\u00EO-\u00FC]{3,20}[@][A-Za-z]{3,10}[.][A-Za-z]{2,3}$/;
	r = validarkeyup(er,document.getElementById('correo'),document.getElementById('scorreo'),"Ejemplo: maria.garciay@gmail.com");
	if(r==0){ 
	   error = "ERROR EN CORREO, campo obligatorio";
	   return error;
	}
	
    //para telefono
	er = /^[0-9]{10,11}$/;
	r = validarkeyup(er,document.getElementById('telefono'),document.getElementById('stelefono'),"Ejemplo: 04169567848 o 4169567848");
	if(r==0){ 
	   error = "ERROR EN TELEFONO, campo obligatorio";
	   return error;	
	}
	
	er = /^[0-9A-Za-z-_.#]{8,12}$/;
	r = validarkeyup(er,document.getElementById('usuario'),document.getElementById('susuario'),"Introduzca el nombre de su usuario");
	if(r==0){
	   error = "ERROR EN USUARIO, campo obligatorio";
	   return error; 
	}
	
	er = /^[0-9A-Za-z-_.#]{8,12}$/;
	r = validarkeyup(er,document.getElementById('contraseña'),document.getElementById('scontraseña'),"Solo numeros, letras y - _ . o # entre 8 y 12 caracteres ");
	if(r==0){ 
	   error = "ERROR EN CONTRASEÑA, campo obligatorio";
	   return error; 
	}
	
	return error;
}


function validarkeypress(er,e){

	key = e.keyCode || e.which;
	

    tecla = String.fromCharCode(key);
	

    a = er.test(tecla);
	
    if(!a){

		e.preventDefault();
    }
	
    
}

function validarkeyup(er,etiqueta,etiquetamensaje,
mensaje){
	a = er.test(etiqueta.value);
	if(a){
		etiquetamensaje.innerText = "";
		return 1;
	}
	else{
		etiquetamensaje.innerText = mensaje;
		return 0;
	}
}