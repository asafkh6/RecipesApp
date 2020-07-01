import React from 'react';
import RecipeList from './recipesComp/RecipeList';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        this is the homepage
        <Link to='/newRecipe' className='ui primary Link'>
          Create new Recipe
        </Link>
      </div>
    );
  }
}

export default Home;
