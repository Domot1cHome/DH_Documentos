
// Se importan las librerias necesarias para construir los diferentes componentes de la vista
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, } from 'react-native';

//Iniciamos la clase Login
export default class Login extends React.Component {

  //Definimos las propiedades del encabezado
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: '#e31a1a',
    },
  };

  //Iniciamos el constructor y enrutamos los metodos que contiene la clase
  constructor(props) {
    super(props);
    this.Metodo = this.Metodo.bind(this);
    this.MetodoCambiarVentana = this.MetodoCambiarVentana.bind(this);
  }

  //En este arreglo definimos las variables que recolectaran los datos ingresados por el usuario
  state = {
    password: '',
  };

  //Seccion de metodos
  Metodo() {
    alert('Perro :v');
  }

  MetodoCambiarVentana() {
    this.props.navigation.navigate('InterfazPrincipal');
  }

  //Metodo encargado de dibujar la vista junto con todos sus componentes
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cuerpo}>
          <View>
            <Image
              style={{ width: 200, height: 200, }}
              source={require('/ProyectosReactNative/DH/Recursos/DH.png')}
            />
          </View>
          <TextInput style={styles.campoTexto} placeholder="Usuario" ></TextInput>
          <Text></Text>
          <TextInput password={true} style={styles.campoTexto} placeholder="Contraseña" ></TextInput>
          <Text></Text>

          <View style={styles.boton} onTouchEnd={this.MetodoCambiarVentana}>
            <Text style={{ color: 'white' }}>Iniciar sesión</Text>
          </View>
        </View>

        <View style={styles.pie}></View>
      </View >
    );
  }
}


// Hoja de estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  cabecera: {
    flex: .5,
    backgroundColor: '#e31a1a',
  },
  cuerpo: {
    flex: 10,
    backgroundColor: '#ffff',
    alignItems: 'center',
    paddingTop: 110,
  },
  pie: {
    flex: 1.8,
    backgroundColor: '#e31a1a',
  },
  campoTexto: {
    borderBottomWidth: 1,
    width: 200,
    height: 25,
    paddingLeft: 5,
  },
  boton: {
    width: 200,
    height: 35,
    backgroundColor: '#e31a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
