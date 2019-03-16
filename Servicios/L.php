<?php

try {

	$usuario = $_GET["usuario"];
	$codigo = $_GET["codigo"];

	$datosConexion = new mysqli("localhost", "id7907676_alemupx", "Luis1118311424", "id7907676_base_datos");
	$consulta = "SELECT U.rol, U.usuario, U.codigo from Usuario U where U.usuario='".$usuario."' and U.codigo='".$codigo."'"; 
	$arreglo = array();


	if ($resultado = $datosConexion->query($consulta)) {
		$arregloTemporal = array();

		while($fila = $resultado->fetch_object()) {

			$arregloTemporal = $fila;
			array_push($arreglo, $arregloTemporal);
		}

		echo json_encode($arreglo);
		

	}

} catch (Exception $e) {
	echo 'Excepción capturada:"';
}

$resultado->close();
$datosConexion->close();
?>
