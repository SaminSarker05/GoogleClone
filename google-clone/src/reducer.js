export const initialState = {
  term: null,
};

export const actionTypes = {
  SEARCH_TERM: "SEARCH_TERM",
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state; 
  }
}

export default reducer;