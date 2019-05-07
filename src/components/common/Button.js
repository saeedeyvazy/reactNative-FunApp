import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/ButtonStyle";
class Button extends Component {
  onPress() {
    this.props.onPress();
  }
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={() => this.onPress()}>
        <Text style={{ color: "black", fontSize: 12 }}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
