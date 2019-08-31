<?php
require_once 'model.php';
require_once 'funcions.php';

class UsuariModel extends Model
{
	
	function __construct($conexio)
	{
		$this->taula_actual ='usuari';
		$this->connection = $conexio;
	}
	public function afegirUsuari($codi,$nom,$pwd,$actiu='1')
	{
		$pwd = encriptar($pwd);
		$consulta = "
			INSERT INTO " . $this->taula_actual . "
			(codi,nom,actiu,contrasenya) VALUES
			('$codi','$nom',$actiu,'$pwd');
			";
		$result = $this->connection->query($consulta);
		return $result;
	}
	public function modificarUsuari($id,$codi,$nom,$actiu,$pwd)
	{
		$pwd = encriptar($pwd);
		$query = "
			UPDATE " . $this->taula_actual . " SET codi = '$codi' , nom = '$nom' , actiu = $actiu , contrasenya = '$pwd'
			WHERE id = $id;
		";
		$resulta = $this->connection->query($query);
		return $resulta;
	}
}
