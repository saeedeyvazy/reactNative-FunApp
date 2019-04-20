import React, { Component } from "react";
import { StyleSheet, Image, View, Text } from "react-native";

class Header extends Component {
  constructor(props) {
    super(props);
    this.logoImg = require("../img/logo.png");
  }

  render() {
    return (
      <View style={styles.header}>
        <Image style={styles.logoImg} source={this.logoImg} />
        <Text style={styles.logoDesc}>e-commerce</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    flexDirection: "row",
    marginTop: 20,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: "#ccc"
  },
  logoImg: {
    width: 60,
    height: 60
  },
  logDesc: {
    color: "#292929",
    fontStyle: "italic",
    fontSize: 20,
    marginLeft: 10
  }
});

export default Header;
