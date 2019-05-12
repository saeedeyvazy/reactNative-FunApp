import React, { Component } from "react"
import styles from "./style"
import Wallpaper from "../../components/common/Wallpaper"
import ButtonSubmit from "../../components/common/ButtonSubmit"
import Logo from "../../components/common/Logo"
import UserInput from "../../components/common/UserInput"
import { LOGO_TITLE } from "../../UtilConstants/styleProperty"
class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper
        style={styles.loginBackground}
        imgSource={require("../../img/Grandeur.jpg")}
      >
        <Logo source={require("../../img/logo.png")} title={LOGO_TITLE} />
        <UserInput avatar={"user"} />
        <UserInput avatar={"lock"} />
        <ButtonSubmit title={"Login"} navigation={this.props.navigation} />
      </Wallpaper>
    )
  }
}

export default LoginScreen
