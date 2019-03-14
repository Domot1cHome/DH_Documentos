
// Se importan las librerias necesarias para construir los diferentes componentes de la vista
import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import { Icon, Input, Button, } from 'react-native-elements';

//CLASE ENCARGADA DE DIBUJAR LO QUE TENDRA EL ENCABEZADO
class ClaseEncabezado extends React.Component {
  render() {
    return (
      <View style={styles.cabeza}>
        <Text style={{ color: 'white', }}>
          Crear Ambientes
         </Text>
      </View>
    );
  }
};


export default class CrearAmbientes extends React.Component {

  //EN ESTA VARIABLE JUSTO EN LA PROPIEDAD HEADER TITLE SE INYECTA LA CLASE CLASE ENCABEZADO
  static navigationOptions = {
    headerTitle: <ClaseEncabezado/>,
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#e31a1a',
    },
  };

  //Iniciamos el constructor, las variables y enrutamos los metdos que seran usados posteriormente en la clase 
  constructor(props) {
    super(props);
    this.state = { variable1: "", variable2: ""};
    this.Metodo = this.Metodo.bind(this);
  
  }

  Metodo() {
    alert("Mensaje trucho");
  }

  //Metodo encargado de mostrar todos los componentes
  render() {
    return (
      <View style={estilos.container}>
        <View style={estilos.cuerpo}>

          <View style={estilos.cuerpo}>


          </View>

          <Input leftIcon={<Icon name='school' size={24} color='#e31a1a'/>}  
            placeholder='Digite el nombre del Ambiente' 
            inputStyle={{paddingLeft: 30, paddingRight: 20}} 
            containerStyle={{width: 200, height: 35, borderWidth: 1, borderColor: '#e31a1a',borderRadius: 20, alignItems:'center', justifyContent:'center'}}
            inputContainerStyle={{borderBottomWidth: 0}}
            />

          <Input leftIcon={<Icon name='person' size={24} color='#e31a1a'/>}  
            placeholder='Digite la cantidad de aprendices permitidos' 
            inputStyle={{paddingLeft: 30, paddingRight: 20}} 
            containerStyle={{width: 200, height: 35, borderWidth: 1, borderColor: '#e31a1a',borderRadius: 20, alignItems:'center', justifyContent:'center'}}
            inputContainerStyle={{borderBottomWidth: 0}}
            />

           <Button title='Agregar Ambiente' 
            type='outline' 
            titleStyle={{color:'#e31a1a'}} 
            containerStyle={{ width: 75,height: 75, borderRadius: 360 }} 
            buttonStyle={{borderColor:'#e31a1a',}}  
            /> 






        </View>
      </View >
    );
  }
}


// Hoja de estilos 
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  cabeza: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cuerpo: {
    flex: 10,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

});
