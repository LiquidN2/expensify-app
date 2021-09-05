import {
  SET_TEXT_FILTER,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
  SET_START_DATE,
  SET_END_DATE,
} from '../constants';

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../filters';

test('should setup text filter action obj', () => {
  const text = 'bill';
  expect(setTextFilter(text)).toEqual({
    type: SET_TEXT_FILTER,
    text,
  });
});

test('should setup sort by amount filter action obj', () => {
  expect(sortByAmount()).toEqual({
    type: SORT_BY_AMOUNT,
  });
});

test('should setup sort by date filter action obj', () => {
  expect(sortByDate()).toEqual({
    type: SORT_BY_DATE,
  });
});

test('should setup start date filter action obj', () => {
  const startDate = 1234567890; // timestamp
  expect(setStartDate(startDate)).toEqual({
    type: SET_START_DATE,
    startDate,
  });
});

test('should setup end date filter action obj', () => {
  const endDate = 1234567890; // timestamp
  expect(setEndDate(endDate)).toEqual({
    type: SET_END_DATE,
    endDate,
  });
});
