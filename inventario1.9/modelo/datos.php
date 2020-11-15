<?php

class datos{
	private $host = "localhost";
    private $bd = "confeccionesFyM";
    private $usuario = "root";
    private $contrasena = "";
   
    
    public function __construct(){
        $this->connect();
    }
    function connect(){
        $connection = new PDO("mysql:host=".$this->host.";dbname=".$this->bd."",$this->usuario,$this->contrasena);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // echo 'Conexion exitosa';
        return $connection;
    }
}


/**
class datos
{
    
    
    private $host = "localhost";
    private $bd = "confeccionesFyM";
    private $usuario = "postgres";
    private $contrasena = "postgres";
      
    public function conecta(){





       $pdo = new PDO("pgsql:host=".$this->host.";dbname=".$this->bd."",$this->usuario,$this->contrasena);
        $pdo->exec("set names utf8");
        return $pdo;
    }**/
?>
