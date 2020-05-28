import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";
import ComponenteTexto from "./componenteTexto";

export class ChildComponent extends Component {
  render() {
    return (
      <View>
        <View style={this.props.status ? styles.on : styles.off} />
      </View>
    );
  }
}

export default class MainClass extends Component {
  constructor() {
    super();
    this.state = { status: false };
  }

  clicked() {
    this.setState({
      status: !this.state.status,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ChildComponent status={this.state.status} />
        <Button
          onPress={this.clicked.bind(this)}
          title="Click Here"
          color="blue"
        />
        <ComponenteTexto />
        <Text style={styles.welcome}>Hola Jean Melvin</Text>
        <Text style={styles.instructions}>Yo soy Jean Melvin</Text>
        <Text style={styles.instructions}>
          Presiona Ctrl+R para actualizar la página .
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  on: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
  },
  off: {
    width: 100,
    height: 100,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    color: "gray",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "purple",
    marginBottom: 5,
  },
});

AppRegistry.registerComponent("Hola Jean Melvin", () => jean);

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});*/
