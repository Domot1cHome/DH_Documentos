import React from 'react';
import {Alert, FlatList, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View, } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import {Button, Icon, Input, } from 'react-native-elements';

class ClaseEncabezado extends React.Component {
  render() {
    return (
     <View style={{flex:1,flexDirection:'row',paddingRight:57}}>
        <View style={styles.cabeza}>
          <Text style={{ color: 'white', }}>
            Editar Ambientes
           </Text>
        </View>
      </View>
      );
  }};
export default class EditarAmbientes extends React.Component {

  static navigationOptions = {
    headerTitle: <ClaseEncabezado/>,
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#e31a1a',
    },
  };

  constructor(props) {
    super(props);
    this.state = {nombre:"",cantidadAprendices:"",cantidadDispositivos:"",};
    this.EditarAmbiente = this.EditarAmbiente.bind(this);   
  }

  EditarAmbiente(item){

    if(this.state.nombre==""){
      this.state.nombre=item.nombre;
      console.log("estado nombre: "+this.state.nombre)
    }
    
    if(this.state.cantidadAprendices==""){
      this.state.cantidadAprendices=item.capacidadAprendices;
      console.log("estado cantidadAprendices: "+this.state.cantidadAprendices)
    }
    if(this.state.cantidadDispositivos==""){
      this.state.cantidadDispositivos=item.capacidadComponentes;
      console.log("estado cantidadDispositivos: "+this.state.cantidadDispositivos)
    }

    
    consulta = "https://xdomoticxhome.000webhostapp.com/Servicios/UxA.php?i="+item.idAmbiente+"&n="+this.state.nombre+"&cA="+this.state.cantidadAprendices+"&cC="+this.state.cantidadDispositivos;
     console.log(consulta)
    fetch(consulta)
    .then((response) => response.json())
    .then((responseJson) => {


      this.setState({datos:responseJson,});
      if(this.state.nombre==""&&this.state.cantidadAprendices==""&&this.state.cantidadDispositivos==""){
        responseJson="false",
        editar=false;
      }
      editar=true;
      this.props.navigation.navigate('Ambientes', {respuestaBD:responseJson,editar:editar})

      })
    .catch((error) => {
        console.error(error);
    });  
 
  }
  
  render() {
    const {navigation} = this.props;
    item = navigation.getParam('item','null');

    return (
      <View style={styles.container}>

        <View style={styles.cuerpo}>

          <KeyboardAvoidingView>
          <Input rightIcon={<Icon name='school' size={24} color='#e31a1a'/>}  
          placeholder={item.nombre}
          inputStyle={styles.separadorCampoTextoInterno} 
          containerStyle={styles.campoTexto}
          inputContainerStyle={{borderBottomWidth: 0}}
          onChangeText={(dato)=>this.setState({nombre:dato})}
          />
         
          <View style={{padding:10}}/>

          <Input rightIcon={<Icon name='person-pin' size={24} color='#e31a1a'/>}  
          placeholder={item.capacidadAprendices}
          keyboardType='numeric'
          inputStyle={styles.separadorCampoTextoInterno} 
          containerStyle={styles.campoTexto}
          inputContainerStyle={{borderBottomWidth: 0}}
          onChangeText={(dato)=>this.setState({cantidadAprendices:dato})}
          />
         

          <View style={{padding:10}}/>

          
          <Input rightIcon={<Icon name='devices-other' size={24} color='#e31a1a'/>}  
          placeholder={item.capacidadComponentes}
          keyboardType='numeric'
          inputStyle={styles.separadorCampoTextoInterno} 
          containerStyle={styles.campoTexto}
          inputContainerStyle={{borderBottomWidth: 0}}
          onChangeText={(dato)=>this.setState({cantidadDispositivos:dato})}
          />
          </KeyboardAvoidingView>
        </View>

        <View style={styles.pie}>

           <Button title='Actualizar' 
            type='solid'
            titleStyle={{color:'#ffff'}} 
            containerStyle={{ flex:1, height:75,padding:18}} 
            buttonStyle={{borderColor:'#ffff',backgroundColor:'#e31a1a', borderRadius:10,}}
            onPress={()=>this.EditarAmbiente(item)}
            />
        </View>

        
  
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
