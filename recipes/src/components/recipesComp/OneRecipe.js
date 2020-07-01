import React from 'react';
import edamam, { link } from '../../apis/edamam';
import { connect } from 'react-redux';
import '../css/OneRecipe.css';

class OneRecipe extends React.Component {
  state = { recipe: null, uri: null };

  fetchRecipe = async () => {
    const newUri = link.concat(this.props.match.params.id);
    const APP_KEY = 'ffe2a472e5fb5c15737bf85424b4d3dc';
    const APP_ID = 'b578f86a';
    const response = await edamam.get('/search', {
      params: {
        r: newUri,
        app_key: APP_KEY,
        app_id: APP_ID,
      },
    });
    console.log('i tried a search');
    this.setState({ recipe: response.data[0] });
  };

  componentDidMount() {
    this.fetchRecipe();
  }
  componentDidUpdate() {
    if (this.props.selectedRec) this.fetchRecipe();
  }

  renderIngredients = (arr) => {
    return arr.map((ing) => {
      return <li key={ing}> {ing}</li>;
    });
  };

  createNutTable = () => {
    return (
      <table className='ui very basic collapsing celled table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h4>Calories</h4>
            </td>
            <td>
              {this.state.recipe.totalNutrients.ENERC_KCAL.quantity}{' '}
              {this.state.recipe.totalNutrients.ENERC_KCAL.unit}
            </td>
          </tr>
          <tr>
            <td>
              <h4>Proteins</h4>
            </td>
            <td>
              {this.state.recipe.totalNutrients.PROCNT.quantity}{' '}
              {this.state.recipe.totalNutrients.PROCNT.unit}
            </td>
          </tr>
          <tr>
            <td>
              <h4>Carbs</h4>
            </td>
            <td>
              {this.state.recipe.totalNutrients.CHOCDF.quantity}{' '}
              {this.state.recipe.totalNutrients.CHOCDF.unit}
            </td>
          </tr>
          <tr>
            <td>
              <h4>Fats</h4>
            </td>
            <td>
              {this.state.recipe.totalNutrients.FAT.quantity}{' '}
              {this.state.recipe.totalNutrients.FAT.unit}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  renderRecipe = () => {
    if (!this.state.recipe) {
      return <div>Loading...</div>;
    } else {
      console.log(this.state.recipe);
      return (
        <div className='container'>
          <div className='rec-header'>
            <h2>{this.state.recipe.label}</h2>
          </div>
          <img src={this.state.recipe.image} alt='pic' />
          <div className='content-rec'>
            <h4>Ingredients</h4>
            <p> {this.renderIngredients(this.state.recipe.ingredientLines)}</p>
            <br />
            Num of yields: {this.state.recipe.yield}
            <h4>Nutrition Facts:</h4>
            {this.createNutTable()}
          </div>
        </div>
      );
    }
  };

  render() {
    return <div className='main-container'>{this.renderRecipe()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { uri: state.selectedRec };
};

export default connect(mapStateToProps)(OneRecipe);
