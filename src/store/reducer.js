import { TOGGLE_THEME, SEARCH_IMAGE_FOR_BACKGROUND } from '~/model/actionType';

const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: payload,
      };
    case SEARCH_IMAGE_FOR_BACKGROUND:
      return {
        ...state,
        searchQuery: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
