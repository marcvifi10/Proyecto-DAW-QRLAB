<?php

$host = '172.17.100.6';
$user = 'usuari_bd';
$pwd = 'Quimica@2018';
$database = 'qrlab';

	$consulta_tipus = new mysqli($host,$user,$pwd,$database);
	$valors = '';
	$consulta = "SELECT * FROM tipus_subs";
	$result = $consulta_tipus->query($consulta);
	while($row = mysqli_fetch_assoc($result))
	{
		$valors .= '<option value="'.utf8_encode($row['id']).'">'.utf8_encode($row['nom']).'</option>';
	}
	echo $valors;
?>