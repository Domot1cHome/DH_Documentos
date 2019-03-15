
//LIBRERIAS
import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { Icon, Input, Button, } from 'react-native-elements';

//CLASE
export default class Login extends React.Component {

//PROPIEDADES ENCABEZADO
static navigationOptions = {
  header: null,
};

//CONSTRUCTOR
constructor(props) {
  super(props);
  this.state ={rol:"",usuario:"", contraseña:""};
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


async Metodo(){
  
  let respuesta = await fetch("https://xdomoticxhome.000webhostapp.com/Servicios/L.php?usuario="+''+this.state.usuario+"&codigo="+''+this.state.contraseña)
  let datos =  await respuesta.json();
  this.state={caramelito:Object.values(datos[0])}
  var foo = this.state.caramelito;
  this.setState({rol:foo[0],usuario:foo[1],contraseña:foo[2],});

    
  
    if(foo[1]===this.state.usuario&foo[2]===this.state.contraseña){
      if(this.state.rol=="Supervisor"){ 
        this.IrS();
      }else if(this.state.rol=="Instructor"){
        this.IrI();
      }else if(this.state.rol=="Aprendiz"){
        this.IrA();
      }
    }else{
      alert('Usuario o contraseña incorrectos');
    }


 
  
}



//METODO ENCARGADO DE DIBUJAR LOS COMPONENTES EN PANTALLA
render() {
  
  return (

    <View style={estilos.container}>

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
        titleStyle={{color:'#ffffff'}} 
        containerStyle={{ width: 200,height: 75, }} 
        buttonStyle={{borderColor:'#e31a1a',borderRadius: 20, backgroundColor:'#e31a1a'}}  
        onPress={this.Metodo}/> 

    </View>

    );
  }
}


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  