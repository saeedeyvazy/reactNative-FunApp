import React, { Component } from "react";
import Login from "./src/components/Login";
import Home from "./src/components/Home";
import Article from "./src/components/Article";

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Article: {
      screen: Article
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
