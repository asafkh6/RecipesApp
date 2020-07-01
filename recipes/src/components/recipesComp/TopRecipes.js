import React from 'react';
import { connect } from 'react-redux';
import edamam from '../../apis/edamam';
import OneRecipe from './OneRecipe';

class TopRecipes extends React.Component {
  componentDidMount() {}

  renderList = () => {
    return this.props.recipes.map((recipe) => {
      return <OneRecipe uri={recipe.uri} />;
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { recipes: state.topRecipes };
};

export default connect(mapStateToProps)(TopRecipes);
