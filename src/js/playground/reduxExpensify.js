import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

console.log('----- REDUX EXPENSIFY -----');

// Helpers
const removeElfromArrById = (arr = [], id = '') => {
  if (!id) return arr;
  const updatedArr = Array.from(arr);
  const index = updatedArr.findIndex(el => el.id === id);
  if (index === -1) return arr;
  updatedArr.copyWithin(index, index + 1);
  --updatedArr.length;
  return updatedArr;
};

const updateElfromArrById = (arr = [], id = '', updates = {}) => {
  if (!id) return arr;
  const updatedArr = Array.from(arr);
  const index = updatedArr.findIndex(el => el.id === id);
  if (index === -1) return arr;
  updatedArr[index] = {
    ...updatedArr[index],
    ...updates,
  };
  return updatedArr;
};

const getVisibleExpenses = (
  expenses = [],
  { text, sortBy, startDate, endDate } = {}
) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate === 'number' && expense.createdAt >= startDate;

      const endDateMatch =
        typeof startDate === 'number' && expense.createdAt <= endDate;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((firstEl, secondEl) => {
      if (sortBy === 'amount') return secondEl.amount - firstEl.amount;
      return secondEl.createdAt - firstEl.createdAt;
    });
};

// Action types
const ADD_EXPENSE = 'ADD_EXPENSE';
const EDIT_EXPENSE = 'EDIT_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
const SET_TEXT_FILTER = 'SET_TEXT_FILTER';
const SORT_BY_DATE = 'SORT_BY_DATE';
const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT';
const SET_START_DATE = 'SET_START_DATE';
const SET_END_DATE = 'SET_END_DATE';

// Action generators
const addExpense = ({
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

const removeExpense = ({ id = '' } = {}) => ({
  type: REMOVE_EXPENSE,
  id,
});

const editExpense = (id = '', updates = {}) => ({
  type: EDIT_EXPENSE,
  id,
  updates,
});

const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text,
});

const sortByAmount = () => ({ type: SORT_BY_AMOUNT });

const sortByDate = () => ({ type: SORT_BY_DATE });

const setStartDate = (startDate = Date.now()) => ({
  type: SET_START_DATE,
  startDate,
});

const setEndDate = (endDate = Date.now()) => ({
  type: SET_END_DATE,
  endDate,
});

// Expenses reducer
const DEFAULT_EXPENSES_STATE = [];
const expensesReducer = (state = DEFAULT_EXPENSES_STATE, action) => {
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

// Filters reducer
const DEFAULT_FILTERS_STATE = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null,
};
const filtersReducer = (state = DEFAULT_FILTERS_STATE, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return { ...state, text: action.text };

    case SORT_BY_DATE:
      return { ...state, sortBy: 'date' };

    case SORT_BY_AMOUNT:
      return { ...state, sortBy: 'amount' };

    case SET_START_DATE:
      return { ...state, startDate: action.startDate };

    case SET_END_DATE:
      return { ...state, endDate: action.endDate };

    default:
      return state;
  }
};

// Create Store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

const unsubsribe = store.subscribe(() => {
  const { expenses, filters } = store.getState();
  console.log(expenses, filters);
  // console.log(getVisibleExpenses(expenses, filters));
});

const expenseOne = store.dispatch(
  addExpense({
    description: 'grocery',
    note: 'Food for this week',
    amount: 5000,
    createdAt: 1000,
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: 'matcha',
    amount: 300,
    createdAt: 3000,
  })
);

const expenseThree = store.dispatch(
  addExpense({
    description: 'com tam',
    amount: 1400,
    createdAt: 8000,
  })
);

// store.dispatch(removeExpense(expenseTwo.expense));

store.dispatch(
  editExpense(expenseThree.expense.id, {
    description: 'bun bo',
    amount: 1300,
  })
);

store.dispatch(setStartDate(1500));
store.dispatch(setEndDate(10000));
store.dispatch(setTextFilter('bun'));

// store.dispatch(sortByAmount());

unsubsribe();

const DEMO_STATE = {
  expenses: [
    {
      id: 'asdv421',
      description: 'January rent',
      note: 'This was the final payment for this address',
      amount: 54500,
      createdAt: 0,
    },
  ],

  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: null,
    endDate: null,
  },
};
