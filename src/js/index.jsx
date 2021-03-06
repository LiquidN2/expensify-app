import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../scss/main.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import 'moment/locale/en-au';

// import AppRouter from './routers/AppRouter';
import App from './App';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';

const store = configureStore();

const expenses = [
  {
    description: 'Gas bill',
    amount: 19050,
    createdAt: moment().subtract(1, 'days').valueOf(),
    note: 'This is a mocked expense',
  },
  {
    description: 'Rent',
    amount: 40000,
    createdAt: moment().subtract(3, 'days').valueOf(),
    note: 'This is a mocked expense',
  },
  {
    description: 'Water bill',
    amount: 26000,
    createdAt: moment().subtract(20, 'days').valueOf(),
    note: 'This is a mocked expense',
  },
];

const setUpMockExpenses = () => {
  expenses.forEach(expense => store.dispatch(addExpense(expense)));
};

setUpMockExpenses();

const JSX = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(JSX, document.getElementById('app'));
