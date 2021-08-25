import { createStore } from 'redux';

console.log('----- REDUX 101 -----');

// Action Types
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const RESET = 'RESET';
const SET = 'SET';

// Initial State
const INITIAL_STATE = { count: 0 };

// Action generator
const decreaseCount = ({ decreaseBy = 1 } = {}) => ({
  type: DECREASE,
  decreaseBy: typeof decreaseBy === 'number' ? decreaseBy : 1,
});

const increaseCount = ({ increaseBy = 1 } = {}) => ({
  type: INCREASE,
  increaseBy: increaseBy,
});

const resetCount = () => ({ type: RESET });

const setCount = ({ count = 0 } = {}) => ({
  type: SET,
  count: count,
});

// Reducer
const countReducer = (state = INITIAL_STATE, action) => {
  console.log('running createStore');

  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + action.increaseBy };

    case DECREASE:
      if (state.count === 0) return state;
      return { ...state, count: state.count - action.decreaseBy };

    case RESET:
      return INITIAL_STATE;

    case SET:
      return { ...state, count: action.count };

    default:
      return state;
  }
};

// Create Redux Store
const store = createStore(countReducer);

const unsubsribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increaseCount());

store.dispatch(increaseCount({ increaseBy: 23 }));

store.dispatch(decreaseCount({ decreaseBy: 17 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 85 }));

unsubsribe();
