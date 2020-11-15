<?php


class Usuario extends Persona{

    private $usuario;
    private $clave;
    private $rol;
    private $visibilidad;

    public function __construct(){
    }

    public function getUsuario(){
        return $this->usuario;
    }

    public function setUsuario($usuario){
        $this->usuario = $usuario;
    }
    
    public function getClave(){
        return $this->clave;
    }


    public function setClave($clave){
        $this->clave = $clave;
    }

    public function getRol(){
        return $this->rol;
    }

    public function setRol($rol){
        $this->rol = $rol;
    }
    public function getVisibilidad(){
        return $this->visibilidad;
    }

    public function setVisibilidad($visibilidad){
        $this->visibilidad = $visibilidad;
    }

    public function listar(){
        try{
            $consulta = parent::connect()->prepare("SELECT * FROM usuarios");

            $consulta->execute();
            
            return $consulta->fetchAll(PDO::FETCH_OBJ);
            
        } catch (Exception $ex) {
            die($ex->getMessage());
        }
    }

    public function registrar(Usuario $usuario){
        try{

            $dbh = parent::connect();

            $consulta = $dbh->prepare("INSERT INTO usuarios(rol,documento, nombre, apellido, direccion, telefono, email, usuario, password)" 
                                                            . "VALUES (:rol,:documento, :nombre, :apellido, :direccion, :telefono, :email, :usuario, :password)");

            $documento = $usuario->getTipoDocumento()."-".$usuario->getDocumento();
            $nombre = $usuario->getNombre();
            $apellido = $usuario->getApellido();
            $direccion = $usuario->getDireccion();
            $telefono = $usuario->getTelefono();
            $email = $usuario->getEmail();
            $usuario_name = $usuario->getUsuario();
            $password = $usuario->getPassword();
            $rol = $usuario->getRolId();

            $consulta->bindParam(":rol", $rol);
            $consulta->bindParam(":documento", $documento);
            $consulta->bindParam(":nombre", $nombre);
            $consulta->bindParam(":apellido", $apellido);
            $consulta->bindParam(":direccion", $direccion);
            $consulta->bindParam(":telefono", $telefono);
            $consulta->bindParam(":email", $email);
            $consulta->bindParam(":usuario", $usuario_name);
            $consulta->bindParam(":password", $password);

            return $consulta->execute();

        }catch(Exception $ex){
            $this->error = $ex->getMessage();
            return false;
        }
    }

    public function actualizar(Usuario $u){
        try{
            $consulta = parent::connect()->prepare("UPDATE usuarios SET documento=:documento, nombre=:nombre, apellido=:apellido, direccion=:direccion, telefono=:telefono, email=:email, usuario=:usuario, password=:password, estatus=:estatus WHERE id=:id");


            $id = $u->getId();
            $documento= $u->getTipoDocumento()."-".$u->getDocumento();
            $nombre = $u->getNombre();
            $apellido = $u->getApellido();
            $direccion = $u->getDireccion();
            $telefono = $u->getTelefono();
            $email = $u->getEmail(); 
            $usuario = $u->getUsuario(); 
            $password = $u->getPassword(); 
            $estatus = "ACTIVO";
            
            $consulta->bindParam(":id", $id);
            $consulta->bindParam(":documento", $documento);
            $consulta->bindParam(":nombre", $nombre);
            $consulta->bindParam(":apellido", $apellido);
            $consulta->bindParam(":direccion", $direccion);
            $consulta->bindParam(":telefono", $telefono);
            $consulta->bindParam(":email", $email);
            $consulta->bindParam(":usuario", $usuario);
            $consulta->bindParam(":password", $password);
            $consulta->bindParam(":estatus", $estatus);

            return $consulta->execute();
                    
        } catch (Exception $ex) {
            
            // die("Error: " . $ex->getMessage());
        }
    }
}
?>