import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.containerd}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
