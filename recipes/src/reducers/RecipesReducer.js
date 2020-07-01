import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_RECIPE':
      return { ...state, [action.payload.id]: action.payload };
    case 'SAVE_RECIPE':
      return { ...state, [action.payload.id]: action.payload };
    case 'FETCH_RECIPES':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'CREATE_RECIPE':
      return { ...state, [action.payload.id]: action.payload };
    case 'DELETE_RECIPE':
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
