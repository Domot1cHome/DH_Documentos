<?php

try {

	$nombre = $_GET["n"];
	$cantidadA = $_GET["cA"];
	$cantidadC = $_GET["cC"];
	$foo = array(1);

	$datosConexion = new mysqli("localhost", "id7907676_alemupx", "Luis1118311424", "id7907676_base_datos");
	$consulta = "INSERT INTO `Ambiente` (`idAmbiente`, `nombre`, `capacidadAprendices`, `capacidadComponentes`) VALUES (NULL, '".$nombre."', '".$cantidadA."', '".$cantidadC."');";
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
