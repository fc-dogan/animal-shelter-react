import animalsReducer from '../../reducers/animals-reducer'

describe('animalsReducer', () => {
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
  })
  


})
