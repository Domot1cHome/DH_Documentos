
//LIBRERIAS
import React from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';
import { Icon, Input, Button, } from 'react-native-elements';

//CLASE
export default class Login extends React.Component {

//PROPIEDADES ENCABEZADO
static navigationOptions = {
  title: '',
  headerStyle: {
    backgroundColor: '#e31a1a',
  },
};

//CONSTRUCTOR
constructor(props) {
  super(props);
  this.state ={usuario:"", contraseña:"",rol:"",};
  this.Metodo = this.Metodo.bind(this);
  this.IrA = this.IrA.bind(this);  
  this.IrI = this.IrI.bind(this);  
  this.IrS = this.IrS.bind(this);  
}


//METODOS
IrA() {
  this.props.navigation.navigate('InterfazPrincipalA');
}

IrI() {
  this.props.navigation.navigate('InterfazPrincipalI');
}
IrS() {
  this.props.navigation.navigate('InterfazPrincipalS');
}


Metodo(){
  fetch("https://xdomoticxhome.000webhostapp.com/Servicios/Conexion.php?usuario="+''+this.state.usuario+"&contraseña="+''+this.state.contraseña)
  .then((response) => response.json())
  .then((responseJson) =>{
    this.setState({rol:responseJson[2]});
    if(responseJson[0]===this.state.usuario&responseJson[1]===this.state.contraseña){
      if(this.state.rol=="Supervisor"){ 
        this.IrS();
      }else if(this.state.rol=="Instructor"){
        this.IrI();
      }else if(this.state.rol=="Aprendiz"){
        this.IrA();
      }
    }else{
      alarm('Usuario o contraseña incorrectos');
    }
  })
  .catch((error) =>{console.error(error)});
}

//METODO ENCARGADO DE DIBUJAR LOS COMPONENTES EN PANTALLA
render() {
  
  return (
    <View style={estilos.container}>

      <View style={estilos.cuerpo}>

        <Image style={{ width: 200, height: 200, }} source={require('/ProyectosReactNative/DH/Recursos/DH.png')}/>

        <Input leftIcon={<Icon name='face' size={24} color='#e31a1a'/>}  
        placeholder='Usuario' 
        inputStyle={{paddingLeft: 30, paddingRight: 20}} 
        containerStyle={{width: 200, height: 35, borderWidth: 1, borderColor: '#e31a1a',borderRadius: 20, alignItems:'center', justifyContent:'center'}}
        inputContainerStyle={{borderBottomWidth: 0}}
        onChangeText={(dato)=>this.setState({usuario:dato})}
        />

        <Text></Text>

        <Input leftIcon={<Icon name='lock' size={24} color='#e31a1a'/>}  
        placeholder='Contraseña' 
        secureTextEntry={true}
        inputStyle={{paddingLeft: 30, paddingRight: 20}} 
        containerStyle={{width: 200, height: 35, borderWidth: 1, borderColor: '#e31a1a', borderRadius: 20, alignItems:'center', justifyContent:'center'}}
        inputContainerStyle={{borderBottomWidth: 0}}
        onChangeText={(dato)=>this.setState({contraseña:dato})}
        />

        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        <Button title='Inciar sesión' 
        type='outline' 
        titleStyle={{color:'#e31a1a'}} 
        containerStyle={{ width: 200,height: 75, borderRadius: 20 }} 
        buttonStyle={{borderColor:'#e31a1a',}}  
        onPress={this.Metodo}/> 
        
      </View>
    </View>
    );
  }
}

// Hoja de estilos 
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  cuerpo: {
    flex: 10,
    backgroundColor: '#ffff',
    alignItems: 'center',
    paddingTop: 90,
  },
});
  