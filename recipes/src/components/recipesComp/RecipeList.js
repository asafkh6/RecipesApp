import React from 'react';
import RecipeItem from './RecipeItem';
import { connect } from 'react-redux';

class RecipeList extends React.Component {
  componentDidUpdate() {
    {
      this.renderedList();
    }
  }

  renderedList = () => {
    return this.props.results.map((recipe) => {
      return <RecipeItem recipe={recipe.recipe} key={recipe.recipe.url} />;
    });
  };

  render() {
    return (
      <div className='ui relaxed divided list'>
        {' '}
        <h2>Results:</h2>
        {this.renderedList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { results: Object.values(state.searchResults) };
};

export default connect(mapStateToProps)(RecipeList);
