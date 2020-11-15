document.onload = carga();

function carga(){
    document.getElementById('codigomerc').maxLength = 11;
	document.getElementById('codigomerc').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('codigomerc').onfocus = function(){	
		document.getElementById('scodigomerc').innerText = "Ingrese el código del producto";
	};
	document.getElementById('codigomerc').onblur = function(){
		document.getElementById('scodigomerc').innerText = "";
	};
	document.getElementById('codigomerc').onkeyup = function(){
		er = /^[0-9]{4,11}$/;
		r = validarkeyup(er,this,document.getElementById('scodigomerc'),"El código del producto es incorrecta");
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
		er = /^[A-Za-z\s]{2,20}$/;
		r = validarkeyup(er,this,document.getElementById('snombre'),"Introduzca sus nombres");
    }
    
        
    
    document.getElementById('disponibilidad').maxLength = 11;
	document.getElementById('disponibilidad').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('disponibilidad').onfocus = function(){	
		document.getElementById('sdisponibilidad').innerText = "Ingrese la disponibilidad";
	};
	document.getElementById('disponibilidad').onblur = function(){
		document.getElementById('sdisponibilidad').innerText = "";
	};
	document.getElementById('disponibilidad').onkeyup = function(){
		er = /^[0-9]{1,11}$/;
		r = validarkeyup(er,this,document.getElementById('sdisponibilidad'),"La disponibilidad es incorrecta");
	}
	
    document.getElementById('stockmin').maxLength = 11;
	document.getElementById('stockmin').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('stockmin').onfocus = function(){	
		document.getElementById('sstockmin').innerText = "Ingrese el número de Stock Mínimo";
	};
	document.getElementById('stockmin').onblur = function(){
		document.getElementById('sstockmin').innerText = "";
	};
	document.getElementById('stockmin').onkeyup = function(){
		er = /^[0-9]{1,11}$/;
		r = validarkeyup(er,this,document.getElementById('sstockmin'),"La cantidad es incorrecta");
	}
    
    
    document.getElementById('stockmax').maxLength = 11;
	document.getElementById('stockmax').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('stockmax').onfocus = function(){	
		document.getElementById('sstockmax').innerText = "Ingrese el número de Stock Máximo";
	};
	document.getElementById('stockmax').onblur = function(){
		document.getElementById('sstockmax').innerText = "";
	};
	document.getElementById('stockmax').onkeyup = function(){
		er = /^[0-9]{1,11}$/;
		r = validarkeyup(er,this,document.getElementById('sstockmax'),"La cantidad es incorrecta");
	}
    
    
    
    document.getElementById('precio').maxLength = 12;
	document.getElementById('precio').onkeypress = function(e){
		er = /^[0-9.]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('precio').onfocus = function(){	
		document.getElementById('sprecio').innerText = "Ingrese el precio del producto";
	};
	document.getElementById('precio').onblur = function(){
		document.getElementById('sprecio').innerText = "";
	};
	document.getElementById('precio').onkeyup = function(){
		er = /^[0-9.]{1,11}$/;
		r = validarkeyup(er,this,document.getElementById('sprecio'),"El precio es incorrecta");
	}
	

    
    document.getElementById('descripcion').maxLength = 100;
    document.getElementById('descripcion').onkeypress = function(e){
		er = /^[A-Za-z0-9\s]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('descripcion').onfocus = function(){
        document.getElementById('sdescripcion').innerText = "Introduzca la descripcion";
	};	
	document.getElementById('descripcion').onblur = function(){
		document.getElementById('sdescripcion').innerText = "";
	};
	document.getElementById('descripcion').onkeyup = function(){
		er = /^[A-Za-z0-9\s]{1,100}$/;
		r = validarkeyup(er,this,document.getElementById('sdescripcion'),"Introduzca la descripción");
    }
    
    
    
    document.getElementById('presentacion').maxLength = 100;
    document.getElementById('presentacion').onkeypress = function(e){
		er = /^[A-Za-z0-9\s]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('presentacion').onfocus = function(){
        document.getElementById('spresentacion').innerText = "Introduzca la descripcion";
	};	
	document.getElementById('presentacion').onblur = function(){
		document.getElementById('spresentacion').innerText = "";
	};
	document.getElementById('presentacion').onkeyup = function(){
		er = /^[A-Za-z0-9\s]{1,100}$/;
		r = validarkeyup(er,this,document.getElementById('spresentacion'),"Introduzca la presentacion");
    }
    
    
    
    document.getElementById('codigomaterial').maxLength = 11;
	document.getElementById('codigomaterial').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('codigomaterial').onfocus = function(){	
		document.getElementById('scodigomaterial').innerText = "Ingrese el código del producto";
	};
	document.getElementById('codigomaterial').onblur = function(){
		document.getElementById('scodigomaterial').innerText = "";
	};
	document.getElementById('codigomaterial').onkeyup = function(){
		er = /^[0-9]{4,11}$/;
		r = validarkeyup(er,this,document.getElementById('scodigomaterial'),"El código del producto es incorrecta");
	}
    
    
    
    document.getElementById('cantidad').maxLength = 11;
	document.getElementById('cantidad').onkeypress = function(e){
		er = /^[0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('cantidad').onfocus = function(){	
		document.getElementById('scantidad').innerText = "Ingrese la cantidad del producto";
	};
	document.getElementById('cantidad').onblur = function(){
		document.getElementById('scantidad').innerText = "";
	};
	document.getElementById('cantidad').onkeyup = function(){
		er = /^[0-9]{1,11}$/;
		r = validarkeyup(er,this,document.getElementById('scantidad'),"La cantidad del producto es incorrecta");
	}
    
    
    document.getElementById('medida').maxLength = 11;
	document.getElementById('medida').onkeypress = function(e){
		er = /^[A-Za-z0-9]*$/; 
		validarkeypress(er,e);
	};
	document.getElementById('medida').onfocus = function(){	
		document.getElementById('smedida').innerText = "Ingrese la medida del producto";
	};
	document.getElementById('medida').onblur = function(){
		document.getElementById('smedida').innerText = "";
	};
	document.getElementById('medida').onkeyup = function(){
		er = /^[A-Za-z0-9]{1,11}$/;
		r = validarkeyup(er,this,document.getElementById('smedida'),"La medida del producto es incorrecta");
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
			 datos.append('fechaadq',$("#fechaadq").val());
             datos.append('codigomerc',$("#codigomerc").val());
             datos.append('tipo',$("#tipo").val());
        datos.append('presentacion',$("#presentacion").val());
             datos.append('nombre',$("#nombre").val());
             datos.append('descripcion',$("#descripcion").val());
            datos.append('color',$("#color").val());
            datos.append('cantidad',$("#cantidad").val());
            datos.append('precio',$("#precio").val());
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
			 datos.append('fechaadq',$("#fechaadq").val());
             datos.append('codigomerc',$("#codigomerc").val());
             datos.append('tipo',$("#tipo").val());
             datos.append('presentacion',$("#presentacion").val());
             datos.append('nombre',$("#nombre").val());
             datos.append('descripcion',$("#descripcion").val());
            datos.append('color',$("#color").val());
            datos.append('cantidad',$("#cantidad").val());
            datos.append('precio',$("#precio").val());
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
        datos.append('fechaadq',$("#fechaadq").val());
        datos.append('codigomerc',$("#codigomerc").val());
        datos.append('tipo',$("#tipo").val());
        datos.append('presentacion',$("#presentacion").val());
        datos.append('nombre',$("#nombre").val());
        datos.append('descripcion',$("#descripcion").val());
        datos.append('color',$("#color").val());
        datos.append('cantidad',$("#cantidad").val());
        datos.append('precio',$("#precio").val());
        enviaAjax(datos);
		**/
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
	$("#codigomerc").val('');
    $("#nombre").val('');
	$("#disponibilidad").val('');
	$("#stockmin").val('');
	$("#stockmax").val('');
	$("#precio").val('');
	$("#descripcion").val('');
    $("#presentacion").val('');
    $("#codigomaterial").val('');
    $("#cantidad").val('');
    $("#medida").val('');
    $("#color").val('');
}

function valida_datos(){ 
	var error = '';
    
    er = /^[0-9\-]{4,100}$/;
    r = validarkeyup(er,document.getElementById('codigomerc'),document.getElementById('scodigomerc'),"El código de la mercancía está vacío");
    if(r==0){ 
        error = "ERROR EN CÓDIGO DEL PRODUCTO, campo obligatorio";   
        return error; 	
    }
	
    er = /^[A-Za-z\s]{2,20}$/;  
	r = validarkeyup(er,document.getElementById('nombre'),document.getElementById('snombre'),"");
	if(r==0){  
	   error = "ERROR EN NOMBRE, campo obligatorio";
	   return error; 
    }
    er = /^[0-9]{1,100}$/;  
	r = validarkeyup(er,document.getElementById('disponibilidad'),document.getElementById('sdisponibilidad'),"");
	if(r==0){  
	   error = "ERROR EN DISPONIBILIDAD, campo obligatorio";
	   return error; 
    }
   
    er = /^[0-9]{1,100}$/;  
	r = validarkeyup(er,document.getElementById('stockmin'),document.getElementById('sstockmin'),"");
	if(r==0){  
	   error = "ERROR EN STOCK MÍNIMO, campo obligatorio";
	   return error; 
    }
    
    er = /^[0-9]{1,100}$/;  
	r = validarkeyup(er,document.getElementById('stockmax'),document.getElementById('sstockmax'),"");
	if(r==0){  
	   error = "ERROR EN STOCK MÁXIMO, campo obligatorio";
	   return error; 
    }
    
    er = /^[0-9.]{1,12}$/;
    r = validarkeyup(er,document.getElementById('precio'),document.getElementById('sprecio'),"El precio del producto está vacío");
    if(r==0){ 
        error = "ERROR  EN PRECIO, campo obligatorio";   
        return error; 	
    }
    er = /^[A-Za-z0-9\-]{1,100}$/;
    r = validarkeyup(er,document.getElementById('descripcion'),document.getElementById('sdescripcion'), "La descripción de la mercancía está vacía");
    if(r==0){ 
        error = "ERROR EN DESCRIPCION, campo obligatorio";   
        return error; 	
    }
    er = /^[A-Za-z0-9\-]{1,100}$/;
    r = validarkeyup(er,document.getElementById('presentacion'),document.getElementById('spresentacion'),"La presentacion de la mercancía está vacía");
    if(r==0){ 
        error = "ERROR EN PRESENTACIÓN, campo obligatorio";   
        return error; 	
    }
    er = /^[0-9]{4,100}$/;
    r = validarkeyup(er,document.getElementById('codigomaterial'),document.getElementById('scodigomaterial'),"El codigo del material está vacío");
    if(r==0){ 
        error = "ERROR EN CÓDIGO DEL MATERIAL, campo obligatorio";   
        return error; 	
    }
    
    er = /^[0-9]{1,100}$/;
    r = validarkeyup(er,document.getElementById('cantidad'),document.getElementById('scantidad'),"La cantidad del material está vacía");
    if(r==0){ 
        error = "ERROR EN CANTIDAD, campo obligatorio";   
        return error; 	
    }
    
    er = /^[A-Za-z0-9]{1,100}$/;
    r = validarkeyup(er,document.getElementById('medida'),document.getElementById('smedida'),"La madedia del material está vacía");
    if(r==0){ 
        error = "ERROR EN MEDIDA DEL PRODUCTO, campo obligatorio";   
        return error; 	
    }
    
    er = /^[A-Za-z]{4,100}$/;
    r = validarkeyup(er,document.getElementById('color'),document.getElementById('scolor'),"El color del producto está vacío");
    if(r==0){ 
        error = "ERROR EN COLOR DEL PRODUCTO, campo obligatorio";   
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