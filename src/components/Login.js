import React, { Component } from "react"
import styles from "../styles/login-style"
import Wallpaper from "./Wallpaper"
import ButtonSubmit from "./common/ButtonSubmit"
import Logo from "./Logo"
import UserInput from "./common/UserInput"
import { LOGO_TITLE } from "../UtilConstants/styleProperty"
class Login extends Component {
  render() {
    return (
      <Wallpaper
        style={styles.loginBackground}
        imgSource={require("../img/Grandeur.jpg")}
      >
        <Logo source={require("../img/logo.png")} title={LOGO_TITLE} />
        {/* <TextInput style={styles.input} placeholder="user name" /> */}
        <UserInput avatar={"user"} />
        <UserInput avatar={"lock"} />
        <ButtonSubmit title={"Login"} navigation={this.props.navigation} />
      </Wallpaper>
    )
  }
}

export default Login
