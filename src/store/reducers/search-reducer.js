import {
  FETCH_ITEMS_BEGIN,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from '../actions/search-actions';

const initialState = {
  items: null,
  categories: null,
  loading: null,
  error: null,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        items: null,
        categories: null,
      };

    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        items: action.payload.items,
        categories: action.payload.categories,
      };

    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        items: null,
        categories: null,
      };

    default:
      return state;
  }
}
