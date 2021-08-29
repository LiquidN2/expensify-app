import { connect } from 'react-redux';
import moment from 'moment';
import { formatCurrency } from '../utils/helpers';
import { removeExpense } from '../actions/expenses';

moment.locale(process.env.LOCALE);

const ExpenseItem = ({ id, description, amount, createdAt, dispatch }) => (
  <li>
    <h3>{description}</h3>
    <p>
      {formatCurrency(amount)} -{' '}
      {moment(createdAt).format(process.env.DATE_FORMAT)}
    </p>
    <button onClick={() => dispatch(removeExpense(id))}>Remove</button>
  </li>
);

export default connect()(ExpenseItem);
