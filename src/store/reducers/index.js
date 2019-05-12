import { combineReducers } from "redux"
import articles from "./article_reducer"
import photos from "./photo_reducer.js"

const rootReducer = combineReducers({
  articles,
  photos
})

export default rootReducer
