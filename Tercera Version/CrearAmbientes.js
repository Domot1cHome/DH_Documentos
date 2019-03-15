
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image,ScrollView } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Icon, Input, Button, } from 'react-native-elements';




class ClaseEncabezado extends React.Component {
  render() {
    return (
      <View style={styles.cabeza}>
      <Text style={{ color: 'white', }}>
      Crear Ambiente
      </Text>
      </View>
      );
  }
};


export default class CrearAmbientes extends React.Component {

  
  static navigationOptions = {
    headerTitle: <ClaseEncabezado/>,
    //headerLeft: null,
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
  this.setState({respuestaBoolean:datos});

 }
  

  //Metodo encargado de mostrar todos los componentes
  render() {
    return (
      <View style={styles.container}>

      <View style={styles.cuerpo}>

        <Input leftIcon={<Icon name='school' size={24} color='#e31a1a'/>}  
        placeholder='Nombre del Ambiente' 
        inputStyle={styles.separadorCampoTextoInterno} 
        containerStyle={styles.campoTexto}
        inputContainerStyle={{borderBottomWidth: 0}}
        onChangeText={(dato)=>this.setState({nombre:dato})}
        />

        <View style={{padding:10}}/>

        <Input leftIcon={<Icon name='person-pin' size={24} color='#e31a1a'/>}  
        placeholder='Cantidad de aprendices' 
        keyboardType='numeric'
        inputStyle={styles.separadorCampoTextoInterno} 
        containerStyle={styles.campoTexto}
        inputContainerStyle={{borderBottomWidth: 0}}
        onChangeText={(dato)=>this.setState({cantidadAprendicez:dato})}
        />

        <View style={{padding:10}}/>

        <Input leftIcon={<Icon name='devices-other' size={24} color='#e31a1a'/>}  
        placeholder='Cantidad de dispositivos aceptados' 
        keyboardType='numeric'
        inputStyle={styles.separadorCampoTextoInterno} 
        containerStyle={styles.campoTexto}
        inputContainerStyle={{borderBottomWidth: 0}}
        onChangeText={(dato)=>this.setState({cantidadDispositivos:dato})}
        />

        <View style={{padding:20}}/>

        <View> 
          <Button title='Agregar Ambiente' 
          type='solid'
          titleStyle={{color:'#ffff'}} 
          containerStyle={{ width:390, height:45,}} 
          buttonStyle={{borderColor:'#ffff',backgroundColor:'#e31a1a', borderRadius:20,}}  
          onPress={this.Metodo}
          /> 
        </View>

      </View>

      <ActionButton icon={<Icon name='fingerprint' size={50} color='#e31a1a'/>} btnOutRange='#ffff' buttonColor="#ffff">

        <ActionButton.Item buttonColor='#ffff'  onPress={this.Metodo}> 
        <Icon name='face' color='#e31a1a' size={30}/>
        </ActionButton.Item>

        <ActionButton.Item buttonColor='#ffff' onPress={this.IrVistaAmbientes}> 
        <Icon name='school' color='#e31a1a' size={30}/>
        </ActionButton.Item>

        <ActionButton.Item buttonColor='#ffff'  onPress={this.Metodo}> 
        <Icon name='devices-other' color='#e31a1a' size={30}/>
        </ActionButton.Item>

        <ActionButton.Item buttonColor='#ffff'  onPress={this.Metodo}> 
        <Icon name='alarm' color='#e31a1a' size={30}/>
        </ActionButton.Item>

        <ActionButton.Item buttonColor='#ffff'  onPress={this.Metodo}> 
        <Icon name='settings' color='#e31a1a' size={30}/>
        </ActionButton.Item>
      </ActionButton>

      </View >
      );
    }
  }


  // Hoja de estilos 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'pink'
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
      width: 390,
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
    


  });
