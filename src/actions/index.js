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