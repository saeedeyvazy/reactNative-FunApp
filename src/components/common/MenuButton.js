import React, { Component } from "react"
import { StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

class MenuButton extends Component {
  render() {
    return (
      <Icon
        style={styles.menuButton}
        name="md-menu"
        size={40}
        onPress={() => this.props.navigation.toggleDrawer()}
      />
    )
  }
}

const styles = StyleSheet.create({
  menuButton: {
    position: "absolute",
    top: 10,
    left: 10,
    color: "#000"
  }
})

export default MenuButton
