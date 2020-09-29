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

// export const addAnimal = createAction('ADD_TODO', todo => ({
//   payload: {data: {...todo, completed: false}}
// }));
// export const addAnimal = (animal) => ({
//   type: c.POST_ANIMAL,
//   animal
// })
// export const addTodoSuccess = createAction('ADD_TODO_SUCCESS');
// export const addTodoError = createAction('ADD_TODO_ERROR');


export const postAnimalToApi = (newAnimalobj) => {
  console.log(newAnimalobj.name);
  return dispatch => {
    const requestOptions = {
      
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newAnimalobj)
    }
    return fetch('http://localhost:5000/api/v1/animals', requestOptions)
    .then( () => {
      dispatch(makeApiCall())
    })
    .catch(error => {
      console.log("post error", error)
    })
  }
}

export const deleteAnimal = (id) =>{
  return dispatch => {
    const requeatOptions = {
      // mode: 'no-cors',
      method: 'DELETE'
    }
    return fetch("http://localhost:5000/api/v1/animals/" + {id}, requeatOptions)
    .then( () => {
      dispatch(makeApiCall())
    })
    .catch(error => {
      console.log('delete error', error)
    })
  }
}