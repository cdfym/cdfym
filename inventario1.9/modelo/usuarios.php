<?php

require_once('modelo/datos.php');



class usuarios extends datos{
	
	
	private $cedula; 
	private $usuario;
	private $clave;
	
	//SET
	
	function set_cedula($valor){
		$this->cedula = $valor; 
	}
	
	
	function set_usuario($valor){
		$this->usuario = $valor;
	}
	
	function set_clave($valor){
		$this->clave = $valor;
	}
	
	//GET
	
	function get_cedula(){
		return $this->cedula;
	}
	
	function get_clave(){
		return $this->clave;
	}
	
	function get_usuario(){
		return $this->usuario;
	}
	
	
	
	function incluir(){
		/**
		$co = $this->conecta();
		$co->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		
		try {
				$co->query("Insert into usuarios(
					cedula,
					usuario,
					clave
					)
					Values(
					'$this->cedula',
					'$this->usuario',
					'$this->clave'
					)");
					return "Registro incluido";
		} catch(Exception $e) {
			return $e->getMessage();
		}
		**/
		//Listo eso es todo y es igual para el resto de las operaciones
		//incluir, modificar y eliminar
		//solo cambia para buscar pero eso lo veremos la proxima clase
	
		
		
		
	}
	
	function modificar(){
		
		/**
		$co = $this->conecta();
		$co->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		//2 Se ejecuta el sql
		try {
				$co->query("Update usuarios set 
					usuario = '$this->usuario',
					clave = '$this->clave'
					where
					cedula = '$this->cedula'
					");
					return "Registro Modificado";
		} catch(Exception $e) {
			return $e->getMessage();
		}
		**/
		
	}
	
	function eliminar(){
		/**
		$co = $this->conecta();
		$co->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		
		try {
				$co->query("Delete from usuarios 
					where
					cedula = '$this->cedula'
					");
					return "Registro Eliminado";
		} catch(Exception $e) {
			return $e->getMessage();
		}
		**/
	}

	function consultar(){
		/**
		$co = $this->conecta();
		$co->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		try{
			
			$resultado = $co->query("Select * from usuarios");
			
			if($resultado){
				
				$respuesta = '';
				foreach($resultado as $r){
					$respuesta = $respuesta."<tr>";
						$respuesta = $respuesta."<td>";
							$respuesta = $respuesta.$r['cedula'];
						$respuesta = $respuesta."</td>";
						$respuesta = $respuesta."<td>";
							$respuesta = $respuesta.$r['usuario'];
						$respuesta = $respuesta."</td>";
						$respuesta = $respuesta."<td>";
							$respuesta = $respuesta.$r['clave'];
						$respuesta = $respuesta."</td>";
					$respuesta = $respuesta."</tr>";
				}
				return $respuesta;
			    
			}
			else{
				return '';
			}
			
		}catch(Exception $e){
			return $e->getMessage();
		}
		**/
		return '';
		
	}
	
}
?>