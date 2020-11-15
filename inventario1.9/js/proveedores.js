document.onload = carga();

function carga(){
	document.getElementById('codigop').maxLength = 11;
    document.getElementById('codigop').onkeypress = function(e){
		
		er = /^[0-9]*$/; 
		
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('codigop').onfocus = function(){
        document.getElementById('scodigop').innerText = "Introduzca el código del proveedor";
	};
	
	
	document.getElementById('codigop').onblur = function(){
		document.getElementById('scodigop').innerText = "";
	};
	
	
	document.getElementById('codigop').onkeyup = function(){
		er = /^[0-9]$/;
		r = validarkeyup(er,this,document.getElementById('codigop'),"Introduzca el código del proveedor");
	}
	//Validaciones de Razon Social
	document.getElementById('razons').maxLength = 30;

	
	document.getElementById('razons').onkeypress = function(e){
		
		er = /^[A-Za-z\s]$/; 
		
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('razons').onfocus = function(){
		
		document.getElementById('srazons').innerText = "Introduzca la Razón Social";
	};
	
	
	document.getElementById('razons').onblur = function(){
		document.getElementById('srazons').innerText = "";
	};
	
	
	document.getElementById('razons').onkeyup = function(){
		er = /^[A-Za-z\s]{10,30}$/;
		r = validarkeyup(er,this,document.getElementById('razons'));
	}
	
	
	
	//Telefono
	document.getElementById('telefonop').maxLength = 11;
    document.getElementById('telefonop').onkeypress = function(e){
		
		er = /^[0-9]*$/; 
		
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('telefonop').onfocus = function(){
        document.getElementById('stelefonop').innerText = "Introduzca el número telefónico";
	};
	
	
	document.getElementById('telefonop').onblur = function(){
		document.getElementById('stelefonop').innerText = "";
	};
	
	
	document.getElementById('telefonop').onkeyup = function(){
		er = /^[0-9]$/;
		r = validarkeyup(er,this,document.getElementById('telefonop'),"Introduzca el número telefónico");
	}
	
	//Correo
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
	//Validaciones Dirección
    document.getElementById('direccion').maxLength = 40;
    document.getElementById('direccion').onkeypress = function(e){
		
		er = /^[A-Za-z0-9\s,.\-#]$/; 
		
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('direccion').onfocus = function(){
        document.getElementById('sdireccion').innerText = "Introduzca la dirección";
	};
	
	
	document.getElementById('direccion').onblur = function(){
		document.getElementById('sdireccion').innerText = "";
	};
	
	
	document.getElementById('direccion').onkeyup = function(){
		er = /^[A-Za-z0-9\s]{10,30}$/;
		r = validarkeyup(er,this,document.getElementById('direccion'));
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
			//  enviaAjax(datos);
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
	$("#codigop").val('');
	$("#razons").val('');
    $("#direccion").val('');
	$("#correo").val('');
	$("#telefonop").val('');
}

function valida_datos(){ 
	var error = '';
	er = /^[0-9]{4,11}$/; 
	r = validarkeyup(er,document.getElementById('codigop'),document.getElementById('scodigop'),"Introduzca el código del proveedor");
	if(r==0){ 
	   error = "ERROR EN CÓDIGO DEL PROVEEDOR, campo obligatorio";   
	   return error;	
	}
	
	er = /^[A-Za-z\s]{3,30}$/; 
	r = validarkeyup(er,document.getElementById('razons'),document.getElementById('srazons'),"Solo letras");
	if(r==0){ 
	   error = "ERROR <br/>La Razón Social debe contener <br/>Solo letras";   
	   return error;	
	}
	 
	
	er = /^[0-9]{10,11}$/; 
	r = validarkeyup(er,document.getElementById('telefonop'),document.getElementById('stelefonop'),"Introduzca el número telefónico");
	if(r==0){ 
	   error = "ERROR EN NÚMERO TELEFÓNICO, campo obligatorio";   
	   return error;	
	}
     //para correo
	er = /^[A-Za-z0-9.-_\u00f1\u00d1\u00EO-\u00FC]{3,20}[@][A-Za-z]{3,10}[.][A-Za-z]{2,3}$/;
	r = validarkeyup(er,document.getElementById('correo'),document.getElementById('scorreo'),"Ejemplo: maria.garciay@gmail.com");
	if(r==0){ 
	   error = "ERROR EN CORREO, campo obligatorio";
	   return error;
	}
	er = /^[A-Za-z0-9\s,.\-#]{10,30}$/;
	r = validarkeyup(er,document.getElementById('direccion'),document.getElementById('sdireccion'),"Introduzca la dirección");
	if(r==0){ 
	   error = "ERROR EN DIRECCIÓN, campo obligatorio";
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