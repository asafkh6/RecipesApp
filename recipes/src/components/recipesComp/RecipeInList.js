import React from 'react';
import '../css/MyMenu.css';

const RecipeInList = ({ recipe }) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData('recipe_id', target.id);

    // setTimeout(() => {
    //   target.style.display = 'none';
    // }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className='recipeItem'
      id={recipe.id}
      onDragStart={dragStart}
      onDragOver={dragOver}
      draggable='true'
    >
      <img className='picture' src={recipe.image} alt='pic' />
      <div className='content'>
        <a className='recipeTitle'>{recipe.label}</a>
      </div>
    </div>
  );
};

export default RecipeInList;
