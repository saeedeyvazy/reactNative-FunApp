import axios from "axios"
import { GET_ARTICLE, GET_PHOTOS, POST_ARTICLE } from "./actionsType"
import { ARTICLE_URI, PHOTO_CLIENT_ID, PHOTOS_URI } from "../../UtilConstants/constants"

export function getArticle() {
  const request = axios
    .get(`${ARTICLE_URI}/posts`)
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(error => console.log(error.message))

  return {
    type: GET_ARTICLE,
    payload: request
  }
}

export function postArticle(data) {
  const response = axios
    .post(`${ARTICLE_URI}/posts`, data)
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(error => console.log(error))

  return {
    type: POST_ARTICLE,
    payload: response
  }
}

export function getPhoto() {
  const response = axios
    .get(`${PHOTOS_URI}/photos/${PHOTO_CLIENT_ID}`)
    .then(response => response.data)
    .catch(error => console.log(error))

  return {
    type: GET_PHOTOS,
    payload: response
  }
}
