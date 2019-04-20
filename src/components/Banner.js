import React, { Component } from "react";
import { StyleSheet, Image, View, Text } from "react-native";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.bannerImg = require("../img/banner.jpg");
  }

  render() {
    return (
      <View style={style.container}>
        <Image style={style.bannerImg} source={this.bannerImg} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },

  bannerImg: {
    width: "100%",
    height: 200
  }
});

export default Banner;
