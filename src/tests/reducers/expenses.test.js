import moment from 'moment';

import {
  ADD_EXPENSE,
  EDIT_EXPENSE,
  REMOVE_EXPENSE,
} from '../../js/actions/constants';

import expensesReducer from '../../js/reducers/expenses';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 40000,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 23700,
    createdAt: moment(0).add(3, 'days').valueOf(),
  },
];

test('should setup default expenses in state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add expense to state', () => {
  const expense = {
    description: 'Rent',
    note: '',
    amount: 50000,
    createdAt: 0,
  };

  const state = expensesReducer(undefined, {
    type: ADD_EXPENSE,
    expense,
  });

  expect(state).toEqual([expense]);
});

test('should remove expense from state', () => {
  const state = expensesReducer(expenses, {
    type: REMOVE_EXPENSE,
    id: '1',
  });

  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should update expense in state', () => {
  const updates = {
    description: 'coffee',
    amount: 300,
    note: '',
    createdAt: moment(0).add(1, 'days').valueOf(),
  };

  const state = expensesReducer(expenses, {
    type: EDIT_EXPENSE,
    id: '2',
    updates,
  });

  expect(state).toEqual([
    expenses[0],
    {
      ...expenses[1],
      ...updates,
    },
    expenses[2],
  ]);
});
