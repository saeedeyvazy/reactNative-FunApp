import React, { Component } from "react"
import styles from "../styles/login-style"
import { View, Image, Text } from "react-native"

class Logo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.subContainer}>
        <Image style={styles.logo} source={this.props.source} />
        <Text style={styles.header}>{this.props.title}</Text>
      </View>
    )
  }
}

export default Logo
