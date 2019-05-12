import { StyleSheet } from "react-native"
import { DEVICE_WIDTH } from "../../../UtilConstants/styleProperty"

export const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: "#ffffff"
  },
  inputSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  avatar: {
    position: "absolute",
    left: 35
  }
})
