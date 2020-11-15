document.onload = carga();

function carga(){
    document.getElementById('codigo').maxLength = 11;
	document.getElementById('codigo').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('codigo').onfocus = function(){	
		document.getElementById('scodigo').innerText = "Ingrese el código del material";
	};
	document.getElementById('codigo').onblur = function(){
		document.getElementById('scodigo').innerText = "";
	};
	document.getElementById('codigo').onkeyup = function(){
		er = /^[0-9]{4,11}$/;
		r = validarkeyup(er,this,document.getElementById('scodigo'),"El código del material es incorrecta");
	}
	
    
    
	document.getElementById('recepcion').maxLength = 11;
	document.getElementById('recepcion').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('recepcion').onfocus = function(){
		document.getElementById('srecepcion').innerText = "Solo números, máximo 11 caracteres";
	};
	document.getElementById('recepcion').onblur = function(){
		document.getElementById('srecepcion').innerText = "";
	};
	document.getElementById('recepcion').onkeyup = function(){
		er = /^[0-9]{7,8}$/;
		r = validarkeyup(er,this,document.getElementById('srecepcion'),"Solo números, máximo 11 caracteres");
	}

    
    
    
	document.getElementById('fechar').onfocus = function(){
		document.getElementById('sfechar').innerText = "Introduzca la fecha de recepción";
	};
	document.getElementById('fechar').onblur = function(){
        document.getElementById('sfechar').innerText = "";
        er = /^[0-9\-]{8,14}$/;
		r = validarkeyup(er,this,document.getElementById('sfechar'),"La fecha está vacía");
	};
	
    
    
    
	document.getElementById('monto').maxLength = 18;
	document.getElementById('monto').onkeypress = function(e){
		er = /^[0-9\.]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('monto').onfocus = function(){	
		document.getElementById('smonto').innerText = "Ingrese el monto";
	};
	document.getElementById('monto').onblur = function(){
		document.getElementById('smonto').innerText = "";
	};
	document.getElementById('monto').onkeyup = function(){
		er = /^[0-9]{1,15}[\.]{0,1}[0-9]{0,2}$/;
		r = validarkeyup(er,this,document.getElementById('smonto'),"El monto es incorrecto");
	}
	document.getElementById('cantidad').maxLength = 11;
	document.getElementById('cantidad').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('cantidad').onfocus = function(){	
		document.getElementById('scantidad').innerText = "Ingrese la cantidad";
	};
	document.getElementById('cantidad').onblur = function(){
		document.getElementById('scantidad').innerText = "";
	};
	document.getElementById('cantidad').onkeyup = function(){
		er = /^[0-9]{1,11}$/;
		r = validarkeyup(er,this,document.getElementById('scantidad'),"La cantidad es incorrecta");
	}

	document.getElementById('costo').maxLength = 18;
	document.getElementById('costo').onkeypress = function(e){
		er = /^[0-9\.]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('costo').onfocus = function(){	
		document.getElementById('scosto').innerText = "Ingrese el costo";
	};
	document.getElementById('costo').onblur = function(){
		document.getElementById('scosto').innerText = "";
	};
	document.getElementById('costo').onkeyup = function(){
		er = /^[0-9]{1,15}$/;
		r = validarkeyup(er,this,document.getElementById('scosto'),"El costo es incorrecto");
	}
    
    document.getElementById('color').maxLength = 100;
	document.getElementById('color').onkeypress = function(e){
		
		er = /^[A-Za-z\s]*$/; 
		
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('color').onfocus = function(){
		
		document.getElementById('scolor').innerText = "Introduzca el color";
	};
	
	
	document.getElementById('color').onblur = function(){
		document.getElementById('scolor').innerText = "";
	};
	
	document.getElementById('color').onkeyup = function(){
		er = /^[A-Za-z\s]{3,100}$/;
		r = validarkeyup(er,this,document.getElementById('scolor'),"Introduzca el color");
	}
    
    document.getElementById('cproveedor').maxLength = 11;
	document.getElementById('cproveedor').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('cproveedor').onfocus = function(){	
		document.getElementById('scproveedor').innerText = "Ingrese el código del proveedor";
	};
	document.getElementById('cproveedor').onblur = function(){
		document.getElementById('scproveedor').innerText = "";
	};
	document.getElementById('cproveedor').onkeyup = function(){
		er = /^[0-9]{4,11}$/;
		r = validarkeyup(er,this,document.getElementById('scproveedor'),"El código del proveedor es incorrecta");
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
			 datos.append('codigo',$("#codigo").val());
             datos.append('recepcion',$("#recepcion").val());
             datos.append('fechar',$("#fechar").val());
             datos.append('monto',$("#monto").val());
             datos.append('cantidad',$("cantidad").val());
             datos.append('costo',$("#costo").val());
           datos.append('color',$("#color").val());
			 datos.append('cproveedor',$("#cproveedor").val());
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
			datos.append('codigo',$("#codigo").val());
             datos.append('recepcion',$("#recepcion").val());
             datos.append('fechar',$("#fechar").val());
             datos.append('monto',$("#monto").val());
             datos.append('cantidad',$("cantidad").val());
             datos.append('costo',$("#costo").val());
           datos.append('color',$("#color").val());
			 datos.append('cproveedor',$("#cproveedor").val());
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
        datos.append('codigo',$("#codigo").val());
             datos.append('recepcion',$("#recepcion").val());
             datos.append('fechar',$("#fechar").val());
             datos.append('monto',$("#monto").val());
             datos.append('cantidad',("$cantidad").val());
             datos.append('costo',$("#costo").val());
           datos.append('color',$("#color").val());
			 datos.append('cproveedor',$("#cproveedor").val());
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
	$("#codigo").val('');
    $("#recepcion").val('');
	$("#fechar").val('');
	$("#monto").val('');
	$("#cantidad").val('');
    $("#costo").val('');
    $("#color").val('');
	$("#cproveedor").val('');
}

function valida_datos(){ 
	var error = '';
	er = /^[0-9]{4,100}$/;
    r = validarkeyup(er,document.getElementById('codigo'),document.getElementById('scodigo'),"El código del material está vacío");
    if(r==0){ 
        error = "ERROR EN CÓDIGO DEL MATERIAL, campo obligatorio";   
        return error; 	
    }
	
	er = /^[0-9]{1,11}$/; 
	r = validarkeyup(er,document.getElementById('recepcion'),document.getElementById('srecepcion'),"Solo números, máximo 11 caracteres");
	if(r==0){ 
	   error = "ERROR EN NÚMERO DE RECEPCIÓN, Solo números, máximo 11 caracteres";   
	   return error;	
	}
	er = /^[0-9\-]{8,14}$/;
	r = validarkeyup(er,document.getElementById('fechar'),document.getElementById('sfechar'),"La fecha está vacía");
	if(r==0){ 
	   error = "ERROR EN FECHA, campo obligatorio";   
	   return error;	
	}
	er = /^[0-9]{1,15}[\.]{0,1}[0-9]{0,2}$/;
	r = validarkeyup(er,document.getElementById('monto'),document.getElementById('smonto'),"El monto es incorrecto");
	if(r==0){ 
	   error = "ERROR EN MONTO, campo obligatorio";   
	   return error;	
	}
	er = /^[0-9]{1,11}$/;
	r = validarkeyup(er,document.getElementById('cantidad'),document.getElementById('scantidad'),"La cantidad es incorrecta");
	if(r==0){ 
	   error = "ERROR EN CANTIDAD, campo obligatorio";   
	   return error;	
	}
	er = /^[0-9]{1,15}[\.]{0,1}[0-9]{0,2}$/;
	r = validarkeyup(er,document.getElementById('costo'),document.getElementById('scosto'),"El monto es incorrecto");
	if(r==0){ 
	   error = "ERROR EN COSTO, campo obligatorio";   
	   return error;	
	}

	er = /^[A-Za-z\s]{3,100}$/; 
	r = validarkeyup(er,document.getElementById('color'),document.getElementById('scolor'),"Introduzca el color");
	if(r==0){ 
	   error = "ERROR EN COLOR, campo obligatorio";   
	   return error;	
	}
    er = /^[0-9]{4,100}$/;
    r = validarkeyup(er,document.getElementById('cproveedor'),document.getElementById('scproveedor'),"El código del proveedor está vacío");
    if(r==0){ 
        error = "ERROR EN CÓDIGO DEL PROVEEDOR, campo obligatorio";   
        return error; 	
    }
	
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