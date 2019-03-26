<?php

try {

	$nombre = $_GET["n"];
	$capacidadAprendices = $_GET["cA"];
	$foo = array(1);

	$datosConexion = new mysqli("localhost", "root", "", "dh");;
	$consulta = "INSERT INTO `Ambiente` (`idAmbiente`, `nombre`, `capacidadAprendices`) VALUES (NULL, '".$nombre."', '".$capacidadAprendices."');";
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
