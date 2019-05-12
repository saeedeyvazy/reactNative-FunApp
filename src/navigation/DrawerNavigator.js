import React from "react"
import { createAppContainer, createBottomTabNavigator } from "react-navigation"
import HomeScreen from "../screens/HomeScreen"
import Gallery from "../components/Home"
import Article from "../screens/ArticleScreen"
import MenuDrawer from "../components/MenuDrawer"
import LoginScreen from "../screens/LoginScreen"
import PhotoScreen from "../screens/PhotoScreen"

const drawerConfig = {
  contentComponent: ({ navigation }) => <MenuDrawer navigation={navigation} />
}

const DrawerNavigator = createBottomTabNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Gallery: {
      screen: Gallery
    },
    Home: {
      screen: HomeScreen
    },
    Article: { screen: Article },
    Photos: {
      screen: PhotoScreen
    }
  },
  drawerConfig
)

export default createAppContainer(DrawerNavigator)
