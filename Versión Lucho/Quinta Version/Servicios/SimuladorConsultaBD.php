<?php
$id = $_GET["id"];
$enchufeBD = mysqli_connect("localhost", "root", "", "dh");
$consulta = "SELECT CA.idCompAmb,CA.componenteId,CA.estadoCompo FROM compoxamb as CA where componenteId = '".$id."' order by CA.idCompAmb desc LIMIT 0,1";
$crearConsulta = mysqli_query($enchufeBD, $consulta);
$cantidadFilas = mysqli_num_rows($crearConsulta);
$temporal;
while ($cantidadRegistros = mysqli_fetch_array($crearConsulta)) {
     echo '_' . $cantidadRegistros[0] . '_' . $cantidadRegistros[1] . '_' . $cantidadRegistros[2] . '_';
    
}
?>