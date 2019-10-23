
//Se importa la libreria que nos permite enlazar todas las vistas
import { createStackNavigator, createAppContainer } from 'react-navigation';


//Se importan las vistas que se pretenden enlazar
import Login from './Vista/Login';
import InterfazPrincipal from './Vista/InterfazPrincipal';
import Eventos from './Vista/Eventos';
import Actuadores from './Vista/Actuadores';

//Se determina que las rutas que se importaron seran pantallas a mostrar posteriormente
const Rutas = createStackNavigator({
  Login: { screen: Login },
  InterfazPrincipal: { screen: InterfazPrincipal },
  Eventos: { screen: Eventos },
  Actuadores: { screen: Actuadores },

});

//La constante App creara un contenedor para mostrar las vistas cuando sean solicitadas
const App = createAppContainer(Rutas);
export default App;
