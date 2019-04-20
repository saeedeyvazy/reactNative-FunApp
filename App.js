import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Header from "./src/components/Header";
import Banner from "./src/components/Banner";

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Header />
        <Banner />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: "100%"
  }
});
