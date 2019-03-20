import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert, ToastAndroid } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import { Card, Icon, Button} from 'react-native-elements';


class ClaseEncabezado extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <View style={styles.cabeza}>
          <Text style={{ color: '#e31a1a', fontSize : 30 }}>
            Eventos
           </Text>
        </View>
      );
    }
  };
  export default class Eventos extends React.Component {
    static navigationOptions = {
      headerTitle: <ClaseEncabezado/>,
      headerStyle: {
      backgroundColor: 'null',
      }
    };
    constructor(props) {
        super(props);
        this.guardarConfiguracionDia = this.guardarConfiguracionDia.bind(this); 
        this.guardarConfiguracionNoche = this.guardarConfiguracionNoche.bind(this); 
        this.state = {componentes:"",
          lampa1 : true, lampa2 : false, lampa3 : false, venti1 : true, venti2 : true,
          enfria1 : true, enfria2 :false, aire: false ,  lampa1N : true, lampa2N : true, lampa3N : true, venti1N : false, venti2N : false,
          enfria1N : false, enfria2N :false, aireN: true, refresh:true
        } 
         
      }
      componentDidMount(){
        fetch('https://xdomoticxhome.000webhostapp.com/Servicios/updateEventos.php')
        .then((response) => response.json())
        .then((responseJson) => {
    
          this.setState({componentes:responseJson});
        })
        .catch((error) => {
          console.error(error);
        });        
      }     
      guardarConfiguracionDia(){
        this.state.componentes.perfiles[this.state.componentes.perfiles.length] =   
      {lampa1: this.state.lampa1, lampa2: this.state.lampa2, lampa3: this.state.lampa3,
        venti1: this.state.venti1, venti2: this.state.venti2, enfria1:this.state.enfria1, 
        enfria2:this.state.enfria2, aire:this.state.aire};

    this.setState({refresh: !this.state.refresh})
        ToastAndroid.show('Perfil guardado',ToastAndroid.SHORT);
    }
      guardarConfiguracionNoche(){
        ToastAndroid.show('Perfil guardado',ToastAndroid.SHORT);
  }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cuerpo}>

                    <ScrollView>                  
                        <Card title='Perfil dia' titleStyle={{color:'#e31a1a', fontSize : 25}} borderRadius={10}>
                            <View style={styles.vistaBoton}>
                            <Text titleStyle={{fontSize:10}}>
                             Lampara Uno
                            </Text>
                            <SwitchToggle  
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14   }}                                                     
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.lampa1}
                               onPress={this.onPress1}/>   
                            </View>
                            <View style={styles.vistaBoton}>
                            <Text titleStyle={{fontSize:10}}>
                              Lampara Dos
                            </Text>
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.lampa2}                              
                               onPress={this.onPress2}/>   
                            </View>
                            <View style={styles.vistaBoton}>
                            <Text titleStyle={{fontSize:10}}>
                             Lampara tres
                            </Text>
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.lampa3}
                               onPress={this.onPress3}/>   
                            </View>
                            <View style={styles.vistaBoton}>
                            <Text titleStyle={{fontSize:10}}>
                             Ventilador Uno
                            </Text>                            
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.venti1}
                               onPress={this.onPress4}/>   
                            </View>
                            <View style={styles.vistaBoton}>
                            <Text titleStyle={{fontSize:10}}>
                             Ventilador Dos
                            </Text>                            
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.venti2}
                               onPress={this.onPress5}/>   
                            </View>
                            <View style={styles.vistaBoton}>
                            <Text titleStyle={{fontSize:10}}>
                              Enfriador Uno
                            </Text>
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.enfria1}
                               onPress={this.onPress6}/>   
                            </View>
                            <View style={styles.vistaBoton}>
                            <Text>
                              Enfirador Dos
                            </Text>                            
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.enfria2}
                               onPress={this.onPress7}/>   
                            </View>
                            <View style={styles.vistaBoton}>
                            <Text titleStyle={{fontSize:10}}>
                             Aire 
                            </Text>
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.aire}
                               onPress={this.onPress8}/>   
                            </View>
                            <Button title = "Crear" 
                              buttonStyle = {{borderRadius : 20, backgroundColor : '#e31a1a'}}
                              onPress ={this.guardarConfiguracionDia}/>
                        </Card>
                        <Card title='Perfil noche' titleStyle={{color:'#e31a1a', fontSize : 25}} borderRadius={10} containerStyle={{marginTop:10}}>
                            <View style={styles.vistaBoton}>
                            <Text>
                             Lampara Uno
                            </Text>
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.lampa1N}
                               onPress={this.onPress9}/>   
                            </View>
                            <View style={styles.vistaBoton}>
                            <Text>
                              Lampara Dos
                            </Text>
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.lampa2N}                              
                               onPress={this.onPress10}/>   
                            </View>
                            <View style={styles.vistaBoton}>
                            <Text>
                             Lampara tres
                            </Text>
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.lampa3N}
                               onPress={this.onPress11}/>   
                            </View>
                            <View style={styles.vistaBoton}>
                            <Text>
                             Ventilador Uno
                            </Text>                            
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.venti1N}
                               onPress={this.onPress12}/>   
                            </View>
                            <View style={styles.vistaBoton}>
                            <Text>
                             Ventilador Dos
                            </Text>                            
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.venti2N}
                               onPress={this.onPress13}/>   
                            </View>
                            <View style={styles.vistaBoton}>
                            <Text>
                              Emfriador Uno
                            </Text>
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.enfria1N}
                               onPress={this.onPress14}/>   
                            </View>
                            <View style={styles.vistaBoton}>
                            <Text>
                              Enfirador Dos
                            </Text>                            
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.enfria2N}
                               onPress={this.onPress15}/>   
                            </View>
                            <View style={styles.vistaBoton}>
                            <Text>
                             Aire 
                            </Text>
                            <SwitchToggle
                               circleStyle = {{ width: 26, height: 26, borderRadius: 14 }}
                               circleColorOff = '#e31a1a'
                               circleColorOn = 'green' 
                               switchOn={this.state.aireN}
                               onPress={this.onPress16}/>   
                            </View>
                            <Button title = "Guardar" 
                              buttonStyle = {{borderRadius : 20, backgroundColor : '#e31a1a'}}
                              onPress ={this.guardarConfiguracionNoche}/>
                        </Card>                       
                    </ScrollView>

                </View>
            </View>
        );
    }
    onPress1 = () => {
      this.setState({ lampa1: !this.state.lampa1 });      
    };
    onPress2 = () => {
      this.setState({ lampa2: !this.state.lampa2 });      
    };
    onPress3 = () => {
      this.setState({ lampa3: !this.state.lampa3 });      
    };
    onPress4 = () => {
      this.setState({ venti1: !this.state.venti1 });      
    };
    onPress5 = () => {
      this.setState({ venti2: !this.state.venti2 });      
    };
    onPress6 = () => {
      this.setState({ enfria1: !this.state.enfria1 });      
    };
    onPress7 = () => {
      this.setState({ enfria2: !this.state.enfria2 });      
    };
    onPress8 = () => {
      this.setState({ aire: !this.state.aire });      
    };
    onPress9 = () => {
      this.setState({ lampa1N: !this.state.lampa1N });      
    };
    onPress10 = () => {
      this.setState({ lampa2N: !this.state.lampa2N });      
    };
    onPress11 = () => {
      this.setState({ lampa3N: !this.state.lampa3N });      
    };
    onPress12 = () => {
      this.setState({ venti1N: !this.state.venti1N });      
    };
    onPress13 = () => {
      this.setState({ venti2N: !this.state.venti2N });      
    };
    onPress14 = () => {
      this.setState({ enfria1N: !this.state.enfria1N });      
    };
    onPress15 = () => {
      this.setState({ enfria2N: !this.state.enfria2N });      
    };
    onPress16 = () => {
      this.setState({ aireN: !this.state.aireN });      
    };

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
      justifyContent: 'center'   
    },
    pie: {
      flex: 1.8,
      backgroundColor: 'black',
    },
    vistaBoton:{
      height: 50,
      flex: 1,
      flexDirection : 'row',
      justifyContent: 'space-between',  
    }, 
    estiloBoton:{
      
      backgroundColor: '#e31a1a'
    }
      
  });