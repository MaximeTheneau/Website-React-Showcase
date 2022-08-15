import { FETCH_CARD } from "../action/card";

export const initialState = {
  home: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CARD:
      return {
        ...state,
        home: action.home,
      };
    default:
      return state;
  }
};

export default reducer;