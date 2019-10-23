import React from 'react';
import {Alert, FlatList, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View, } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import ActionButton from 'react-native-circular-action-menu';
import {Button, Icon, Input, } from 'react-native-elements';

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

  mostrarAlerta = () => {
    this.setState({
      mostrarAlerta: true
    });
  };

  ocultarAlerta = () => {
    this.setState({
      mostrarAlerta: false
    });
  };

  constructor(props) {
    super(props);
    this.state = {nombre:"",cantidadAprendices:"",cantidadDispositivos:"",};
    this.Metodo = this.Metodo.bind(this);   
  }

  Metodo(datos){

    if(this.state.nombre==""||this.state.cantidadAprendices==""||this.state.cantidadDispositivos==""){
      console.log("Faltan datos");
      this.mostrarAlerta();
    }else{

      consulta = "https://xdomoticxhome.000webhostapp.com/Servicios/CxA.php?n="+this.state.nombre+"&cA="+this.state.cantidadAprendices+"&cC="+this.state.cantidadDispositivos;      
      fetch(consulta)
      .then((response) => response.json())
      .then((responseJson) => {


          this.props.navigation.navigate('Ambientes', {respuestaBD:responseJson})

        })
      .catch((error) => {
          console.error(error);
      });


    }

      
  
  }
  
  render() {
    const {navigation} = this.props;
    datos = navigation.getParam('enviarDatos','null');
    if(datos!=null){
      console.log("ESO"+datos);

    }

    const {mostrarAlerta,} = this.state;
    return (
      <View style={styles.container}>

        

        <View style={styles.cuerpo}>

          <KeyboardAvoidingView>
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
          onChangeText={(dato)=>this.setState({cantidadAprendices:dato})}
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
          </KeyboardAvoidingView>
        </View>

        <View style={styles.pie}>

           <Button title='Añadir' 
            type='solid'
            titleStyle={{color:'#ffff'}} 
            containerStyle={{ flex:1, height:75,padding:18}} 
            buttonStyle={{borderColor:'#ffff',backgroundColor:'#e31a1a', borderRadius:10,}}
            onPress={this.Metodo}/>
        </View>

        <AwesomeAlert
            show={mostrarAlerta}
            showProgress={false}
            title="Datos incompletos"
            message="Faltan datos por ingresar"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="Continuar"
            confirmButtonColor="#e31a1a"
            onConfirmPressed={() => {
              this.ocultarAlerta();
            }}
        />

        
  
      </View >);
  }}
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
