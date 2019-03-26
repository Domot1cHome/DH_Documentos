<?php
// http://localhost/DH/S/L.php?email=&codigo=
try {

	$email = $_GET["e"];
	$codigo = $_GET["c"];

	$consulta = "Select U.rol, U.email, U.codigo from Usuario as U where U.email='".$email."' and U.codigo='".$codigo."'";

	$datosConexion = new mysqli("localhost", "root", "", "dh");
	
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
	echo 'Excepción capturada: '.$e;
}

$resultado->close();

?>