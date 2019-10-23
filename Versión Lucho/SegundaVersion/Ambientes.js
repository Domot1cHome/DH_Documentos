import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';
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
    this.LlenarCartas = this.LlenarCartas.bind(this);
    
  }

  LlenarCartas(){
    
  }
  

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cuerpo}>

          <ScrollView>


            <Card title='Ambiente A'>

              <View styles={{justifyContent:'center', alignItems:'center'}}>
                <Text>
                Capacidad de aprendices:  22
                </Text>
                <Text>
                Cantidad de dispositivos asociados: 3
                </Text>
                <Text>
                Estado actual del ambiente: En uso
                </Text>
              </View>

              <View style={{paddingTop:20 ,flexDirection:'row', justifyContent: 'flex-end'}}>
               
                 <Button title='Editar' 
                    icon={<Icon name='create' color='#e31a1a' />}
                    type='outline' 
                    titleStyle={{color:'#e31a1a'}} 
                    buttonStyle={{borderColor:'#e31a1a',}}  
                    onPress={this.Metodo}
                 /> 

                 <Button title='Eliminar' 
                    icon={<Icon name='clear' color='#e31a1a' />}
                    type='outline' 
                    titleStyle={{color:'#e31a1a'}} 
                    buttonStyle={{borderColor:'#e31a1a',}}  
                    onPress={this.Metodo}
                 /> 
              </View>   
            </Card>

            <Card title='Ambiente B'>

              <View styles={{justifyContent:'center', alignItems:'center'}}>
                <Text>
                Capacidad de aprendices:  18
                </Text>
                <Text>
                Cantidad de dispositivos asociados: 1
                </Text>
                <Text>
                Estado actual del ambiente: En uso
                </Text>
              </View>

              <View style={{paddingTop:20 ,flexDirection:'row', justifyContent: 'flex-end'}}>
               
                 <Button title='Editar' 
                    icon={<Icon name='create' color='#e31a1a' />}
                    type='outline' 
                    titleStyle={{color:'#e31a1a'}} 
                    buttonStyle={{borderColor:'#e31a1a',}}  
                    onPress={this.Metodo}
                 /> 

                 <Button title='Eliminar' 
                    icon={<Icon name='clear' color='#e31a1a' />}
                    type='outline' 
                    titleStyle={{color:'#e31a1a'}} 
                    buttonStyle={{borderColor:'#e31a1a',}}  
                    onPress={this.Metodo}
                 /> 
              </View>   
            </Card>

            <Card title='Ambiente C'>

              <View styles={{justifyContent:'center', alignItems:'center'}}>
                <Text>
                Capacidad de aprendices:  30
                </Text>
                <Text>
                Cantidad de dispositivos asociados: 4
                </Text>
                <Text>
                Estado actual del ambiente: 
                </Text>
              </View>

              <View style={{paddingTop:20 ,flexDirection:'row', justifyContent: 'flex-end'}}>
               
                 <Button title='Editar' 
                    icon={<Icon name='create' color='#e31a1a' />}
                    type='outline' 
                    titleStyle={{color:'#e31a1a'}} 
                    buttonStyle={{borderColor:'#e31a1a',}}  
                    onPress={this.Metodo}
                 /> 

                 <Button title='Eliminar' 
                    icon={<Icon name='clear' color='#e31a1a' />}
                    type='outline' 
                    titleStyle={{color:'#e31a1a'}} 
                    buttonStyle={{borderColor:'#e31a1a',}}  
                    onPress={this.Metodo}
                 /> 
              </View>   
            </Card>

          </ScrollView>
         
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


// Hoja de estilos 
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
    flex: 1.8,
    backgroundColor: 'transparent',
  }
  

});
