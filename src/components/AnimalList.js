import React from 'react'
import Animal from './Animal'
import PropTypes from 'prop-types'

function AnimalList(props) {
  const {animals} = props;

  return (
    <div>
      <p>Animal List</p>
      <ul>
          {animals.map((animal, index) => 
            <Animal 
              key={index}
              name= {animal.name}
              type= {animal.type}
              age= {animal.age}
              gender= {animal.gender}
              id= {animal.animalId} />
          )}
          </ul>
    </div>
  )
}

AnimalList.propTypes = {
  animals: PropTypes.array
}

export default AnimalList
