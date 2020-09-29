import React from 'react'
import AnimalList from './AnimalList'
import AnimalEdit from './AnimalEdit'
import AnimalDetails from './AnimalDetails'
import NewAnimalForm from './NewAnimalForm'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';
import SearchForm from './SearchForm'

class AnimalControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      searchAnimalType: null
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  onSearchSubmission = (searchObject) => {
    const { type } = searchObject;
    let typeQuery = (type !== "") ? type : "";
    this.setState({searched: true, searchAnimalType: typeQuery });
  }

  render() {
    const {error, isLoaded, animals} = this.props;
    console.log(animals)
    if(error) {
      return <React.Fragment> Error: {error.message} </React.Fragment>
    } else if (isLoaded) {
      return <React.Fragment>Loading... </React.Fragment>;
    } else {
      let animalList;
      if (this.state.searchAnimalType !== null ) {
        animalList = animals.filter((animal) => {
          return animal.type.includes(this.state.searchAnimalType);
        });
      } else {
        animalList = animals
      }
      return (
        <React.Fragment>
          <SearchForm onSearchSubmission={this.onSearchSubmission} />
          <AnimalList animals= {animalList} />
          <NewAnimalForm />
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