import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';
import RecipeItem from './recipesComp/RecipeItem';

class SavedRecipes extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  renderList = () => {
    if (!this.props.recipes) return <div>Loading...</div>;
    return this.props.recipes.map((recipe) => {
      return <RecipeItem recipe={recipe} exist={true} key={recipe.uri} />;
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Saved Recipes:</h2> <br />
        </div>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { recipes: Object.values(state.myRecipes) };
};

export default connect(mapStateToProps, {
  fetchRecipes,
})(SavedRecipes);
