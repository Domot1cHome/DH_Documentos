import React from 'react';
import { StyleSheet, Text, View, TextInput, Image,ScrollView,Alert } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Icon, Input, Button, } from 'react-native-elements';

class ClaseEncabezado extends React.Component {
  render() {
    return (
     <View style={{flex:1,flexDirection:'row',paddingRight:57}}>
        <View style={styles.cabeza}>
          <Text style={{ color: 'white', }}>
            Crear Ambientes
           </Text>
        </View>
      </View>
      );
  }};
export default class CrearAmbientes extends React.Component {

  static navigationOptions = {
    headerTitle: <ClaseEncabezado/>,
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#e31a1a',
    },
  };

  constructor(props) {
    super(props);
    this.state = {nombre:"",cantidadAprendicez:"",cantidadDispositivos:"",respuestaBoolean:false,};
    this.Metodo = this.Metodo.bind(this);   
  }

  async Metodo(){
    let respuesta = await fetch("https://xdomoticxhome.000webhostapp.com/Servicios/CxA.php?n="+this.state.nombre+"&cA="+this.state.cantidadAprendicez+"&cC="+this.state.cantidadDispositivos)
    let datos =  await respuesta.json();
    this.props.navigation.navigate('Ambientes', {respuestaBD:Object.values({datos})[0]})
  }
  
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cuerpo}>

          <Input rightIcon={<Icon name='school' size={24} color='#e31a1a'/>}  
          placeholder='Nombre del Ambiente' 
          inputStyle={styles.separadorCampoTextoInterno} 
          containerStyle={styles.campoTexto}
          inputContainerStyle={{borderBottomWidth: 0}}
          onChangeText={(dato)=>this.setState({nombre:dato})}
          />

          <View style={{padding:10}}/>

          <Input rightIcon={<Icon name='person-pin' size={24} color='#e31a1a'/>}  
          placeholder='Cantidad de aprendices' 
          keyboardType='numeric'
          inputStyle={styles.separadorCampoTextoInterno} 
          containerStyle={styles.campoTexto}
          inputContainerStyle={{borderBottomWidth: 0}}
          onChangeText={(dato)=>this.setState({cantidadAprendicez:dato})}
          />

          <View style={{padding:10}}/>

          <Input rightIcon={<Icon name='devices-other' size={24} color='#e31a1a'/>}  
          placeholder='Cantidad de componentes' 
          keyboardType='numeric'
          inputStyle={styles.separadorCampoTextoInterno} 
          containerStyle={styles.campoTexto}
          inputContainerStyle={{borderBottomWidth: 0}}
          onChangeText={(dato)=>this.setState({cantidadDispositivos:dato})}
          />
        </View>

        <View style={styles.pie}>

           <Button title='Añadir' 
            type='solid'
            titleStyle={{color:'#ffff'}} 
            containerStyle={{ flex:1, height:75,padding:18}} 
            buttonStyle={{borderColor:'#ffff',backgroundColor:'#e31a1a', borderRadius:10,}}
            onPress={this.Metodo}/>

        </View>
    
      </View >);
  }
  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'transparent'
    },
    cabeza: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

    },
    cuerpo: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    campoTexto: {
      width: 310,
      height: 45,
      borderWidth: 1,
      borderColor: '#e31a1a',
      borderRadius: 20, 
      alignItems:'center', 
      justifyContent:'center'
    },
    separadorCampoTextoInterno: {
      paddingLeft: 20, 
      paddingRight: 20,
    },
    pie: {
      flexDirection:'row',
      height:70,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'space-around',
    },});
