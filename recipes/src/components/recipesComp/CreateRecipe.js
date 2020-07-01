import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createRecipe } from '../../actions';
import '../css/CreateRecipe.css';

class CreateRecipe extends React.Component {
  state = { ingredients: [] };

  addIngredient = (e) => {
    e.preventDefault();
    this.setState({ ingredients: [...this.state.ingredients, ''] });
  };

  renderInput({ input, label }) {
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }
  renderTextArea({ input, label }) {
    return (
      <div>
        <label>{label}</label>
        <textarea {...input} rows='3' />
      </div>
    );
  }

  renderIngredients = ({ fields }) => (
    <ol>
      {fields.map((ingredient, index) => (
        <li key={index}>
          <div className='ingredient-field'>
            <div className='fields justifyCenter'>
              <Field
                name={`${ingredient}.name`}
                type='text'
                component={this.renderInput}
                label='Name'
                className='ingredient-input'
              />

              <Field
                name={`${ingredient}.amount`}
                type='text'
                component={this.renderInput}
                label='Amount'
                className='ingredient-input'
              />
              <Field
                name={`${ingredient}.type`}
                type='text'
                component={this.renderInput}
                label='Type'
                className='ingredient-input'
              />
              <i className='x icon' onClick={() => fields.remove(index)} />
            </div>
          </div>
        </li>
      ))}

      <span onClick={() => fields.push({})} className='addIngredientText'>
        Add another ingredient
      </span>
    </ol>
  );

  onSubmit = (formValues) => {
    this.props.createRecipe(formValues);
  };

  render() {
    return (
      <div className='form-container'>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='ui form'
        >
          <Field name='title' component={this.renderInput} label='Title: ' />
          <Field
            name='description'
            component={this.renderTextArea}
            label='Description: '
          />
          <FieldArray
            name='ingredients'
            component={this.renderIngredients}
            label='Enter Ingredients:'
          />
          <br />
          add image
          <br />
          <button className='ui primary button'>Create New Recipe</button>
        </form>
      </div>
    );
  }
}

const formWrapped = reduxForm({
  form: 'createNewRecipe',
})(CreateRecipe);

export default connect(null, { createRecipe })(formWrapped);
