import React from "react"
import PhotoItem from "../PhotoItem"

export function PhotoList({ list }) {
  return list.map(item => (
    <PhotoItem
      key={item.key}
      thumbnail={item.thumbnail}
      thumbnailTitle={item.thumbnailTitle}
      thumbnailNote={item.thumbnailNote}
      imageSource={item.imageSource}
      iconName={item.iconName}
      iconDesc={item.iconDesc}
    />
  ))
}
