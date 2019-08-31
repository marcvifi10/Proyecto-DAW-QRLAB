<?php

$host = '172.17.100.6';
$user = 'usuari_bd';
$pwd = 'Quimica@2018';
$database = 'qrlab';

	$consulta_loc = new mysqli($host,$user,$pwd,$database);
	$valors = '';
	$consulta = "SELECT id,nom FROM localitzacio";
	$result = $consulta_loc->query($consulta);
	while($row = mysqli_fetch_assoc($result))
	{
		$valors .= '<option value="'.utf8_encode($row['id']).'">'.utf8_encode($row['nom']).'</option>';
	}
	echo $valors;

?>