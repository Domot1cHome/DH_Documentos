import React from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import ActionButton from "react-native-circular-action-menu";
import { Button, Card, Icon } from "react-native-elements";

class ClaseEncabezado extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row", paddingRight: 57 }}>
        <View style={styles.cabeza}>
          <Text style={{ color: "white" }}>Usuarios</Text>
        </View>
      </View>
    );
  }
}
export default class Usuarios extends React.Component {
  static navigationOptions = {
    headerTitle: <ClaseEncabezado />,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#e31a1a"
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cuerpo}>
          <Text>
          Holo!
          </Text>
        </View>
      </View>
    );
  }

  componentDidMount() {
    //console.log("#Se montó la vista");
  }

  componentWillUpdate() {
    //console.log("#1 Se actualizará la vista")
  }

  componentDidUpdate() {
    //console.log("#2 Se actualizó la vista");
  }

  componentWillUnmount() {
    //console.log("#Se desmonto la vista");
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cabeza: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  cuerpo: {
    flex: 10,
    backgroundColor: "#ffff"
  },
  pie: {
    flex: 1.3,
    backgroundColor: "transparent"
  }
});
