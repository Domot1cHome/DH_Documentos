<?php

try {

	
	$componente = $_GET["c"];

	$estadoComponente = $_GET["eC"];

	$foo = array(1);

	$datosConexion = new mysqli("localhost", "root", "", "dh");

	$consulta = "INSERT INTO `compoxamb` (`idCompAmb`, `ambienteId`, `componenteId`, `perfilId`, `estadoCompo`) VALUES (NULL, '1', '".$componente."', NULL, '".$estadoComponente."')";

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





