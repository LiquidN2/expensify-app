import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { formatCurrency } from '../utils/helpers';

moment.locale(process.env.LOCALE);

const ExpenseItem = ({ id, description, amount, createdAt, dispatch }) => (
  <li>
    <Link to={`edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {formatCurrency(amount)} -{' '}
      {moment(createdAt).format(process.env.DATE_FORMAT)}
    </p>
  </li>
);

export default connect()(ExpenseItem);
