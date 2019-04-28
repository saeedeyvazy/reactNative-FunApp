const initialState = {
  articles: [],
  isFetching: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_ARTICLE":
      return { ...state, articles: action.payload, isFetching: false };
    default:
      return state;
  }
}
