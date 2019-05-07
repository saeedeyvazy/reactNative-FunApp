import React from "react";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import HomeScreen from "../components/HomeScreen";
import Gallery from "../components/Home";
import Posts from "../components/Article";
import MenuDrawer from "../components/MenuDrawer";
import Login from "../components/Login";

const drawerConfig = {
  contentComponent: ({ navigation }) => <MenuDrawer navigation={navigation} />
};

const DrawerNavigator = createDrawerNavigator(
  {
    Login: {
      screen: Login
    },
    Gallery: {
      screen: Gallery
    },
    Home: {
      screen: HomeScreen
    },
    Posts: { screen: Posts }
  },
  drawerConfig
);

export default createAppContainer(DrawerNavigator);
