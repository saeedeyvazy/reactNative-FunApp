import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticle } from "../Store/actions";
import { bindActionCreators } from "redux";
import Loading from "../components/Loading";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";

class Article extends Component {
  componentDidMount() {
    this.props.getArticle();
  }

  render() {
    if (!this.props.isFetching) {
      const result = this.props.articles.map((item, index) => (
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
          <Content>{result}</Content>
        </Container>
      );
    } else return <Loading />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    articles: state.articles.articles,
    isFetching: state.articles.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getArticle }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
