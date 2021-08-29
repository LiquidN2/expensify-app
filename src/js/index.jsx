import '../scss/main.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';

const store = configureStore();

console.log(process.env.LOCALE);

store.dispatch(
  addExpense({
    description: 'Gas bill',
    amount: 19000,
    createdAt: 4000,
  })
);

store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 40000,
    createdAt: 2500,
  })
);

store.dispatch(
  addExpense({
    description: 'Water bill',
    amount: 26000,
    createdAt: 1000,
  })
);

const JSX = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(JSX, document.getElementById('app'));
