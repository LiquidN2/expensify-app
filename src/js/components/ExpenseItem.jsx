import { connect } from 'react-redux';
import { formatCurrency } from '../utils/helpers';
import { removeExpense } from '../actions/expenses';

const ExpenseItem = ({ id, description, amount, createdAt, dispatch }) => (
  <li>
    <h3>{description}</h3>
    <p>
      {formatCurrency(amount)} - {createdAt}
    </p>
    <button
      onClick={e => {
        dispatch(removeExpense(id));
      }}
    >
      Remove
    </button>
  </li>
);

export default connect()(ExpenseItem);
