import React from 'react';
import '../css/MyMenu.css';
import { connect } from 'react-redux';
import { fetchRecipe } from '../../actions';

class TimeFrame extends React.Component {
  state = { ids: {} };

  componentDidUpdate() {}

  drop = (e) => {
    e.preventDefault();
    const recipe_id = e.dataTransfer.getData('recipe_id');
    const recipe = document.getElementById(recipe_id);
    // recipe.style.display = 'block';
    console.log(recipe_id);
    this.setState({ ids: { ...this.state.ids, recipe_id } });
    e.target.appendChild(recipe);
  };

  dragOver = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div
        id={this.props.id}
        onDrop={this.drop}
        onDragOver={this.dragOver}
        className='time-frame'
      >
        time frame
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { recipes: state.myRecipes };
};

export default connect(mapStateToProps, { fetchRecipe })(TimeFrame);
