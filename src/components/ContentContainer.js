import React, { Component } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import CustomImage from "./CustomeImage";

class ContentContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.col2}>
          <CustomImage
            description="Tiger"
            imageSource={require("../img/img2.jpg")}
          />
        </View>
        <View style={styles.col1}>
          <CustomImage
            description="Shoes"
            imageSource={require("../img/img1.jpg")}
          />
        </View>

        <View style={styles.contentContainer}>
          <CustomImage
            description="Love"
            imageSource={require("../img/img4.jpg")}
          />
        </View>

        <View style={styles.col1}>
          <CustomImage
            description="Mobile"
            imageSource={require("../img/img3.jpg")}
          />
        </View>
        <View style={styles.col2}>
          <CustomImage
            description="Lexus"
            imageSource={require("../img/img5.jpg")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5
  },
  col2: {
    flex: 2,
    padding: 5
  },
  col1: {
    flex: 1,
    padding: 5
  },
  contentContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ContentContainer;
