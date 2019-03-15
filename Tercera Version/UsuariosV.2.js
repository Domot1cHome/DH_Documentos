import React from 'react';
import { StyleSheet, Text, View, Picker, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import ActionButton from 'react-native-circular-action-menu';


class ClaseEncabezado extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <View style={styles.cabeza}>
          <Text style={{ color: '#e31a1a', fontSize : 30}}>
            Crear Usuarios
           </Text>
        </View>
      );
    }
  };
  export default class Usuarios extends React.Component {
    static navigationOptions = {
      headerTitle: <ClaseEncabezado/>,
      headerStyle: {backgroundColor: 'null'}
    };
    constructor(props) {
        super(props);   
        this.crearUsuario = this.crearUsuario.bind(this); 
        this.IrVistaEventos = this.IrVistaEventos.bind(this);
        this.IrVistaInterfazPrincipalInstructor = this.IrVistaInterfazPrincipalInstructor.bind(this);
        this.state ={
          documento:'cc', 
          nombre:'', 
          apellido:'',
          numDocumento:'',
          rol:'',correo:'', 
          nomUsuario:'',
          contra:''}           
    }
    IrVistaEventos(){
      this.props.navigation.navigate('Eventos');
    }
    IrVistaInterfazPrincipalInstructor(){
      this.props.navigation.navigate('InterfazPrincipalInstructor');
    }
    crearUsuario(){
     ToastAndroid.show(this.state.nomUsuario + ' Creado con exito',ToastAndroid.SHORT);
     console.log("Izi " + this.state.nombre +" "
     + this.state.apellido +" "
     + this.state.documento +" "
     + this.state.numDocumento +" "
     + this.state.rol + " "
     + this.state.correo +" "
     + this.state.nomUsuario+" "
     + this.state.contra)       
    }
    actualizarUsuario(){
      ToastAndroid.show(this.state.nomUsuario + ' Ha sido Actualizado',ToastAndroid.SHORT);
    }
    eliminarUsuario (){
      ToastAndroid.show(this.state.nomUsuario + ' Ha sido eliminado',ToastAndroid.SHORT);
    }
   
    
    render(){
        return(          
            <View style={styles.container}>                     
              <View style={{padding : 20}}>
              
              <Input rightIcon={<Icon name='account-box' size={24} color='#e31a1a'/>}                   
                     placeholder='Nombre'
                     inputStyle={{paddingLeft: 10}} 
                     containerStyle={{width: 320, height: 50, borderWidth: 0.5, borderColor: '#e31a1a',borderRadius: 200, alignItems:'center', justifyContent:'center'}}
                     inputContainerStyle={{borderBottomWidth: 0}}
                     onChangeText={(dato)=>this.setState({nombre:dato})}/>
                     
                     <Text></Text>
              <Input rightIcon={<Icon name='face' size={24} color='#e31a1a'/>}  
                     placeholder='Apellido' 
                     inputStyle={{paddingLeft: 10}} 
                     containerStyle={{width: 320, height: 50, borderWidth: 0.5, borderColor: '#e31a1a',borderRadius: 200, alignItems:'center', justifyContent:'center'}}
                     inputContainerStyle={{borderBottomWidth: 0}}
                     onChangeText={(dato)=>this.setState({apellido:dato})}
                     />
                     <Text></Text> 
                     <View> 
                     <Text style = {{}}>Tipo de documento</Text>
              <Picker
                     selectedValue={this.state.documento} 
                     onValueChange={(dato) => this.setState({documento: dato})}>
                     <Picker.Item label="CC" value="cc" />
                     <Picker.Item label="TI" value="ti" />
                     <Picker.Item label="CE" value="ce" />
             </Picker>
               </View>
               <Input rightIcon={<Icon name='dialpad' size={24} color='#e31a1a'/>}  
                     placeholder='N° documento' 
                     keyboardType = 'numeric'
                     inputStyle={{paddingLeft: 10}} 
                     containerStyle={{width: 320, height: 50, borderWidth: 0.5, borderColor: '#e31a1a',borderRadius: 200, alignItems:'center', justifyContent:'center'}}
                     inputContainerStyle={{borderBottomWidth: 0}}
                     onChangeText={(dato)=>this.setState({numDocumento:dato})}
                     />
                     <Text></Text> 
              <Input rightIcon={<Icon name='assignment-late' size={24} color='#e31a1a'/>}  
                     placeholder='Rol' 
                     inputStyle={{paddingLeft: 10}} 
                     containerStyle={{width: 320, height: 50, borderWidth: 0.5, borderColor: '#e31a1a',borderRadius: 200, alignItems:'center', justifyContent:'center'}}
                     inputContainerStyle={{borderBottomWidth: 0}}
                     onChangeText={(dato)=>this.setState({rol:dato})}>
                   
                     </Input>
                     <Text></Text> 
             <Input rightIcon={<Icon name='contact-mail' size={24} color='#e31a1a'/>}  
                     placeholder='Aqui@TuCorreo.com' 
                                      
                     inputStyle={{paddingLeft: 10}} 
                     containerStyle={{width: 320, height: 50, borderWidth: 0.5, borderColor: '#e31a1a',borderRadius: 200, alignItems:'center', justifyContent:'center'}}
                     inputContainerStyle={{borderBottomWidth: 0}}
                     onChangeText={(dato)=>this.setState({correo:dato})}
                     />
                     <Text></Text>   
              <Input rightIcon={<Icon name='assignment-ind' size={24} color='#e31a1a'/>}  
                     placeholder='Nombre Usuario' 
                     inputStyle={{paddingLeft: 10}} 
                     containerStyle={{width: 320, height: 50, borderWidth: 0.5, borderColor: '#e31a1a',borderRadius: 200, alignItems:'center', justifyContent:'center'}}
                     inputContainerStyle={{borderBottomWidth: 0}}
                     onChangeText={(dato)=>this.setState({nomUsuario:dato})}
                     />
                     <Text></Text> 
             <Input rightIcon={<Icon name='phonelink-lock' size={24} color='#e31a1a'/>}  
                     placeholder='Contraseña' 
                     inputStyle={{paddingLeft: 10}} 
                     containerStyle={{width: 320, height: 50, borderWidth: 0.5, borderColor: '#e31a1a',borderRadius: 200, alignItems:'center', justifyContent:'center'}}
                     inputContainerStyle={{borderBottomWidth: 0}}
                     onChangeText={(dato)=>this.setState({contra:dato})}/>
                  <Text></Text> 

                  <View style={styles.vistaBoton}>
                <Button title = "Crear" 
                  buttonStyle = {{borderRadius : 20, backgroundColor : '#e31a1a'}} 
              
                  containerStyle = {{width:80}}
                  onPress ={this.crearUsuario}/>

                <Button title = "Actualizar" 
                  buttonStyle = {{borderRadius : 20, backgroundColor : '#e31a1a'}} 
            
                  containerStyle = {{width:100}}
                  onPress ={this.actualizarUsuario.bind(this)}/>

                <Button title = "Eliminar" 
                  buttonStyle = {{borderRadius : 20, backgroundColor : '#e31a1a'}}                   
                  containerStyle = {{width:80}}
                  onPress ={this.eliminarUsuario.bind(this)}/>  
                  </View>               
              </View>             
              <ActionButton icon={<Icon name='fingerprint' size={50} color='#e31a1a'/>} btnOutRange='#ffff' buttonColor="#ffff">

              <ActionButton.Item buttonColor='#ffff'  onPress={this.IrVistaInterfazPrincipalInstructor}> 
                <Icon name='face' color='#e31a1a' size={30}/>
              </ActionButton.Item>

              <ActionButton.Item buttonColor='#ffff' onPress={this.IrVistaAmbientes}> 
                <Icon name='school' color='#e31a1a' size={30}/>
              </ActionButton.Item>

              <ActionButton.Item buttonColor='#ffff'  onPress={this.IrVistaEventos}> 
                <Icon name='devices-other' color='#e31a1a' size={30}/>
              </ActionButton.Item>

              <ActionButton.Item buttonColor='#ffff'  onPress={this.Metodo}> 
                <Icon name='alarm' color='#e31a1a' size={30}/>
              </ActionButton.Item>

              <ActionButton.Item buttonColor='#ffff'  onPress={this.Metodo}> 
                <Icon name='settings' color='#e31a1a' size={30}/>
              </ActionButton.Item>
            </ActionButton>
            </View> 
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
    estilosTextInput:{
      height : 50,
      flexDirection : 'column'
    },
    vistaBoton:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
      
    }   
    
  });