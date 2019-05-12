import { GET_ARTICLE, POST_ARTICLE } from "../actions/actionsType"

const initialState = {
  articles: [],
  isFetching: true,
  newPost: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLE:
      return { ...state, articles: action.payload, isFetching: false }
    case POST_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
        isFetching: false
      }
    default:
      return state
  }
}
