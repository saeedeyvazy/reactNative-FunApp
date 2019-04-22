import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, Text } from "react-native";

class ImageOverlay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.overlay}>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 5,
    opacity: 0.6,
    height: 40,
    borderColor: "#ccc",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
  overlay: {
    color: "black"
  }
});

export default ImageOverlay;
