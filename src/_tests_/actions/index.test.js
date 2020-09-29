import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('animal reducer actions', () => {
  it('requestAnimals should create REQUEST_ANIMALS action', () => {
    expect(actions.requestAnimals()).toEqual({
      type: c.REQUEST_ANIMALS
    });
  });

  it('getAnimalsSuccess should create GET_ANIMALS_SUCCESS action', () => {
    const animals = "An animal";
    expect(actions.getAnimalsSuccess(animals)).toEqual({
      type: c.GET_ANIMALS_SUCCESS,
      animals
    });
  });

  it('getAnimalsFailure should create GET_ANIMALS_FAILURE action', () => {
    const error = "An error";
    expect(actions.getAnimalsFailure(error)).toEqual({
      type: c.GET_ANIMALS_FAILURE,
      error
    });
  });
});