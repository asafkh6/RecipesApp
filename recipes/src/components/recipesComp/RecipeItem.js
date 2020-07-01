import React from 'react';
import '../css/RecipeItem.css';
import { Link } from 'react-router-dom';
import { saveRecipe, selectRecipe, deleteRecipe } from '../../actions';
import { connect } from 'react-redux';
import history from '../../history';
import { getId } from '../../apis/edamam';

class RecipeItem extends React.Component {
  getNutritions = (recipe) => {
    const cals = recipe.calories / recipe.yield;
    const prots = recipe.totalNutrients.PROCNT.quantity / recipe.yield;
    return (
      <div>
        <br /> Calories: {Number(cals.toFixed(1))}
        <br /> Proteins: {Number(prots.toFixed(1))}{' '}
        {recipe.totalNutrients.PROCNT.unit}
      </div>
    );
  };

  onSaveClick = () => {
    const newRecipe = {
      ...this.props.recipe,
      id: getId(this.props.recipe.uri),
    };
    this.props.saveRecipe(newRecipe);
  };

  onDeleteClick = () => {
    this.props.deleteRecipe(getId(this.props.recipe.uri));
  };

  renderButton = () => {
    if (this.props.exist)
      return (
        <button className='ui button red' onClick={this.onDeleteClick}>
          Delete Recipe
        </button>
      );
    return (
      <button className='ui button green' onClick={this.onSaveClick}>
        Save Recipe
      </button>
    );
  };

  renderRecipe = () => {};

  render() {
    if (!this.props.recipe.uri) return <div>Loading...</div>;
    return (
      <div className='item'>
        <img
          className='ui medium image'
          src={this.props.recipe.image}
          alt='pic'
        />
        <div className='content'>
          <div className='hearder'>
            <Link to={`/recipe/${getId(this.props.recipe.uri)}`}>
              <h3>{this.props.recipe.label}</h3>
            </Link>
          </div>
          <div className='description'>
            {' '}
            the description of the recipe: <br />
            {this.getNutritions(this.props.recipe)}
          </div>
          <div className='details'>Date added: 14.6.20</div>
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

export default connect(null, {
  saveRecipe,
  selectRecipe,
  deleteRecipe,
})(RecipeItem);
