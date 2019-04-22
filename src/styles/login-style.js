import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    color: "white",
    fontSize: 40,
    fontStyle: "italic",
    textShadowColor: "#252525",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
    marginBottom: 20
  },
  loginBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    backgroundColor: "rgba(255,255,255,.2)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#fff",
    margin: 20
  },

  input: {
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 2,
    width: "80%"
  },
  buttonContainer: {
    backgroundColor: "rgba(255,255,255,.2)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#fff",
    margin: 20
  },
  loginTxt: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "black"
  }
});

export default styles;
