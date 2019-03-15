import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Button, Card, Icon, } from 'react-native-elements'


class ClaseEncabezado extends React.Component {
  render() {
    return (
     <View style={{flex:1,flexDirection:'row',paddingRight:57}}>
        <View style={styles.cabeza}>
          <Text style={{ color: 'white', }}>
            Ambientes
           </Text>
        </View>
      </View>
      );
  }
};

export default class Ambientes extends React.Component {

  static navigationOptions = {
    headerTitle: <ClaseEncabezado/>,
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#e31a1a',
    },
  };
  
  constructor(props) {
    super(props);
    this.state={};
    this.ConsultarAmbientes = this.ConsultarAmbientes.bind(this);
    this.GuardarDatosEnArreglo = this.GuardarDatosEnArreglo.bind(this);
    this.MostrarEnPantalla = this.MostrarEnPantalla.bind(this);
  }


  async ConsultarAmbientes(){


    let respuesta = await fetch("https://xdomoticxhome.000webhostapp.com/Servicios/A.php");
    let datos =  await respuesta.json();
    this.state={arregloDatos:datos};
    this.GuardarDatosEnArreglo();
    console.log("Se ha terminado de ConsultarAmbientes");
    


    {/*
    fetch("https://xdomoticxhome.000webhostapp.com/Servicios/A.php")
    .then((respuesta) => respuesta.json())
    .then((respuestaJson) => 

      {
       console.log(respuestaJson);
       this.state={respuesta:respuestaJson};
      }

    );
    */}

  }

  async GuardarDatosEnArreglo(){

    let datos = await this.state.arregloDatos;
    let arreglo = await Object.values(datos);
    var cantidadDatos = arreglo.length;
    var arregloDatos = Array(cantidadDatos);

    for(let i=0;i<cantidadDatos;i++){
      arregloDatos.push(Object.values(arreglo[i]))
    }
    this.state={daticos:arregloDatos};
    console.log("Se ha terminado de GuardarDatosEnArreglo");
    this.MostrarEnPantalla();
  }

  async MostrarEnPantalla(){

    let arreglo = await Object.values(this.state.daticos) ;
    var foo = "";


    for(let i=0;i<arreglo.length;i++){
      var string = "\n"+arreglo[i];
      foo += string;
    }

    
    this.setState({datoErre:<Text>{foo}</Text>});
    console.log("Se ha MostrarEnPantalla ");
  }


  
  render() { 


    
    return (

      <View style={styles.container}>

      <View style={styles.cuerpo}>

      <ScrollView>

      <View style={{padding: 20, alignContent:'center', justifyContent: 'center', alignItems:'center'}}>
      <Text>{this.state.datoErre}</Text>

      </View>
      

      </ScrollView>


      <View style={{alignItems:'center', alignContent:'center'}}>

      <Button title='Cargar registros' 
      type='solid'
      titleStyle={{color:'#ffff'}} 
      containerStyle={{ width:250, height:75,}} 
      buttonStyle={{borderColor:'#ffff',backgroundColor:'#e31a1a', borderRadius:20,}}  
      onPress={this.ConsultarAmbientes}/>

      </View>   

      </View>

      <View style={styles.pie}>
      
      <ActionButton icon={<Icon name='fingerprint' size={50} color='#e31a1a'/>} btnOutRange='#ffff' buttonColor="#ffff">
        
        <ActionButton.Item buttonColor='#ffff'  onPress={()=>{this.props.navigation.navigate('CrearAmbientes')}}> 
        <Icon name='control-point' color='#e31a1a' size={30}/>
        </ActionButton.Item>
        
        <ActionButton.Item buttonColor='#ffff'  onPress={()=>{this.props.navigation.navigate('CrearAmbientes')}}> 
        <Icon name='control-point' color='#e31a1a' size={30}/>
        </ActionButton.Item>

      </ActionButton>
      </View>

      </View >

      );
 
    {/*
    return(

      <View style={{flexDirection:'column', alignItems:'center', alignContent:'center',justifyContent:'center'}}>
        
        {this.state.datoErre}

        <Button title='Cargar registros' 
        type='solid'
        titleStyle={{color:'#ffff'}} 
        containerStyle={{ width:250, height:75,}} 
        buttonStyle={{borderColor:'#ffff',backgroundColor:'#e31a1a', borderRadius:20,}}  
        onPress={this.ConsultarAmbientes}/>

      </View>)
    */}
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cabeza: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cuerpo: {
    flex: 10,
    backgroundColor: '#ffff',
  },
  contenidoTarjeta:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  pie: {
    flex: 1.3,
    backgroundColor: 'transparent',
  }
});

