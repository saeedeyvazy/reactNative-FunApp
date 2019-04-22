import React, { Component } from "react";
import { ScrollView } from "react-native";
import Banner from "./Banner";
import ContentContainer from "./ContentContainer";

class Home extends Component {
  render() {
    return (
      <ScrollView>
        <Banner />
        <ContentContainer />
      </ScrollView>
    );
  }
}

export default Home;
