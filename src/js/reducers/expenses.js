import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  REMOVE_EXPENSE,
} from '../actions/constants';

import { removeElfromArrById, updateElfromArrById } from '../utils/helpers';

// Expenses reducer
const DEFAULT_STATE = [];

const expensesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];

    case REMOVE_EXPENSE:
      return removeElfromArrById(state, action.id);

    case EDIT_EXPENSE:
      return updateElfromArrById(state, action.id, action.updates);

    default:
      return state;
  }
};

export default expensesReducer;
