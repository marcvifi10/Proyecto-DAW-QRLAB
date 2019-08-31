<?php 
require_once 'Model.php';

class proveidorModel extends Model
{
	
	function __construct($con)
	{
		$this->taula_actual = 'proveidor';
		$this->connection = $con;
	}
	public function afegirProveidor($nom)
	{
		$afegir_sql = "INSERT INTO " .$this->taula_actual. "
		(nom,actiu)
		 VALUES ('$nom',1);";
		$resultat = $this->connection->query($afegir_sql);
		return $resultat;
	}
	public function modificarProveidor($id,$nom,$actiu)
	{
		$modificar_sql = "UPDATE " . $this->taula_actual . 
		" SET nom = '$nom' , actiu =$actiu 
		WHERE id=".$id;
		$resultat = $this->connection->query($modificar_sql);	
		return $resultat;
	}
}