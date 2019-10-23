//Se importa la libreria que nos permite enlazar todas las vistas
import { createStackNavigator, createAppContainer } from "react-navigation";

//Se importan las vistas que se pretenden enlazar
import Login from "./Vista/Login";
import InterfazPrincipalS from "./Vista/InterfazPrincipalS";
import Ambientes from "./Vista/Ambientes";
import Componentes from "./Vista/Componentes";
import CrearAmbientes from "./Vista/CrearAmbientes";
import EditarAmbientes from "./Vista/EditarAmbientes";
import Especimen from "./Vista/Especimen";
import Usuarios from "./Vista/Usuarios";


//Se determina que las rutas que se importaron seran pantallas a mostrar posteriormente
const Rutas = createStackNavigator({

  /*
	Login: { screen: Login },
	*/
  InterfazPrincipalS: { screen: InterfazPrincipalS },
  Ambientes: { screen: Ambientes },
  CrearAmbientes: { screen: CrearAmbientes },
  EditarAmbientes: { screen: EditarAmbientes },
  Componentes: { screen: Componentes },
  Especimen: { screen: Especimen },
  Usuarios: { screen: Usuarios },
});

//La constante App creara un contenedor para mostrar las vistas cuando sean solicitadas
const App = createAppContainer(Rutas);
export default App;
