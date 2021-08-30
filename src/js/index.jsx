import '../scss/main.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import 'moment/locale/en-au';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';

const store = configureStore();

console.log(process.env.LOCALE);

store.dispatch(
  addExpense({
    description: 'Gas bill',
    amount: 19050,
    createdAt: moment('27/08/2021', 'L').valueOf(),
  })
);

store.dispatch(
  addExpense({
    description: 'Rent',
    amount: 40000,
    createdAt: moment('11/08/2021', 'L').valueOf(),
  })
);

store.dispatch(
  addExpense({
    description: 'Water bill',
    amount: 26000,
    createdAt: moment('02/07/2021', 'L').valueOf(),
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
