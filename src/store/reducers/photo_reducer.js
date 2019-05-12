import { GET_PHOTOS } from "../actions/actionsType"

const initialState = {
  isFetching: true,
  photos: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS:
      return { ...state, isFetching: false, photos: action.payload }

    default:
      return state
  }
}
