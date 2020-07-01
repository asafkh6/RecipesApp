import axios from 'axios';

const APP_KEY = 'ffe2a472e5fb5c15737bf85424b4d3dc';
const APP_ID = 'b578f86a';

export default axios.create({
  baseURL: `https://api.edamam.com`,
});

export const getId = (uri) => {
  return uri.substr(51);
};

export const link = 'http://www.edamam.com/ontologies/edamam.owl#recipe_';

// if (this.state.recipe) {
//   const str = this.state.recipe.uri; //51
//   const i = str.indexOf('_');
//   const id = str.substr(51);
//   console.log(id);
// }
