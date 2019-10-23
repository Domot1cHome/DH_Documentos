<?php

$datosConexion = new mysqli("localhost", "root", "", "dh");;
$consulta = "SELECT * FROM Ambiente A"; 
$arreglo = array();
if ($resultado = $datosConexion->query($consulta)) {
	$arregloTemporal = array();
	while($fila = $resultado->fetch_object()) {
		$arregloTemporal = $fila;
		array_push($arreglo, $arregloTemporal);
	}
	echo json_encode($arreglo);
}

?>
