import db from '../apis/db';
import history from '../history';

export const selectRecipe = (uri) => {
  return {
    type: 'RECIPE_SELECTED',
    payload: uri,
  };
};

export const createRecipe = (formValues) => async (dispatch) => {
  const response = await db.post('/recipes', formValues);

  dispatch({ type: 'CREATE_RECIPE', payload: response.data });
  history.push('/');
};

export const searchResults = (recipes) => (dispatch) => {
  dispatch({ type: 'SEARCH_RESULTS', payload: recipes });
  console.log('searched');
  history.push('/results');
};

export const saveRecipe = (recipe) => async (dispatch) => {
  const response = await db.post('/savedRecipes', recipe);

  dispatch({ type: 'SAVE_RECIPE', payload: response.data });
};

export const fetchRecipes = () => async (dispatch) => {
  const response = await db.get('/savedRecipes');

  dispatch({ type: 'FETCH_RECIPES', payload: response.data });
};

export const fetchRecipe = (id) => async (dispatch) => {
  const response = await db.get(`/savedRecipes/${id}`);

  dispatch({ type: 'FETCH_RECIPE', payload: response.data });
};

export const deleteRecipe = (id) => async (dispatch) => {
  await db.delete(`/savedRecipes/${id}`);

  dispatch({ type: 'DELETE_RECIPE', payload: id });
};

export const signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT',
  };
};
