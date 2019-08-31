<?php require_once 'model.php'; class LocalitzacioModel extends Model {
	function __construct($conexio)
	{
		$this->taula_actual = 'localitzacio';
		$this->connection = $conexio;
	}

	public function afegeixLocalitzacio($nom,$codiOnEsTroba,$idL=0)
	{
		$afegir_sql = "INSERT INTO " .$this->taula_actual. "
		(nom,idL,codi) VALUES
		('$nom',$idL,'$codiOnEsTroba');
		";
		$resultat = $this->connection->query($afegir_sql);
		return $resultat;
	}

	public function ConsultaLocalitzacio()
       	{
                $consulta_sql = "SELECT nom FROM localitzacio";
                $resultat = $this->connection->query($consulta_sql);
                return $resultat;
        }

	public function eliminaLocalitzacio($codi)
	{
		$eliminar_sql = "DELETE FROM ". $this->taula_actual. " WHERE codi=".$codi.";";
		$resultat = $this->connection->query($eliminar_sql);
		return $resultat;
	}

	public function modificaLocalitzacio($id,$codi,$nom,$codiOnEsTroba,$idLoc=0)
	{
		$modificar_sql = "UPDATE " . $this->taula_actual . " SET codi = '$codi' , nom = '$nom' , idLoc = $idLoc , codi = '$codi' ";
		$resultat = $this->connection->query($modificar_sql);
		return $resultat;
	}

	public function mostraLocalitzacionsNivell1()
	{
		$nivell_loc_sql = "SELECT * FROM ".$this->taula_actual." WHERE id=0";
		$resultat = $this->connection->query($nivell_loc_sql);
		return $resultat;
	}

	public function teSublocalitzacio($id)
	{
		$te_subloc_sql = "SELECT count(*) FROM ".$this->taula_actual." WHERE idLoc=".$id.";";
		$resultat = $this->connection->query($te_subloc_sql);
		return $resultat;
	}
}
?>
