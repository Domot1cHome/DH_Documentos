import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { Button, Card, Icon } from "react-native-elements";
import switchOn from "/ProyectosReactNative/DH/Recursos/Iconos/switchOn.png";
import switchOff from "/ProyectosReactNative/DH/Recursos/Iconos/switchOff.png";

class ClaseEncabezado extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", paddingRight: 57 }}>
        <View style={styles.cabeza}>
          <Text style={{ color: "white" }}>Controlador Componentes</Text>
        </View>
      </View>
    );
  }
}

export default class Componentes extends React.Component {
  static navigationOptions = {
    headerTitle: <ClaseEncabezado />,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#e31a1a"
    }
  };

  constructor(props) {
    super(props);
    this.state = { lamapara: false, ventilador: false, aire: false };
    this.state = {
      sourceLxA: switchOff,
      sourceLxB: switchOff,
      sourceLxC: switchOff
    };
  }

  ManipularComponentes = componente => {
    if (componente == 1) {
      this.state.lamapara = !this.state.lamapara;
      console.log("Estado lampara: " + this.state.lamapara);

      if (this.state.lamapara) {
        this.EjecutarCambio(componente, this.state.lamapara);
        this.setState({ sourceLxA: switchOn });
      } else {
        this.EjecutarCambio(componente, this.state.lamapara);
        this.setState({ sourceLxA: switchOff });
      }
    }
    if (componente == 2) {
      this.state.ventilador = !this.state.ventilador;

      console.log("Estado ventilador: " + this.state.ventilador);

      if (this.state.ventilador) {
        this.EjecutarCambio(componente, this.state.ventilador);
        this.setState({ sourceLxB: switchOn });
      } else {
        this.EjecutarCambio(componente, this.state.ventilador);
        this.setState({ sourceLxB: switchOff });
      }
    }
    if (componente == 3) {
      this.state.aire = !this.state.aire;

      console.log("Estado aire: " + this.state.aire);

      if (this.state.aire) {
        this.EjecutarCambio(componente, this.state.aire);
        this.setState({ sourceLxC: switchOn });
      } else {
        this.EjecutarCambio(componente, this.state.aire);
        this.setState({ sourceLxC: switchOff });
      }
    }
  };

  EjecutarCambio = (idComponente, estadoComponente) => {
    console.log("#EjecutarCambio");
    if (estadoComponente == true) {
      estadoComponente = 1;
    } else {
      estadoComponente = 0;
    }

    fetch(
      "http://192.168.1.3/ServiciosxDH/CxCxA.php?c=" +
        idComponente +
        "&eC=" +
        estadoComponente
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        console.log(idComponente + "" + estadoComponente);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <View
        style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10
          }}
        >
          <TouchableOpacity onPress={() => this.ManipularComponentes(1)}>
            <View style={styles.circulo}>
              <Text>Lampara</Text>
              <Text />
              <Image
                style={{ width: 100, height: 100 }}
                source={this.state.sourceLxA}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.ManipularComponentes(2)}>
            <View style={styles.circulo}>
              <Text>Ventilador</Text>
              <Text />
              <Image
                style={{ width: 100, height: 100 }}
                source={this.state.sourceLxB}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.ManipularComponentes(3)}>
            <View style={styles.circulo}>
              <Text>Aire</Text>
              <Text />
              <Image
                style={{ width: 100, height: 100 }}
                source={this.state.sourceLxC}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  cabeza: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  cuerpo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  pie: {
    flex: 1.3
  },
  circulo: {
    width: 140,
    height: 140,
    borderWidth: 0,
    borderColor: "#e31a1a",
    borderRadius: 180 / 2,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center"
  }
});
