<?php

	
function encriptar($pwd){
    $key='Quimica@1234';  // Clau de codificació , s'ha d'utilitzar la mateixa per encriptar i desenecriptar
    $encrypted = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, md5($key), $pwd, MCRYPT_MODE_CBC, md5(md5($key))));
    return $encrypted;
 
}
 
function desencriptar($pwd){
     $key='Quimica@1234';  // Clau de codificació , s'ha d'utilitzar la mateixa per encriptar i desenecriptar
     $decrypted = rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_256, md5($key), base64_decode($pwd), MCRYPT_MODE_CBC, md5(md5($key))), "\0");
    return $decrypted;  //Retorna un string desencriptado
}
function obtenirDades($matrix)
{
	$frase = "";
	for($i=0;$i<sizeof($matrix);$i++)
	{
		if($i==sizeof($matrix)-1)
		{
			$frase .= implode(';',$matrix[$i]);
		}
		else 
		{
			$frase .= implode(';',$matrix[$i]).'-';
		}
	}
	$frase = str_replace(';',' ',$frase);
	$frase = str_replace(',','',$frase);
	$frase = explode('-',utf8_encode($frase));
	return $frase;
}

?>