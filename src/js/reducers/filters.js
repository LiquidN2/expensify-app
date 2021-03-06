import moment from 'moment';

import {
  SET_TEXT_FILTER,
  SET_START_DATE,
  SET_END_DATE,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
} from '../actions/constants';

const DEFAULT_STATE = {
  text: '',
  sortBy: 'date',
  startDate: moment().subtract(1, 'months').startOf('month').valueOf(),
  endDate: moment().endOf('month').valueOf(),
};

const filtersReducer = (state = DEFAULT_STATE, action) => {
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

export default filtersReducer;
