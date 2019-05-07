import React, { Component } from "react";
import { View, Modal, Text, Button, TextInput, StyleSheet } from "react-native";

class NewPostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }
  ShowModalFunction(visible) {
    this.setState({ visible });
  }

  changePost(text, name) {
    this.setState({ [name]: text });
  }
  submit() {
    this.props.submit(this.state);
    this.props.changeVisible(false);
  }

  render() {
    return (
      <Modal
        transparent={false}
        animationType={"slide"}
        visible={this.props.visible}
        onRequestClose={() => {
          this.props.changeVisible(false);
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.ModalInsideView}>
            {/* Put All Your Components Here, Which You Want To Show Inside The Modal. */}

            <View style={styles.titleContainer}>
              <TextInput
                onChangeText={text => this.changePost(text, "title")}
                placeholder="Title"
                style={styles.titleInput}
              />

              <TextInput
                multiline={true}
                numberOfLines={10}
                onChangeText={text => this.changePost(text, "body")}
                style={styles.textArea}
                placeholder="Body"
              />
            </View>
            <Button title="submit" onPress={() => this.submit()} />
            <Button
              title="close"
              onPress={() => {
                this.props.changeVisible(false);
              }}
            />

            {/* Put All Your Components Here, Which You Want To Show Inside The Modal. */}
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  ModalInsideView: {
    height: 300,
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,.2)"
  },
  titleContainer: {
    backgroundColor: "rgba(255,255,255,.2)",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#fff",
    margin: 20
  },
  title: { padding: 10 },
  titleInput: {
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "gray",
    width: "80%"
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    borderColor: "#292929",
    borderWidth: 1,
    width: "80%"
  }
});

export default NewPostModal;
