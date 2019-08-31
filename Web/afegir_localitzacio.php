<?php
require 'config.php';
require_once 'localitzacioModel.php';

if($_POST)
{
	$codi = $_POST['codi'];
	$nom = ($_POST['nom']) ? $_POST['nom'] : 'NULL' ;
	$select_loc= ($_POST['select_loc']) ? $_POST['select_loc'] : 'NULL' ;

	$loc_mod = new localitzacioModel($connexio);
	$resultat = $loc_mod->afegeixLocalitzacio($codi,$nom,$select_loc);
	header('Location:/localitzacions.php?result="'.$resultat.'"');
}
else
{
	header('Location:/localitzacions.php?result="0"');
}
?>
<?php
  mysqli_close($connexio);
?>
