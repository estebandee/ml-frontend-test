export const FETCH_ITEM_DETAILS_BEGIN = 'FETCH_ITEM_DETAILS_BEGIN';
export const FETCH_ITEM_DETAILS_SUCCESS = 'FETCH_ITEM_DETAILS_SUCCESS';
export const FETCH_ITEM_DETAILS_FAILURE = 'FETCH_ITEM_DETAILS_FAILURE';

export const fetchItemDetailsBegin = () => ({
  type: FETCH_ITEM_DETAILS_BEGIN,
});

export const fetchItemDetailsSuccess = (details, categories) => ({
  type: FETCH_ITEM_DETAILS_SUCCESS,
  payload: { details, categories },
});

export const fetchItemDetailsFailure = (error) => ({
  type: FETCH_ITEM_DETAILS_FAILURE,
  payload: { error },
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchItemDetails(id) {
  return (dispatch) => {
    dispatch(fetchItemDetailsBegin());
    return fetch(`http://localhost:8080/api/items/${id}`)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchItemDetailsSuccess(json.details, json.categories));
        // return json.item;
      })
      .catch((error) => dispatch(fetchItemDetailsFailure(error)));
  };
}
