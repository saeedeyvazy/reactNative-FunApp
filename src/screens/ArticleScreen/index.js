import { connect } from "react-redux"
import React, { Component } from "react"
import { bindActionCreators } from "redux"
import Loading from "../../components/common/Loading"
import MenuButton from "../../components/common/MenuButton"
import { getArticle } from "../../store/actions"
import { Container, Content } from "native-base"
import { ArticleList } from "../../components/ArticleList"

class Article extends Component {
  componentDidMount() {
    this.props.getArticle()
  }

  render() {
    let result
    if (!this.props.isFetching) {
      result = <ArticleList list={this.props.articles} />

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
