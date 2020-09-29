import React from 'react';
import PropTypes from 'prop-types';

function SearchForm(props) {

  function handleSearch(event) {
    event.preventDefault();
    props.onSearchSubmission({
      type: event.target.type.value,
    });
  }

  return(
    <React.Fragment>
      <form onSubmit={handleSearch}>
      <input
          type="text"
          name="type"
          placeholder="Type of animal" /><br />
        <button type="submit">SEARCH</button>
      </form>
    </React.Fragment>
  );
}

SearchForm.propTypes = {
  onSearchSubmission: PropTypes.func
}

export default SearchForm; 