<?php
require 'config.php';
require_once 'substanciaModel.php';

if($_POST)
{
	$nom = $_POST['nom_sub'];
	$tipus = ($_POST['tipus_sub']) ? $_POST['tipus_sub'] : 'NULL' ;
	$cas= ($_POST['cas_sub']) ? $_POST['cas_sub'] : 'NULL' ;
	$puresa= ($_POST['puresa_sub']) ? $_POST['puresa_sub'] : 'NULL' ;
	$formula= ($_POST['formula_sub']) ? $_POST['formula_sub'] : 'NULL' ;
	$imatge= ($_POST['imatge_sub']) ? $_POST['imatge_sub'] : 'NULL' ;
	$u_min= ($_POST['u_min_sub']) ? $_POST['u_min_sub'] : 'NULL' ;
	$u_estoc= ($_POST['u_estoc_sub']) ? $_POST['u_estoc_sub'] : 'NULL' ;
	$qtat= ($_POST['quantitat_sub']) ? $_POST['quantitat_sub'] : 'NULL' ;
	$magnitut= ($_POST['magnitut_sub']) ? $_POST['magnitut_sub'] : 'NULL' ;

	$subs_mod = new substanciaModel($connexio);
	$resultat = $subs_mod->afegeixSubstancia($nom,$tipus,$cas,$puresa,$formula,$imatge,$u_min,$u_estoc,$qtat,$magnitut);
	header('Location:/substancia.php?result="'.$resultat.'"');
}
else
{
	header('Location:/substancia.php?result="0"');
}
?>
<?php
  mysqli_close($connexio);
?>
