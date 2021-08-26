import '../scss/main.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  const { expenses, filters } = store.getState();
  console.log(getVisibleExpenses(expenses, filters));
});

store.dispatch(
  addExpense({
    description: 'Gas bill',
    amount: 19000,
    createdAt: 4000,
  })
);

store.dispatch(
  addExpense({
    description: 'Water bill',
    amount: 11000,
    createdAt: 1000,
  })
);

store.dispatch(sortByAmount());

store.dispatch(setTextFilter('bill'));

unsubscribe();

const JSX = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(JSX, document.getElementById('app'));
