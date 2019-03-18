import React from 'react';
import {ActivityIndicator,Alert, FlatList, Image, ScrollView, StyleSheet, Text,View,} from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import {Button, Card, Icon,} from 'react-native-elements';

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
  }};
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
    this.state={datos:"", estaCargado:true,};
    this.LlenarTarjetas = this.LlenarTarjetas.bind(this);
    this.ValidarInserccion = this.ValidarInserccion.bind(this);
    this.ActualizarTarjetas = this.ActualizarTarjetas.bind(this);
    this.EliminarRegistro = this.EliminarRegistro.bind(this);
  }

  LlenarTarjetas(item){
    return (<View style={{padding:10}}><Card 
          title={item.nombre} 
          containerStyle={{borderRadius:10, borderColor:'#e31a1a'}} 
          dividerStyle={{backgroundColor:'#e31a1a'}} >
          
          <View style={{flexDirection:'row', justifyContent:'space-between',}}>

            <View style={{flexDirection:'column', justifyContent:'space-around',}}>
              <Text style={{fontSize:14}}>
              Capacidad aprendices: {item.capacidadAprendices}
              </Text>
             <Text style={{fontSize:14}}>
              Capacidad componentes: {item.capacidadComponentes}
              </Text> 
            </View> 

            <View style={{flexDirection:'column', justifyContent:'space-between',}}>
             
              <Button
              icon={<Icon name='edit' size={20} color='white'/>}
              type='solid'
              titleStyle={{color:'#ffff'}} 
              containerStyle={{padding:3,}} 
              buttonStyle={{borderColor:'#ffff',backgroundColor:'#e31a1a', borderRadius:10,}} 
             
              />

              <Button
                icon={<Icon name='delete' size={20} color='white'/>}
                type='solid'
                titleStyle={{color:'#ffff'}} 
                containerStyle={{padding:3,}} 
                buttonStyle={{borderColor:'#ffff',backgroundColor:'#e31a1a', borderRadius:10,}}
                onPress={()=>{this.EliminarRegistro(item.idAmbiente)}} 
              />

            </View> 

          </View></Card></View>);
    this.setState({refrescar:!this.state.refrescar});
  }

  ActualizarTarjetas(estaCargado){
    if(estaCargado){
      //console.log("ActualizarTarjetas estado Enviado:"+estaCargado);
      //console.log("ActualizarTarjetas estado State:"+this.state.estaCargado);
      fetch("https://xdomoticxhome.000webhostapp.com/Servicios/A.php")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({datos:responseJson,estaCargado:!this.state.estaCargado});
        //console.log("ActualizarTarjetas estado State:"+this.state.estaCargado);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  ValidarInserccion(respuestaBD){ 
    //console.log("ValidarInserccion:"+respuestaBD);
    if(respuestaBD=="true"){
       //console.log("ValidarInserccion TRUE:"+respuestaBD);
      this.ActualizarTarjetas(this.state.estaCargado);

    }else if(respuestaBD=="false"){
      //console.log("ValidarInserccion FALSE:"+respuestaBD);
        this.setState({estaCargado:!this.state.estaCargado});
    }
  }

  EliminarRegistro(idAmbiente){
    fetch("https://xdomoticxhome.000webhostapp.com/Servicios/ExA.php?id="+idAmbiente)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log("EliminarRegistro estaCargado estado :"+this.state.estaCargado);
        this.setState({estaCargado:!this.state.estaCargado});
        this.ActualizarTarjetas(this.state.estaCargado);
        //console.log("EliminarRegistro estaCargado estado actualizado:"+this.state.estaCargado);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    //console.log("#R Se renderizó la vista");
    if(this.state.estaCargado!=true){
      //console.log("#R estaCargado: "+this.state.estaCargado);
      return (<View style={styles.container}>

        <View style={styles.cuerpo}>

          <ScrollView>

            <View style={{flex:1,margin:5}}>
              
              <FlatList
                extraData={this.state.estaCargado}
                data={this.state.datos}
                keyExtractor={item => item.idAmbiente}
                renderItem={({item}) => this.LlenarTarjetas(item)}
              />

            </View>  

          </ScrollView>

        </View>

        <View style={{padding:1}}/>

        <View style={styles.pie}>

           <Button title='Añadir Ambiente' 
            type='solid'
            titleStyle={{color:'#ffff'}} 
            containerStyle={{ flex:1, height:75,padding:18}} 
            buttonStyle={{borderColor:'#ffff',backgroundColor:'#e31a1a', borderRadius:10,}} 
            onPress={()=>{this.props.navigation.navigate('CrearAmbientes')}} 
            />

        </View>

        </View>);  
    }else{
      return(<View style={{flex:1, flexDirection:'row',justifyContent:'center',alignItems:'center'}}><ActivityIndicator size="large" color="#e31a1a" /></View>);
    }
  }  

  componentDidMount(){
    //console.log("#1 Se montó la vista");
    this.ActualizarTarjetas(this.state.estaCargado);
  }

  componentWillUpdate(){ 
    //console.log("#2 Se actualizará la vista");
    if(this.state.estaCargado==false){
      this.state.estaCargado=true;
    }
  }

  componentDidUpdate(){  
    //console.log("#3 Se actualizó la vista");
    const {navigation} = this.props;
    respuestaBD = navigation.getParam('respuestaBD','0');
    this.ValidarInserccion(respuestaBD);
  }

  componentWillUnmount(){
    //console.log("#Se desmonto la vista");
  }}
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
  }});


