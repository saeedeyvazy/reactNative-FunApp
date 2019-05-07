import React, { Component } from "react"
import { Text, View, StyleSheet, Animated, BackHandler } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import {
  DEVICE_WIDTH,
  MARGIN,
  DEVICE_HEIGHT
} from "../../UtilConstants/styleProperty"

class ButtonSubmit extends Component {
  constructor(props) {
    super(props)
    this.animation = {
      buttonAnimate: new Animated.Value(0),
      growAnimation: new Animated.Value(0)
    }
  }

  resetAnimation() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      const { buttonAnimate, growAnimation } = this.animation
      buttonAnimate.setValue(0)
      growAnimation.setValue(0)
    })
  }

  componentWillMount() {
    this.resetAnimation()
  }

  onPress() {
    Animated.sequence([
      Animated.timing(this.animation.buttonAnimate, {
        toValue: 1,
        duration: 500
      }),

      Animated.timing(this.animation.growAnimation, {
        toValue: 0.5,
        duration: 200
      }),
      Animated.timing(this.animation.growAnimation, {
        toValue: 1,
        duration: 1000
      })
    ]).start()
    setTimeout(() => this.props.navigation.navigate("Posts"), 2500)
  }

  render() {
    const changeWidth = this.animation.buttonAnimate.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN]
    })

    const changeScale = this.animation.growAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN + 40]
    })
    return (
      <View>
        <Animated.View style={{ width: changeWidth }}>
          <TouchableOpacity
            onPress={() => this.onPress()}
            style={styles.button}
            activeOpacity={1}
          >
            <Text>{this.props.title}</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[styles.circle, { transform: [{ scale: changeScale }] }]}
        />
      </View>
    )
  }
}
export default ButtonSubmit
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#1cb5e0",
    height: 40,
    zIndex: 100
  },
  circle: {
    minHeight: 40,
    minWidth: 40,
    marginTop: -60,
    borderWidth: 0.2,
    borderRadius: 100,
    alignSelf: "center",
    backgroundColor: "#000046",
    position: "absolute",
    right: 0,
    top: DEVICE_HEIGHT,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "black",
    backgroundColor: "transparent"
  }
})
