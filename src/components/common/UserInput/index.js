import React, { Component } from "react"
import { View, TextInput, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Entypo"
import { styles } from "./style"

class UserInput extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.inputSection}>
        <Icon
          size={15}
          style={styles.avatar}
          name={this.props.avatar}
          color="white"
        />
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    )
  }
}

export default UserInput
