import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  SETUP_MOCK_EXPENSES,
} from './constants';
import { v4 as uuidv4 } from 'uuid';

// Action generators
export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

export const removeExpense = (id = '') => ({
  type: REMOVE_EXPENSE,
  id,
});

export const editExpense = (id = '', updates = {}) => ({
  type: EDIT_EXPENSE,
  id,
  updates,
});

export const setupMockExpenses = expenses => ({
  type: SETUP_MOCK_EXPENSES,
  expenses,
});
