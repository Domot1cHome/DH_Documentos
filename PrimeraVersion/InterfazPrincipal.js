import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class ClaseEncabezado extends React.Component {
  render() {
    return (
      <View style={styles.cabeza}>
        <Text style={{ color: 'white', }}>
          Interfaz Principal
         </Text>
      </View>
    );
  }
};


export default class InterfazPrincipal extends React.Component {

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
    this.IrAEventos = this.IrAEventos.bind(this);
    this.IrAActuadores = this.IrAActuadores.bind(this);

  }



  Metodo() {
    alert('Perro :v');
  }

  IrAEventos() {
    this.props.navigation.navigate('Eventos');
  }

  IrAActuadores() {
    this.props.navigation.navigate('Actuadores');
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cuerpo}>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 180, }}>

            <View style={styles.separadoresCirculoChinga}>
              <View style={styles.circuloChinga} onTouchEnd={this.Metodo} >
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require('/ProyectosReactNative/DH/Recursos/Iconos/flechaI.png')}
                />
              </View>
            </View>


            <View style={styles.circulo} onTouchEnd={this.Metodo} >
              <Image
                style={{ width: 90, height: 131 }}
                source={require('/ProyectosReactNative/DH/Recursos/Iconos/bombilloOff.png')}
              />
            </View>

            <View style={styles.separadoresCirculoChinga}>
              <View style={styles.circuloChinga} onTouchEnd={this.Metodo}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require('/ProyectosReactNative/DH/Recursos/Iconos/flechaD.png')}
                />
              </View>
            </View>


          </View>


        </View>

        <View style={styles.pie}>


          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 15, }}>

            <View style={styles.separadoresCirculoPie}>
              <View style={styles.circuloPie} onTouchEnd={this.IrAEventos}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require('/ProyectosReactNative/DH/Recursos/Iconos/reloj.png')}
                />
              </View>
            </View>

            <View style={styles.separadoresCirculoPie}>
              <View style={styles.circuloPie} onTouchEnd={this.IrAActuadores}>

                <Image
                  style={{ width: 40, height: 40 }}
                  source={require('/ProyectosReactNative/DH/Recursos/Iconos/ojo.png')}
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
  circulo: {
    width: 190,
    height: 190,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 190 / 2,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circuloChinga: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 45 / 2,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separadoresCirculoChinga: {
    paddingTop: 70,
    paddingLeft: 40,
    paddingRight: 40,
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
