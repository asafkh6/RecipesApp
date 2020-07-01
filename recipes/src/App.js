import React from 'react';
import { Router, Route } from 'react-router-dom';
import edamam from './apis/edamam';
import RecipeList from './components/recipesComp/RecipeList';
import TopRecipes from './components/recipesComp/TopRecipes';
import Header from './components/Header';
import Home from './components/Home';
import OneRecipe from './components/recipesComp/OneRecipe';
import SavedRecipes from './components/SavedRecipes';
import history from './history';
import { connect } from 'react-redux';
import { searchResults } from './actions';
import CreateRecipe from './components/recipesComp/CreateRecipe';
import MyMenu from './components/MyMenu';

class App extends React.Component {
  state = { recipes: [] };

  componentDidMount() {}

  onSerachSubmit = async (term) => {
    const APP_KEY = 'ffe2a472e5fb5c15737bf85424b4d3dc';
    const APP_ID = 'b578f86a';

    const response = await edamam.get('/search', {
      params: {
        q: term,
        app_key: APP_KEY,
        app_id: APP_ID,
      },
    });
    this.props.searchResults(response.data.hits);
  };

  render() {
    return (
      <div>
        <Router history={history}>
          <Header onSubmit={this.onSerachSubmit} />
          <Route path='/' exact component={Home} />
          <Route path='/newRecipe' exact component={CreateRecipe} />
          <Route path='/results' component={RecipeList} />
          <Route path='/top' component={TopRecipes} />
          <Route path='/recipe/:id' component={OneRecipe} />
          <Route path='/saved' component={SavedRecipes} />
          <Route path='/menu' component={MyMenu} />
        </Router>
      </div>
    );
  }
}

export default connect(null, { searchResults })(App);
