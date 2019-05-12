import { connect } from "react-redux"
import Loading from "../../components/common/Loading"
import React, { Component } from "react"
import { bindActionCreators } from "redux"
import MenuButton from "../../components/common/MenuButton"
import { getPhoto } from "../../store/actions/index"
import { Container } from "native-base"
import { ScrollView } from "react-native-gesture-handler"
import PhotoItem from "../../components/PhotoItem"

class PhotoScreen extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getPhoto()
  }

  render() {
    if (this.props.isFetching) return <Loading />
    else {
      const result = this.props.photos.map(item => (
        <PhotoItem
          key={item.id}
          thumbnail={{ uri: item.user.profile_image.medium }}
          thumbnailTitle={item.user.username}
          thumbnailNote={item.user.location}
          imageSource={item.urls.regular}
          iconName="heart"
          iconDesc={item.likes}
        />
      ))

      return (
        <Container>
          <MenuButton navigation={this.props.navigation} />
          <ScrollView style={{ marginTop: 45, padding: 5 }}>
            {result}
          </ScrollView>
        </Container>
      )
    }
  }
}

const mapStateToProps = state => {
  const { photos, isFetching } = state.photos
  return { photos, isFetching }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPhoto }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoScreen)
