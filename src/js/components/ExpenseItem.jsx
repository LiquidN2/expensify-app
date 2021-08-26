import { formatCurrency } from '../utils/helpers';

const ExpenseItem = ({ description, amount, createdAt }) => (
  <li>
    <h3>{description}</h3>
    <p>
      {formatCurrency(amount)} - {createdAt}
    </p>
  </li>
);

export default ExpenseItem;
