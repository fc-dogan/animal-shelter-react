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
      animals: []
    };
  }

  makeApiCall = () => {
    fetch("http://localhost:5000/api/v1/animals/")
    .then(response => response.json())
    .then(
        (jsonifiedResponse) => {
          console.log(jsonifiedResponse);
          // if (jsonifiedResponse.status === 200 && jsonifiedResponse.ok) {
          //   console.log(jsonifiedResponse)
            this.setState({
              isLoaded: true,
              animals: jsonifiedResponse
            });
          // } else {
          //   return false;
          // }
        })
    .catch((error) => {
      this.setState({
        isLoaded: true,
        error
      });
    })
  }

  componentDidMount() {
    this.makeApiCall();
  }


  render() {
    const {error, isLoaded, animals} = this.state;
    console.log(animals)
    if(error) {
      return <React.Fragment> Error: {error.message} </React.Fragment>
    } else if (!isLoaded) {
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

export default AnimalControl