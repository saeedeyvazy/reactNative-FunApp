import React, { Component } from "react"
import CustomImage from "../CustomeImage"
import { Card, Thumbnail, Body, Text, Left, CardItem, Icon } from "native-base"

class PhotoItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      thumbnail,
      thumbnailTitle,
      thumbnailNote,
      imageSource,
      iconName,
      iconDesc,
      description
    } = this.props
    return (
      <Card style={{ elevation: 3, width: "100%" }}>
        <CardItem>
          <Left>
            <Thumbnail source={thumbnail} />
            <Body>
              <Text>{thumbnailTitle}</Text>
              <Text note>{thumbnailNote}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <CustomImage description={description} imageSource={imageSource} />
        </CardItem>

        <CardItem>
          <Icon name={iconName} style={{ color: "#ED4A6A" }} />
          <Text>{`${iconDesc} Likes`}</Text>
        </CardItem>
      </Card>
    )
  }
}

export default PhotoItem
