import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Loading from "./common/Loading";
import { getArticle } from "../Store/actions";
import { Container, Content, Card, CardItem, Text, Body } from "native-base";
import AddPost from "./AddPost";

class Article extends Component {
  componentDidMount() {
    this.props.getArticle();
  }

  render() {
    if (!this.props.isFetching) {
      console.log("re rendering");
      const result = this.props.articles.reverse().map((item, index) => (
        <Card key={index}>
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
      ));

      return (
        <Container>
          <AddPost />
          <Content>{result}</Content>
        </Container>
      );
    } else return <Loading />;
  }
}

const mapStateToProps = state => {
  const { articles, isFetching } = state.articles;
  return { articles, isFetching };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getArticle }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
