<?php

try {

	$id = $_GET["id"];

	$foo = array(1);

	$datosConexion = new mysqli("localhost", "root", "", "dh");;

	$consulta = "DELETE FROM `Ambiente` WHERE `Ambiente`.`idAmbiente`=".$id;
	$resultado = $datosConexion->query($consulta);

	if($resultado==1){

		
		$foo=[true];
		echo json_encode($foo);
		
	}else{

	
		$foo=[false];
		echo json_encode($foo);
		
	}

} catch (Exception $e) {
	echo 'Excepción capturada:"';
}


$datosConexion->close();
?>
