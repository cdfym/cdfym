document.onload = carga();

function carga(){
   document.getElementById('codigop').maxLength = 11;
    document.getElementById('codigop').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('codigop').onfocus = function(){
        document.getElementById('scodigop').innerText = "Introduzca el código del pedido";
	};
	document.getElementById('codigop').onblur = function(){
		document.getElementById('scodigop').innerText = "";
	};
	document.getElementById('codigop').onkeyup = function(){
		er = /^[0-9]$/;
		r = validarkeyup(er,this,document.getElementById('codigop'));
    }
    
    
	document.getElementById('fecha').onfocus = function(){
		document.getElementById('sfecha').innerText = "Introduzca la fecha del pedido";
	};
	
	document.getElementById('fecha').onblur = function(){
		document.getElementById('sfecha').innerText = "";
        er = /^[0-9\-]{8,14}$/;
		r = validarkeyup(er,this,document.getElementById('sfecha'),"La fecha está vacía");
	};
    
    
   document.getElementById('numerop').maxLength = 4;
	document.getElementById('numerop').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
		
	};
	
	document.getElementById('numerop').onfocus = function(){
		
		document.getElementById('snumerop').innerText = "Ingrese el número del pedido";
	};
	
	
	document.getElementById('numerop').onblur = function(){
		document.getElementById('snumerop').innerText = "";
	};
	
	
	document.getElementById('numerop').onkeyup = function(){
		er = /^[0-9]{4}$/;
		r = validarkeyup(er,this,document.getElementById('snumeroc'),"El número del pedido es incorrecto");
    }
    
    
    document.getElementById('codigoproducto').maxLength = 11;
    document.getElementById('codigoproducto').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('codigoproducto').onfocus = function(){
        document.getElementById('scodigoproducto').innerText = "Introduzca el código del producto";
	};
	document.getElementById('codigoproducto').onblur = function(){
		document.getElementById('scodigoproducto').innerText = "";
	};
	document.getElementById('codigoproducto').onkeyup = function(){
		er = /^[0-9]$/;
		r = validarkeyup(er,this,document.getElementById('codigoproducto'));
    }
    
    
    
    document.getElementById('cantidad').maxLength = 8;
    document.getElementById('cantidad').onkeypress = function(e){
		er = /^[0-9.]$/; 
		validarkeypress(er,e);
	};
	
	
	document.getElementById('cantidad').onfocus = function(){
        document.getElementById('scantidad').innerText = "Introduzca la cantidad";
	};
	
	
	document.getElementById('cantidad').onblur = function(){
		document.getElementById('scantidad').innerText = "";
	};
	
	
	document.getElementById('cantidad').onkeyup = function(){
		er = /^[0-9.]{1,8}$/;
		r = validarkeyup(er,this,document.getElementById('cantidad'));
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
             /**
			 var datos = new FormData();
			 datos.append('accion','incluir');
			 datos.append('numeroc',$("#numeroc").val());
             datos.append('fecha',$("#fecha").val());
             datos.append('usuario',$("#usuario").val());
             datos.append('codigop',$("#codigop").val());
             datos.append('cantidad',$("#cantidad").val());
			 enviaAjax(datos);
             **/
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
            /**
			 var datos = new FormData();
			 datos.append('accion','modificar');
			 datos.append('numeroc',$("#numeroc").val());
             datos.append('fecha',$("#fecha").val());
             datos.append('usuario',$("#usuario").val());
             datos.append('codigop',$("#codigop").val());
             datos.append('cantidad',$("#cantidad").val());
			 enviaAjax(datos);
              **/
			 limpia();
		}
	
}		

document.getElementById('eliminar').onclick = function(){
	        
	er = /^[0-9]{7,8}$/;;
	r = validarkeyup(er,document.getElementById('codigomerc'),document.getElementById('scodigomerc'),"Solo numeros entre 7 y 8 caracteres");
	if(r==0){ 
	    $("#contenidodemodal").html("ERROR <br/>El código es incorrecto<br/>Solo numeros entre 4 y 8 caracteres");
			   $("#mostrarmodal").modal("show");
				setTimeout(function() {
					$("#mostrarmodal").modal("hide");
	    },4000);
	}
	else{
        /**
		var datos = new FormData();
        datos.append('accion','eliminar');
        datos.append('numeroc',$("#numeroc").val());
        datos.append('fecha',$("#fecha").val());
        datos.append('usuario',$("#usuario").val());
        datos.append('codigop',$("#codigop").val());
        datos.append('cantidad',$("#cantidad").val());
         **/
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
    $("#modal1").modal("show");
    /**
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
     **/
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
    $("#fecha").val('');
	$("#numerop").val('');
	$("#codigoproducto").val('');
	$("#cantidad").val('');
    $("#color").val('');
}

function valida_datos(){ 
	var error = '';
    er = /^[0-9]{4,100}$/;
    r = validarkeyup(er,document.getElementById('codigop'),document.getElementById('scodigop'),"El codigo del pedido está vacío");
    if(r==0){ 
        error = "ERROR EN CÓDIGO DEL PEDIDO, campo obligatorio";   
        return error; 	
    }
    
    er = /^[0-9\-]{8,14}$/;
    r = validarkeyup(er,document.getElementById('fecha'),document.getElementById('sfecha'),"La fecha del pedido está vacía");
    if(r==0){ 
        error = "ERROR EN FECHA DE PEDIDO, campo obligatorio";   
        return error;	
    }
    
    er = /^[0-9]{4}$/;
	r = validarkeyup(er,document.getElementById('numerop'),document.getElementById('snumerop'),"");
	if(r==0){ 
	   error = "ERROR EN NÚMERO DEL PEDIDO, campo obligatorio";
	   return error;	
	}
	
    
    er = /^[0-9]{4,100}$/;
    r = validarkeyup(er,document.getElementById('codigoproducto'),document.getElementById('scodigoproducto'),"El codigo del producto está vacío");
    if(r==0){ 
        error = "ERROR EN CÓDIGO DE PRODUCTO, campo obligatorio";   
        return error; 	
    }
    
     er = /^[0-9.]{1,8}$/;
    r = validarkeyup(er,document.getElementById('cantidad'),document.getElementById('scantidad'),"La cantidad del pedido está vacía");
    if(r==0){ 
        error = "ERROR EN CANTIDAD, campo obligatorio";   
        return error; 	
    }
    er = /^[A-Za-z\s]{3,100}$/; 
	r = validarkeyup(er,document.getElementById('color'),document.getElementById('scolor'),"Introduzca el color");
	if(r==0){ 
	   error = "ERROR EN COLOR, campo obligatorio";   
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