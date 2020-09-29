import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { postAnimalToApi } from '../actions/index';

function NewAnimalForm() {
  const dispatch = useDispatch();

  function handleAdd(event) {
    event.preventDefault();

    dispatch(postAnimalToApi({name: event.target.name.value, type: event.target.type.value, age: event.target.age.value, gender: event.target.gender.value}))
  }

  return (
    <React.Fragment>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          name="name"
          placeholder="Name" /><br />
        <input
          type="text"
          name="type"
          placeholder="Type of animal" /><br />
        <input
          type="text"
          name="age"
          placeholder="Age" /><br />
        <input
          type="text"
          name="gender"
          placeholder="Gender" /><br />
        <button type="submit">Add animal</button>
      </form>
      <button>Return to main page</button>
    </React.Fragment>
  )
}

// const mapDispatchToProps = dispatch => {
//   return {
//     postAnimalToApi: (event) => dispatch(postAnimalToApi(event))
//   }
// }

// export default connect(mapDispatchToProps)(NewAnimalForm)
export default NewAnimalForm
