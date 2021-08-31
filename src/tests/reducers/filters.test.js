import moment from 'moment';

import {
  SET_TEXT_FILTER,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
  SET_START_DATE,
  SET_END_DATE,
} from '../../js/actions/constants';

import filtersReducer from '../../js/reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().subtract(1, 'months').startOf('month').valueOf(),
    endDate: moment().endOf('month').valueOf(),
  });
});

test('should setup text filter', () => {
  const state = filtersReducer(undefined, {
    type: SET_TEXT_FILTER,
    text: 'some text',
  });
  expect(state).toEqual({
    text: 'some text',
    sortBy: 'date',
    startDate: moment().subtract(1, 'months').startOf('month').valueOf(),
    endDate: moment().endOf('month').valueOf(),
  });
});

test('should setup sort by date filter', () => {
  const state = filtersReducer(undefined, {
    type: SORT_BY_DATE,
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().subtract(1, 'months').startOf('month').valueOf(),
    endDate: moment().endOf('month').valueOf(),
  });
});

test('should setup sort by amount filter', () => {
  const state = filtersReducer(undefined, {
    type: SORT_BY_AMOUNT,
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().subtract(1, 'months').startOf('month').valueOf(),
    endDate: moment().endOf('month').valueOf(),
  });
});

test('should setup start date filter', () => {
  const startDate = moment().valueOf();
  const state = filtersReducer(undefined, {
    type: SET_START_DATE,
    startDate,
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate,
    endDate: moment().endOf('month').valueOf(),
  });
});

test('should setup end date filter', () => {
  const endDate = moment().valueOf();
  const state = filtersReducer(undefined, {
    type: SET_END_DATE,
    endDate,
  });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().subtract(1, 'months').startOf('month').valueOf(),
    endDate,
  });
});
