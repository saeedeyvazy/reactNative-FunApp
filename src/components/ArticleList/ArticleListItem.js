import React, { Component } from "react"
import PropTypes from "prop-types"
import { Card, CardItem, Text, Body } from "native-base"

const propTypes = {
  key: PropTypes.number.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
  footer: PropTypes.string
}

const defaultProps = {
  title: `title`,
  footer: `GeekyAnts`
}

class ArticleListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { key, title, body, footer } = this.props

    return (
      <Card key={key}>
        <CardItem header bordered>
          <Text>{title}</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{body}</Text>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Text>{footer}</Text>
        </CardItem>
      </Card>
    )
  }
}

ArticleListItem.propTypes = propTypes
ArticleListItem.defaultProps = defaultProps

export default ArticleListItem
