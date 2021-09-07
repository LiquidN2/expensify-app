import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { formatCurrency } from '../utils/helpers';
import { timeFromNow } from '../utils/helpers';

moment.locale(process.env.LOCALE);

const ExpenseItem = props => {
  return (
    <Link
      to={`edit/${props.id}`}
      className="list-group-item list-group-item-action"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.description}</h5>
        <small>{timeFromNow(props.createdAt)}</small>
      </div>
      <p className="mb-1">
        <span className="badge rounded-pill bg-primary">
          {formatCurrency(props.amount)}
        </span>
      </p>
      {props.note && <small>{props.note}</small>}
    </Link>
  );
};

export default connect()(ExpenseItem);
