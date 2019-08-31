<?php
if($_GET['loc'])
{
	$link = mysqli_connect('172.17.100.6','usuari_bd','Quimica@2018','qrlab');
	$id = $_GET['loc'];
	$sql ="SELECT * FROM envas_localitzacio WHERE idE = ".$id.";";
	$result = $link->query($sql);
	while($row = $result->fetch_assoc())
	{
		if($row)
		{
			$localitzacio = $row['idL'];
			$sql2 = "SELECT * FROM localitzacio WHERE id=".$localitzacio.";";

			$res_loc = $link->query($sql2);
			while ($row2 = $res_loc->fetch_assoc()) {
				echo $row2['nom'];
			}
		}

	}
	

}





?>