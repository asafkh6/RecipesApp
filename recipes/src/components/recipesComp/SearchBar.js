import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
    //this.setState({ term: '' });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='wrap'>
          <div className='search'>
            <input
              type='text'
              className='searchTerm'
              onChange={this.onInputChange}
              value={this.state.term}
              placeholder='Search for recipes...'
            />
            <button className='searchButton' type='submit'>
              <i className='search icon'></i>
            </button>
          </div>
        </div>
      </form>
      // <form onSubmit={this.onFormSubmit}>
      //   <div className='field'>
      // <input
      //   type='text'
      //   onChange={this.onInputChange}
      //   value={this.state.term}
      //   placeholder='Search for recipes...'
      // />
      //   </div>
      // </form>
    );
  }
}

export default SearchBar;
