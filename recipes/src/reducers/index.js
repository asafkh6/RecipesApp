import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import { reducer as createRecipeReducer } from 'redux-form';
import RecipesReducer from './RecipesReducer';

const recipesReducer = () => {
  return [];
};

const selectedRecipeReducer = (selectedRec = null, action) => {
  if (action.type === 'RECIPE_SELECTED') {
    return action.payload;
  }
  return selectedRec;
};

// const createRecipeReducer = (recipes = {}, action) => {
//   if (action.type === 'CREATE_RECIPE') return action.payload;

//   return recipes;
// };

const searchResultsReducer = (searchResults = {}, action) => {
  if (action.type === 'SEARCH_RESULTS') {
    return action.payload;
  }

  return searchResults;
};

export default combineReducers({
  topRecipes: recipesReducer,
  myRecipes: RecipesReducer,
  selectedRec: selectedRecipeReducer,
  auth: AuthReducer,
  searchResults: searchResultsReducer,
  form: createRecipeReducer,
});
