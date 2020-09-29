import React from 'react'
import AnimalList from './AnimalList'
import AnimalEdit from './AnimalEdit'
import AnimalDetails from './AnimalDetails'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';

class AnimalControl extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   error: null,
    //   isLoaded: false,
    //   animals: []
    // };
  }

  

  componentDidMount() {
    // Now we'll use dispatch() to make our API call.
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const {error, isLoaded, animals} = this.props;
    console.log(animals)
    if(error) {
      return <React.Fragment> Error: {error.message} </React.Fragment>
    } else if (isLoaded) {
      return <React.Fragment>Loading... </React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <ul>
          {animals.map((animal, index) => 
            <li key={index}>
              <h3>{animal.name}</h3>
              <p>type: {animal.type}</p>
              <p>age :{animal.age}</p>
              <p>gender: {animal.gender}</p>
            </li>
          )}
          </ul>
        </React.Fragment>
      )
    }
 
  }
}

const mapStateToProps = state => {
  return {
    animals: state.animals,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(AnimalControl)