<?php

//Se crea la variable datosConexion y se inicializa como un objeto mysqli con los datos de conexión a la BD
$datosConexion = new mysqli("localhost", "id7907676_alemupx", "Luis1118311424", "id7907676_base_datos");

//Variable con la consulta
$consulta = "SELECT * FROM Ambiente A"; 

//Arreglo en donde se almacenan la lista de registros de la BD
$arreglo = array();

//Condicion que dicta la ejecución de la consulta
if ($resultado = $datosConexion->query($consulta)) {
	
	//Arreglo temporal en donde seran almacenados cada uno de los registros obtenidos de la bd
	$arregloTemporal = array();
	
	while($fila = $resultado->fetch_object()) {
		
		$arregloTemporal = $fila;
		array_push($arreglo, $arregloTemporal);
	}
	echo json_encode($arreglo);
}

?>
