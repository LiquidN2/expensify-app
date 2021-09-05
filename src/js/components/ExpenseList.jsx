import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

import ExpenseItem from './ExpenseItem';

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length === 0 ? null : (
      <ul>
        {props.expenses.map((expense, index) => {
          return (
            <ExpenseItem
              key={expense.id}
              {...expense}
              index={index}
              data-testid="test"
            />
          );
        })}
      </ul>
    )}
  </div>
);

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);

// const ConnectedExpenseList = connect(state => {
//   return {
//     expenses: state.expenses,
//   };
// })(ExpenseList);
//
// export default ConnectedExpenseList;
