import {
  FETCH_ITEM_DETAILS_BEGIN,
  FETCH_ITEM_DETAILS_SUCCESS,
  FETCH_ITEM_DETAILS_FAILURE,
} from '../actions/detail-actions';

const initialState = {
  details: null,
  categories: null,
  loading: null,
  error: null,
};

export default function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEM_DETAILS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        details: null,
        categories: null,
      };

    case FETCH_ITEM_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        categories: action.payload.categories,
        details: action.payload.details,
      };

    case FETCH_ITEM_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        details: null,
        categories: null,
      };

    default:
      return state;
  }
}
