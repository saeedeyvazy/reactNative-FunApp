import { StyleSheet } from "react-native"
import { MARGIN, DEVICE_WIDTH } from "../../../UtilConstants/styleProperty"
export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#1cb5e0",
    height: 40
  },
  circle: {
    minHeight: 60,
    minWidth: 60,
    marginTop: -MARGIN,
    borderWidth: 0.2,
    borderRadius: 100,
    alignSelf: "center",
    backgroundColor: "#000046",
    position: "absolute",
    top: DEVICE_WIDTH / 1.5,
    right: 0
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "black",
    backgroundColor: "transparent"
  },
  topLeftQaurter: {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  }
})
