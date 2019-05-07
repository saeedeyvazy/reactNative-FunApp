import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import Banner from "./Banner";
import ContentContainer from "./ContentContainer";
import MenuButton from "./common/MenuButton";
import { Header } from "native-base";

class Home extends Component {
  render() {
    return (
      <View>
        <Header style={{ backgroundColor: "white" }}>
          <MenuButton navigation={this.props.navigation} />
        </Header>
        <ScrollView>
          <Banner />
          <ContentContainer />
        </ScrollView>
      </View>
    );
  }
}

export default Home;
