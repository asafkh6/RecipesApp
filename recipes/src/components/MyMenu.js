import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';
import RecipeInList from './recipesComp/RecipeInList';
import './css/MyMenu.css';
import Schedule from './scheduleComp/Schedule';

class MyMenu extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  renderList = () => {
    if (!this.props.recipes) return <div>Loading...</div>;
    return this.props.recipes.map((recipe) => {
      return <RecipeInList recipe={recipe} key={recipe.uri} />;
    });
  };

  render() {
    return (
      <div className='ui form'>
        <div className='mymenu-container fields'>
          <div className='field'>
            <div className='ui items six wide my-list'>{this.renderList()}</div>
          </div>
          <div className='ten wide field'>
            <div className='schedule '>
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { recipes: Object.values(state.myRecipes) };
};

export default connect(mapStateToProps, { fetchRecipes })(MyMenu);
