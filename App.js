import React, { Component } from "react";
import Login from "./src/components/Login";
import Home from "./src/components/Home";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Login: {
      screen: Login
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);
