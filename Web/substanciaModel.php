<?php
require_once 'model.php';

class substanciaModel extends Model
{
	
	function __construct($conexio)
	{
		$this->taula_actual = 'substancia';
		$this->connection = $conexio;
	}
	public function afegeixSubstancia($nom,$tipus,$cas='NULL',$puresa='NULL',$formula='NULL',$imatge='NULL',$u_min='NULL',$u_estoc='NULL',$qtat='NULL',$magnitut='NULL')
	{
		$afegir_sql = "INSERT INTO " .$this->taula_actual. "
		(`CAS`, `puresa`, `nom`, `formula`, `imatge`, `u_min`, `u_estoc`, `qtat`, `magnitut`, `tipus`) VALUES 
		('$cas',$puresa,'$nom','$formula','$imatge',$u_min,$u_estoc,$qtat,'$magnitut',$tipus);";
		$resultat = $this->connection->query($afegir_sql);
		return $resultat;
	}
	public function getMagnitut($idS)
	{
		$magnitut_sql = "SELECT magnitut FROM `". $this->taula_actual ."` WHERE id =".$idS;
		$resultat = $this->connection->query($magnitut_sql);
		while ($row = mysqli_fetch_assoc($resultat)) {
			return $row[0];
		}
	}

	/*
	A apartir d'aqui les funcions son de taules que enllaçen directament i depenen de Substancia
	he considerat que es podia organitzar en un sol Model per no crear 3 models amb 2 -3 funcions cada un
	*/
	
	//Funcio que mira si la substancia te frases associades 
	public function teFrases($idSubs)
	{
		$consultar_sql = "SELECT count(*) as TOTAL FROM subs_frase WHERE idS =".$idSubs.";";
		$resultat = $this->connection->query($consultar_sql);
		while($row = mysqli_fetch_assoc($resultat))
		{
			$total = $row['TOTAL'];
		}
		return intval($total) > 0;
	}
	//Funcio que mira si la substancia te pictogrames
	public function tePicto($idSubs)
	{
		$consultar_sql = "SELECT count(*) as TOTAL FROM subs_picto WHERE idS = ".$idSubs.";";
		$resultat = $this->connection->query($consultar_sql);
		while($row = mysqli_fetch_assoc($resultat))
		{
			$total = $row['TOTAL'];
		}
		return intval($total) > 0;
	}
	public function getFraseSubs($idSubs)
	{
		$rows = $this->obtenirIdF($idSubs);
		$frases = array();
		foreach ($rows as $row => $value) {
			$consulta_sql = "SELECT codi,descripcio,tipus FROM frase WHERE id =".$value.";";
			$resultat = $this->connection->query($consulta_sql);
			while ($row = mysqli_fetch_assoc($resultat)) {
				$frases[] = $row;
			}
		}
		return obtenirDades($frases);
	}
	private function obtenirIdF($idSubs)
	{
		$consultar_sql = "SELECT idF FROM subs_frase WHERE idS =".$idSubs.";";
		$valors = array();
		$resultat = $this->connection->query($consultar_sql);
		while ($row = mysqli_fetch_assoc($resultat)) {
			array_push($valors,$row['idF']);
		}
		return $valors;
	}
	public function getPictosSubs($idSubs)
	{
		$rows = $this->obtenirIdPicto($idSubs);
		$frases = array();
		foreach ($rows as $row => $value) {
			$consultar_sql = "SELECT nom,descripcio,imatge1,imatge2 FROM pictograma WHERE id = ".$value.";";
			$resultat = $this->connection->query($consultar_sql);
			while ($row = mysqli_fetch_assoc($resultat)) {
				$frases[] = $row;
			}
			
		}
		return obtenirDades($frases);
	}
	private function obtenirIdPicto($idSubs)
	{
		$consulta_sql = "SELECT idPicto FROM subs_picto WHERE idS =".$idSubs.";";
		$valors = array();
		$resultat = $this->connection->query($consulta_sql);
		while ($row = mysqli_fetch_assoc($resultat)) {
			array_push($valors,$row['idPicto']);
		}
		return $valors;
	}

}
