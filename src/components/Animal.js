import React from 'react'
import PropTypes from 'prop-types'

function Animal(props) {
  const { name, type, age, gender } =props
  return (
    <div>
      <li >
        <h3>{name}</h3>
        <p>type: {type}</p>
        <p>age :{age}</p>
        <p>gender: {gender}</p>
      </li>
    </div>
  )
}

Animal.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string, 
  age: PropTypes.number,
  gender: PropTypes.string
}


export default Animal
