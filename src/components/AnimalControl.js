import React from 'react'
import AnimalList from './AnimalList'
import AnimalEdit from './AnimalEdit'
import AnimalDetails from './AnimalDetails'
import PropTypes from 'prop-types'

class AnimalControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      headlines: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <AnimalList />
        <AnimalDetails />
        <AnimalEdit />
      </React.Fragment>
    )
  }
}

export default AnimalControl