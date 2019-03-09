import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class ClaseEncabezado extends React.Component {
  render() {
    return (
      <View style={styles.cabeza}>
        <Text style={{ color: 'white', }}>
          Actuadores
        </Text>
      </View>
    );
  }
};

export default class Actuadores extends React.Component {

  static navigationOptions = {
    headerTitle: <ClaseEncabezado />,
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#e31a1a',
    },
  };

  constructor(props) {
    super(props);
    this.Metodo = this.Metodo.bind(this);
    this.IrAInterfazPrincipal = this.IrAInterfazPrincipal.bind(this);
    this.IrAEventos = this.IrAEventos.bind(this);

  }



  Metodo() {
    alert('Perro :v');
  }

  IrAInterfazPrincipal() {
    this.props.navigation.navigate('InterfazPrincipal');
  }

  IrAEventos() {
    this.props.navigation.navigate('Eventos');
  }

  EventoFlechaDerecha(){
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cuerpo}>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>

            <Text></Text>

          </View>


        </View>

        <View style={styles.pie}>


          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 15, }}>

            <View style={styles.separadoresCirculoPie}>
              <View style={styles.circuloPie} onTouchEnd={this.IrAInterfazPrincipal}>

                <Image
                  style={{ width: 40, height: 40 }}
                  source={require('/ProyectosReactNative/DH/Recursos/Iconos/casa.png')}
                />

              </View>
            </View>

            <View style={styles.separadoresCirculoPie}>
              <View style={styles.circuloPie} onTouchEnd={this.IrAEventos}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require('/ProyectosReactNative/DH/Recursos/Iconos/reloj.png')}
                />
              </View>
            </View>





          </View>


        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  cabeza: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cuerpo: {
    flex: 10,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pie: {
    flex: 1.8,
    backgroundColor: '#e31a1a',
  },
  circuloPie: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 65 / 2,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separadoresCirculoPie: {
    paddingLeft: 40,
    paddingRight: 40,
  },


});
