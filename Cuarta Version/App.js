
//Se importa la libreria que nos permite enlazar todas las vistas
import { createStackNavigator, createAppContainer } from 'react-navigation';

//Se importan las vistas que se pretenden enlazar
import Login from './Vista/Login';
import InterfazPrincipalA from './Vista/InterfazPrincipalA';
import InterfazPrincipalI from './Vista/InterfazPrincipalI';
import InterfazPrincipalS from './Vista/InterfazPrincipalS';
import Ambientes from './Vista/Ambientes';
import CrearAmbientes from './Vista/CrearAmbientes';
import CrearUsuarios from './Vista/CrearUsuarios';
import Usuarios from './Vista/Usuarios';


{/*
import Componentes from './Vista/Componentes';
import Eventos from './Vista/Eventos';
import Horarios from './Vista/Horarios';
import Especimen from './Vista/Especimen';
*/}

//Se determina que las rutas que se importaron seran pantallas a mostrar posteriormente
const Rutas = createStackNavigator({
	
	/*Login: { screen: Login },
	InterfazPrincipalA: { screen: InterfazPrincipalA },
	InterfazPrincipalI: { screen: InterfazPrincipalI },
	*/
	
	InterfazPrincipalS: { screen: InterfazPrincipalS},
	Ambientes: { screen: Ambientes },
	CrearAmbientes: { screen: CrearAmbientes },
	Usuarios: { screen: Usuarios },
	CrearUsuarios: { screen: CrearUsuarios },

  });

  {/*
  Componentes: { screen: Componentes },
  Eventos: { screen: Eventos },
  Horarios: { screen: Horarios },
  Especimen: {screen: Especimen},
*/}



//La constante App creara un contenedor para mostrar las vistas cuando sean solicitadas
const App = createAppContainer(Rutas);
export default App;
