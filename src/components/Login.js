import React, { Component } from "react";
import styles from "../styles/login-style";
import { StackActions, NavigationActions } from "react-navigation";
import {
  ImageBackground,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";

class Login extends Component {
  static navigationOptions = {
    title: "Login"  
  };

  onPress() {
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.loginBackground}
          source={require("../img/login.jpg")}
        >
          <Text style={styles.header}>Photo App</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="user name" />
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="password"
            />
          </View>
          <TouchableOpacity
            onPress={() => this.onPress()}
            style={styles.buttonContainer}
          >
            <Text stle={styles.loginTxt}>LOGIN</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default Login;
