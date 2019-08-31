<?php
require 'config.php';
require_once 'funcions.php';
require_once 'usuariModel.php';

if($_POST)
{
	$nom = $_POST['nom_usuari'];
	$passw = $_POST['contrasenya_usuari'];
	$codi = $_POST['codi_usuari'];
	$actiu = intval($_POST['actiu_usuari']);
	$user_add = new usuariModel($connexio);
	$resultat = $user_add->afegirUsuari($codi,$nom,$passw,$actiu);
	if($resultat)
	{
		header('Location:/usuaris.php?result="'.$resultat.'"');
	}
	else
	{
		header('Location:/usuaris.php?result="0"');
	}
}
else
{
	header('Location:/usuaris.php?result="0"');
}
?>
<?php
  mysqli_close($connexio);
?>
