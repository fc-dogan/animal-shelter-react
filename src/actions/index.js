import * as c from './ActionTypes';

export const requestAnimals = () => ({
  type: c.REQUEST_ANIMALS
});

export const getAnimalsSuccess = (animals) => ({
  type: c.GET_ANIMALS_SUCCESS,
  animals
});

export const getAnimalsFailure = (error) => ({
  type: c.GET_ANIMALS_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestAnimals);
    return fetch("http://localhost:5000/api/v1/animals/")
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        dispatch(getAnimalsSuccess(jsonifiedResponse));
      })
      .catch((error) => {
        dispatch(getAnimalsFailure(error))
      })
  }
}