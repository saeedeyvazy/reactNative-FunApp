import { connect } from "react-redux"
import React, { Component } from "react"
import { bindActionCreators } from "redux"
import Loading from "../../components/common/Loading"
import MenuButton from "../../components/common/MenuButton"
import { getArticle } from "../../store/actions"
import { Container, Content, Card, CardItem, Text, Body } from "native-base"
import AddPost from "../../components/AddPost"

class Article extends Component {
  componentDidMount() {
    this.props.getArticle()
  }

  render() {
    if (!this.props.isFetching) {
      const result = this.props.articles.reverse().map((item, index) => (
        <Card key={item.id} key={index}>
          <CardItem header bordered>
            <Text>{item.title}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>{item.body}</Text>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Text>GeekyAnts</Text>
          </CardItem>
        </Card>
      ))

      return (
        <Container>
          <MenuButton navigation={this.props.navigation} />
          {/* <AddPost /> */}
          <Content>{result}</Content>
        </Container>
      )
    } else return <Loading />
  }
}

const mapStateToProps = state => {
  const { articles, isFetching } = state.articles
  return { articles, isFetching }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getArticle }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article)
