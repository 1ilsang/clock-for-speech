import { TOGGLE_THEME } from '~/model/actionType';

const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
