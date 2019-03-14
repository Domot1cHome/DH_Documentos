import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ToastAndroid } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Button, Card, Icon, } from 'react-native-elements'


class ClaseEncabezado extends React.Component {
  render() {
    return (
      <View style={styles.cabeza}>
      <Text style={{ color: 'white', }}>
      Ambientes
      </Text>
      </View>
      );
  }
};

export default class Ambientes extends React.Component {

  static navigationOptions = {
    headerTitle: <ClaseEncabezado/>,
    headerStyle: {
      backgroundColor: '#e31a1a',
    },
  };
  
  constructor(props) {
    super(props);
    this.state={};
    this.ConsultarAmbientes = this.ConsultarAmbientes.bind(this);
    this.GuardarDatosEnArreglo = this.GuardarDatosEnArreglo.bind(this);
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
  }

  




  render() { 


    return (

      <View style={styles.container}>

      <View style={styles.cuerpo}>

      <ScrollView>

      <View>

      <Text> {this.state.nombreTarjeta}</Text>
      
      </View>


      </ScrollView>


      <View style={{alignItems:'center', alignContent:'center'}}>

      <Button title='Consulta' 
      type='solid'
      titleStyle={{color:'#ffff'}} 
      containerStyle={{ width:250, height:75,}} 
      buttonStyle={{borderColor:'#ffff',backgroundColor:'#e31a1a', borderRadius:20,}}  
      onPress={this.ConsultarAmbientes}/>

      <Button title='Equis' 
      type='solid'
      titleStyle={{color:'#ffff'}} 
      containerStyle={{ width:250, height:75,}} 
      buttonStyle={{borderColor:'#ffff',backgroundColor:'#e31a1a', borderRadius:20,}}  
      onPress={

        this.Funcion=()=>{

          var arreglo =  Object.values(this.state.daticos) ;
          var foo = "";
          
          
          for(let i=0;i<arreglo.length;i++){
            var string = "\n"+"El arreglo en la posición: "+i+"\n"+"Devolvio: "+arreglo[i];
            foo += string;

          }
          
          var foo1=arreglo[0][1];
          console.log("La consulta devolvio: "+foo1);
          this.state={nombreTarjeta:foo1};
          this.state={datosEquis:arreglo};

        }

      }/>



      </View>   

      </View>

      <View style={styles.pie}>
      
      <ActionButton icon={<Icon name='fingerprint' size={50} color='#e31a1a'/>} btnOutRange='#ffff' buttonColor="#ffff">
      <ActionButton.Item buttonColor='#ffff'  onPress={this.Metodo}> 
      <Icon name='control-point' color='#e31a1a' size={30}/>
      </ActionButton.Item>
      
      </ActionButton>
      </View>

      </View >

      );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cabeza: {
    flex: 10,
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

