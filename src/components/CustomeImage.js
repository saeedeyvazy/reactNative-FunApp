import React, { Component } from "react"
import { StyleSheet, Image, ImageBackground, View, Text } from "react-native"
import ImageOverlay from "./ImageOverlay"

class CustomImage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ImageBackground
        style={style.image}
        source={{ uri: this.props.imageSource }}
      >
        {this.props.description ? (
          <ImageOverlay description={this.props.description} />
        ) : (
          <Text />
        )}
      </ImageBackground>
    )
  }
}

const style = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default CustomImage
