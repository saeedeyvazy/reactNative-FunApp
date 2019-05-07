import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class MenuDrawer extends Component {
  navLink(nav, text) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate(nav);
        }}
      >
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topLink}>
          <Text style={styles.menuTitle}>Menu</Text>
        </View>
        <View style={styles.buttomLink}>
          {this.navLink("Home", "Home")}
          {this.navLink("Gallery", "Gallery")}
          {this.navLink("Posts", "Posts")}
        </View>
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "white"
  },
  topLink: {
    height: 100,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  menuTitle: {
    color: "white"
  },
  buttomLink: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 30
  },
  link: {
    fontSize: 15,
    color: "black",
    textAlign: "left",
    padding: 6,
    margin: 10
  }
});

export default MenuDrawer;
