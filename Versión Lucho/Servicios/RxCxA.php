<?php

$datosConexion = new mysqli("localhost", "id7907676_alemupx", "Luis1118311424", "id7907676_base_datos");
$consulta = "SELECT CA.idCompAmb,CA.componenteId,CA.estadoCompo FROM compoxamb as CA order by CA.idCompAmb desc"; 
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
