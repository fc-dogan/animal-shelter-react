import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types'
import { deleteAnimal } from '../actions';
// import { makeApiCall } from '../actions';

function Animal(props) {
  const dispatch = useDispatch();
  const { name, type, age, gender, id } =props

  const handleDeleteAnimal =(id) => {
    dispatch(deleteAnimal(id))
  //  fetch(`http://localhost:5000/api/v1/animals/${id}`, {
  //   method: 'DELETE',
  //   // mode: 'cors',
  // })
  // dispatch(makeApiCall());
}

  return (
    <div>
      <li >
        <h3>{name}</h3>
        <p>type: {type}</p>
        <p>age :{age}</p>
        <p>gender: {gender}</p>
      </li>
  
        <button onClick ={() => handleDeleteAnimal(id)}>Delete</button>
  
    </div>
  )
}

Animal.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string, 
  age: PropTypes.number,
  gender: PropTypes.string,
  id: PropTypes.number
}


export default Animal
