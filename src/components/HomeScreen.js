import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MenuButton from "./common/MenuButton";
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
