
//Se importa la libreria que nos permite enlazar todas las vistas
import { createStackNavigator, createAppContainer } from 'react-navigation';

//Se importan las vistas que se pretenden enlazar
import Login from './Vista/Login';

import InterfazPrincipalA from './Vista/InterfazPrincipalA';
import InterfazPrincipalI from './Vista/InterfazPrincipalI';
import InterfazPrincipalS from './Vista/InterfazPrincipalS';
import Ambientes from './Vista/Ambientes';
{/*
import CrearAmbientes from './Vista/CrearAmbientes';
import Componentes from './Vista/Componentes';
import Eventos from './Vista/Eventos';
import Horarios from './Vista/Horarios';
import Usuarios from './Vista/Usuarios';
import Especimen from './Vista/Especimen';
*/}

//Se determina que las rutas que se importaron seran pantallas a mostrar posteriormente
const Rutas = createStackNavigator({

  Ambientes: { screen: Ambientes },
  Login: { screen: Login },
  InterfazPrincipalA: { screen: InterfazPrincipalA },
  InterfazPrincipalI: { screen: InterfazPrincipalI },
  InterfazPrincipalS: { screen: InterfazPrincipalS },
  
  });
  {/*
  CrearAmbientes: { screen: CrearAmbientes },
  Componentes: { screen: Componentes },
  Eventos: { screen: Eventos },
  Horarios: { screen: Horarios },
  Usuarios: { screen: Usuarios },
  Especimen: {screen: Especimen},
*/}



//La constante App creara un contenedor para mostrar las vistas cuando sean solicitadas
const App = createAppContainer(Rutas);
export default App;
