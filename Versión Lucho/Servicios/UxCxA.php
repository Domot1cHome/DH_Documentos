<?php


$componente = $_GET["c"];
$estadoComponente = $_GET["eC"];

$datosConexion = new mysqli("localhost", "id7907676_alemupx", "Luis1118311424", "id7907676_base_datos");
$consulta = "UPDATE `compoxamb` SET `estadoCompo` = '".$estadoComponente."' WHERE `compoxamb`.`idCompAmb` = '".$componente."' "; 
$resultado = $datosConexion->query($consulta);
	
if($resultado==1){

	$foo=[true];
	echo json_encode($foo);

}else{
	
	$foo=[false];
	echo json_encode($foo);

}


?>
