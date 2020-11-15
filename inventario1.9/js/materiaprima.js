document.onload = carga();

function carga(){
	
	document.getElementById('codigom').maxLength = 11;
	document.getElementById('codigom').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('codigom').onfocus = function(){	
		document.getElementById('scodigom').innerText = "Ingrese el código del materual";
	};
	document.getElementById('codigom').onblur = function(){
		document.getElementById('scodigom').innerText = "";
	};
	document.getElementById('codigom').onkeyup = function(){
		er = /^[0-9]{4,11}$/;
		r = validarkeyup(er,this,document.getElementById('scodigom'),"El código del material es incorrecta");
	}
    
    
    document.getElementById('nombrem').maxLength = 40;
	document.getElementById('nombrem').onkeypress = function(e){
		
		er = /^[A-Za-z\s]*$/; 
		
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('nombrem').onfocus = function(){
		
		document.getElementById('snombrem').innerText = "Introduzca el nombre";
	};
	
	
	document.getElementById('nombrem').onblur = function(){
		document.getElementById('snombrem').innerText = "";
	};
	
	document.getElementById('nombrem').onkeyup = function(){
		er = /^[A-Za-z\s]{3,40}$/;
		r = validarkeyup(er,this,document.getElementById('snombrem'),"Introduzca el nombre");
    }
    document.getElementById('tipom').maxLength = 25;
	document.getElementById('tipom').onkeypress = function(e){
		
		er = /^[A-Za-z\s]*$/; 
		
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('tipom').onfocus = function(){
		
		document.getElementById('stipom').innerText = "Introduzca el tipo";
	};
	
	
	document.getElementById('tipom').onblur = function(){
		document.getElementById('stipom').innerText = "";
	};
	
	document.getElementById('tipom').onkeyup = function(){
		er = /^[A-Za-z\s]{3,25}$/;
		r = validarkeyup(er,this,document.getElementById('stipom'),"Introduzca el tipo");
	}

	document.getElementById('disponibilidad').maxLength = 11;
	document.getElementById('disponibilidad').onkeypress = function(e){
		er = /^[A-Za-z0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('disponibilidad').onfocus = function(){	
		document.getElementById('sdisponibilidad').innerText = "Ingrese la disponibilidad";
	};
	document.getElementById('disponibilidad').onblur = function(){
		document.getElementById('sdisponibilidad').innerText = "";
	};
	document.getElementById('disponibilidad').onkeyup = function(){
		er = /^[A-Za-z0-9]{1,11}$/;
		r = validarkeyup(er,this,document.getElementById('sdisponibilidad'),"La disponibilidad es incorrecta");
	}
    
    document.getElementById('descripcion').maxLength = 100;
	document.getElementById('descripcion').onkeypress = function(e){
		er = /^[A-Za-z0-9\s]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('descripcion').onfocus = function(){	
		document.getElementById('sdescripcion').innerText = "Ingrese la descripcion";
	};
	document.getElementById('descripcion').onblur = function(){
		document.getElementById('sdescripcion').innerText = "";
	};
	document.getElementById('descripcion').onkeyup = function(){
		er = /^[A-Za-z0-9\s]{1,100}$/;
		r = validarkeyup(er,this,document.getElementById('sdescripcion'),"La descripcion es incorrecta");
	}
    
    
    document.getElementById('codigomedida').maxLength = 11;
	document.getElementById('codigomedida').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('codigomedida').onfocus = function(){	
		document.getElementById('scodigomedida').innerText = "Ingrese el código de medida";
	};
	document.getElementById('codigomedida').onblur = function(){
		document.getElementById('scodigomedida').innerText = "";
	};
	document.getElementById('codigomedida').onkeyup = function(){
		er = /^[0-9]{1,11}$/;
		r = validarkeyup(er,this,document.getElementById('scodigomedida'),"El código es incorrecto");
	}
    
    document.getElementById('tipomedida').maxLength = 11;
	document.getElementById('tipomedida').onkeypress = function(e){
		er = /^[A-Za-z0-9\s]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('tipomedida').onfocus = function(){	
		document.getElementById('stipomedida').innerText = "Ingrese el tipo de medida";
	};
	document.getElementById('tipomedida').onblur = function(){
		document.getElementById('stipomedida').innerText = "";
	};
	document.getElementById('tipomedida').onkeyup = function(){
		er = /^[A-Za-z0-9]{1,11}$/;
		r = validarkeyup(er,this,document.getElementById('stipomedida'),"El tipo de medida es incorrecto");
	}
    
    document.getElementById('escalamedida').maxLength = 11;
	document.getElementById('escalamedida').onkeypress = function(e){
		er = /^[0-9,]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('escalamedida').onfocus = function(){	
		document.getElementById('sescalamedida').innerText = "Ingrese la escala de medida";
	};
	document.getElementById('escalamedida').onblur = function(){
		document.getElementById('sescalamedida').innerText = "";
	};
	document.getElementById('escalamedida').onkeyup = function(){
		er = /^[0-9,]{1,11}$/;
		r = validarkeyup(er,this,document.getElementById('sescalamedida'),"El tipo de medida es incorrecto");
	}
    
    
   document.getElementById('codigomaterial').maxLength = 11;
	document.getElementById('codigomaterial').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('codigomaterial').onfocus = function(){	
		document.getElementById('scodigomaterial').innerText = "Ingrese el código del material";
	};
	document.getElementById('codigomaterial').onblur = function(){
		document.getElementById('scodigomaterial').innerText = "";
	};
	document.getElementById('codigomaterial').onkeyup = function(){
		er = /^[0-9]{4,11}$/;
		r = validarkeyup(er,this,document.getElementById('scodigomaterial'),"El código del material es incorrecta");
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
	$("#codigom").val('');
    $("#nombrem").val('');
	$("#tipom").val('');
	$("#disponibilidad").val('');
    $("#descripcion").val('');
    $("#codigomedida").val('');
	$("#tipomedida").val('');
	$("#escalamedida").val('');
    $("#codigomaterial").val('');
}

function valida_datos(){ 
	var error = '';
	 er = /^[0-9]{4,100}$/;
    r = validarkeyup(er,document.getElementById('codigom'),document.getElementById('scodigom'),"El codigo del material está vacío");
    if(r==0){ 
        error = "ERROR EN CÓDIGO DEL MATERIAL, campo obligatorio";   
        return error; 	
    }
	
	er = /^[A-Za-z\s]{3,40}$/; 
	r = validarkeyup(er,document.getElementById('nombrem'),document.getElementById('snombrem'),"Introduzca el nombre");
	if(r==0){ 
	   error = "ERROR EN NOMBRE, campo obligatorio";   
	   return error;	
	}
	er = /^[A-Za-z\s]{3,25}$/; 
	r = validarkeyup(er,document.getElementById('tipom'),document.getElementById('stipom'),"Introduzca el tipo");
	if(r==0){ 
	   error = "ERROR EN TIPO, campo obligatorio";   
	   return error;	
	}
	er = /^[A-Za-z0-9]{1,11}$/;
	r = validarkeyup(er,document.getElementById('disponibilidad'),document.getElementById('sdisponibilidad'),"La disponibilidad es incorrecta");
	if(r==0){ 
	   error = "ERROR EN DISPONIBILIDAD, campo obligatorio";   
	   return error;	
	}
    
    er = /^[A-Za-z0-9\s]{1,100}$/;
	r = validarkeyup(er,document.getElementById('descripcion'),document.getElementById('sdescripcion'),"La descripcion es incorrecta");
	if(r==0){ 
	   error = "ERROR EN DESCRIPCIÓN, campo obligatorio";   
	   return error;	
	}
    
	er = /^[0-9]{1,100}$/;
	r = validarkeyup(er,document.getElementById('codigomedida'),document.getElementById('scodigomedida'),"Código de medida incorrecto");
	if(r==0){ 
	   error = "ERROR EN CÓDIGO DE MEDIDAS, campo obligatorio";   
	   return error;	
	}
    
	
    er = /^[A-Za-z0-9\s]{1,100}$/;
	r = validarkeyup(er,document.getElementById('tipomedida'),document.getElementById('stipomedida'),"Tipo de medida incorrecto");
	if(r==0){ 
	   error = "ERROR EN TIPO DE MEDIDA, campo obligatorio";   
	   return error;	
	}
    
    
	er = /^[A-Za-z0-9\s]{1,100}$/;
	r = validarkeyup(er,document.getElementById('tipomedida'),document.getElementById('stipomedida'),"Tipo de medida incorrecto");
	if(r==0){ 
	   error = "ERROR EN TIPO DE MEDIDA, campo obligatorio";   
	   return error;	
	}
	
    er = /^[0-9,]{1,100}$/;
	r = validarkeyup(er,document.getElementById('escalamedida'),document.getElementById('sescalamedida'),"Escala de medida incorrecto");
	if(r==0){ 
	   error = "ERROR EN ESCALA DE MEDIDAS, campo obligatorio";   
	   return error;	
	}
		
	er = /^[0-9]{4,11}$/; 
	r = validarkeyup(er,document.getElementById('codigomaterial'),document.getElementById('scodigomaterial'),"Introduzca el codigo del material");
	if(r==0){ 
	   error = "ERROR EN CÓDIGO DEL MATERIAL, campo obligatorio";   
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