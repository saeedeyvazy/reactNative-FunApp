import { connect } from "react-redux"
import React, { Component } from "react"
import { bindActionCreators } from "redux"
import Loading from "../../components/common/Loading"
import MenuButton from "../../components/common/MenuButton"
import ArticleListItem from "./ArticleListItem"

export function ArticleList({ list }) {
  return list
    .reverse()
    .map(item => (
      <ArticleListItem key={item.id} title={item.title} body={item.body} />
    ))
}
