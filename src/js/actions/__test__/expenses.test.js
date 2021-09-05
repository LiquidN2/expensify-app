import { ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from '../constants';

import { addExpense, editExpense, removeExpense } from '../expenses';

test('should setup remove expense action obj', () => {
  const id = '12345abcdf';

  expect(removeExpense(id)).toEqual({
    type: REMOVE_EXPENSE,
    id,
  });
});

test('should setup edit expense action obj', () => {
  const id = '12345abcdf';
  const updates = {
    description: 'Rent',
    amount: 10000,
    note: 'Test note',
    createdAt: 1000000,
  };

  expect(editExpense(id, updates)).toEqual({
    type: EDIT_EXPENSE,
    id,
    updates,
  });
});

test('should setup add expense action obj with provided values', () => {
  const expense = {
    description: 'Rent',
    amount: 10000,
    note: 'Test note',
    createdAt: 1000000,
  };

  expect(addExpense(expense)).toEqual({
    type: ADD_EXPENSE,
    expense: {
      ...expense,
      id: expect.any(String),
    },
  });
});

test('should setup add expense action obj with default values', () => {
  expect(addExpense()).toEqual({
    type: ADD_EXPENSE,
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    },
  });
});
