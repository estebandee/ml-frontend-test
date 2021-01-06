export const FETCH_ITEMS_BEGIN = 'FETCH_ITEMS_BEGIN';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const fetchItemsBegin = () => ({
  type: FETCH_ITEMS_BEGIN,
});

export const fetchItemsSuccess = (items, categories) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: { items, categories },
});

export const fetchItemsFailure = (error) => ({
  type: FETCH_ITEMS_FAILURE,
  payload: { error },
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchItemList(query) {
  return (dispatch) => {
    dispatch(fetchItemsBegin());
    return fetch(`http://localhost:8080/api/items?q=${query}`)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchItemsSuccess(json.items, json.categories));
        // return json.items;
      })
      .catch((error) => dispatch(fetchItemsFailure(error)));
  };
}
