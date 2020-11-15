document.onload= carga();

function carga(){
    document.getElementById('usuario').maxLength = 12;
	document.getElementById('usuario').onkeypress = function(e){
	
		er = /^[0-9A-Za-z-_.#]*$/; 
		validarkeypress(er,e);
		
	};
	
	
	document.getElementById('usuario').onfocus = function(){
		document.getElementById('susuario').innerText = "Solo numeros, letras y - _ . o # entre 8 y 12 caracteres ";
	};
	
	
	document.getElementById('usuario').onblur = function(){
		document.getElementById('susuario').innerText = "";
	};
	
	
	document.getElementById('usuario').onkeyup = function(){
		er = /^[0-9A-Za-z-_.#]{8,12}$/;
		r = validarkeyup(er,this,document.getElementById('susuario'),"Solo numeros, letras y - _ . o # entre 8 y 12 caracteres ");
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