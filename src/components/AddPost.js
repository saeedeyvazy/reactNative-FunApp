import { View, StyleSheet } from "react-native"
import React, { Component } from "react"
import Button from "./common/Button"
import { AddPostBtnStyle } from "./styles/ButtonStyle"
import NewPostModal from "./NewPostModal"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { postArticle } from "../Store/actions"

class AddPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ModalVisibleStatus: false
    }
  }

  ShowModalFunction(visible) {
    this.setState({ ModalVisibleStatus: visible })
  }
  createNewPost(data) {
    this.props.postArticle(data)
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <NewPostModal
          visible={this.state.ModalVisibleStatus}
          changeVisible={visible => this.ShowModalFunction(visible)}
          submit={data => this.createNewPost(data)}
        />
        <Button
          onPress={() => {
            this.ShowModalFunction(true)
          }}
          text={"Add Post"}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems: "center"
  }
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ postArticle }, dispatch)
}
export default connect(
  null,
  mapDispatchToProps
)(AddPost)
