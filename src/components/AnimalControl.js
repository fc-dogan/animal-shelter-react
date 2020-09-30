import React from 'react'
import AnimalList from './AnimalList'
import AnimalEdit from './AnimalEdit'
import AnimalDetails from './AnimalDetails'
import NewAnimalForm from './NewAnimalForm'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';
import SearchForm from './SearchForm'
import { BrowserRouter as Router, Switch, Route , Link } from 'react-router-dom';



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

  toggleSearched =() =>{
    this.setState({
      searched: false
    })
  }

  onSearchSubmission = (searchObject) => {
    const { type } = searchObject;
    let typeQuery = (type !== "") ? type : "";
    this.setState({searched: true, searchAnimalType: typeQuery });
  }

  render() {
    const {error, isLoaded, animals} = this.props;
    let button = null
    console.log(animals)
    if(error) {
      return <React.Fragment> Error: {error.message} </React.Fragment>
    } else if (isLoaded) {
      return <React.Fragment>Loading... </React.Fragment>;
    } else {
      let animalList;
      if (this.state.searched === true ) {
        animalList = animals.filter((animal) => {
          return animal.type.includes(this.state.searchAnimalType);
        });
        button = <button onClick={this.toggleSearched}>return to all animal list</button>
      } else {
        animalList = animals
      }
      return (
        <Router>
          <SearchForm onSearchSubmission={this.onSearchSubmission} />
          <Switch>
            <Route exact path='/' component={() => <AnimalList animals= {animalList} />} />
            <Route exact path='/newanimal' component={NewAnimalForm} />
          </Switch>
            {button}
        </Router>
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