import animalsReducer from '../../reducers/animals-reducer'
import * as c from '../../actions/ActionTypes'

describe('animalsReducer', () => {
  let action;
  const defaultState = {
    isLoading: false,
    animals: [],
    error: null
  };

  test('should successfully return default state if no action is passed into it', () => {
    expect(animalsReducer(defaultState, {type:null})).toEqual(
      {
        isLoading: false,
        animals: [],
        error: null
      }
    )
  });

  test('requesting animals should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_ANIMALS
    };

    expect(animalsReducer(defaultState, action)).toEqual({
        isLoading: true,
        animals: [],
        error: null
    });
  })
  
  


})
