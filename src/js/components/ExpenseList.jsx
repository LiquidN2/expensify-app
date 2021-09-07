import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

import ExpenseItem from './ExpenseItem';

const ExpenseList = props => {
  return (
    <>
      <div className="divider mb-4">&nbsp;</div>
      <h3 className="mb-4">My Expenses 💰</h3>
      {props.expenses.length === 0 ? null : (
        <div className="list-group">
          {props.expenses.map((expense, index) => {
            return (
              <ExpenseItem
                key={index}
                index={index}
                {...expense}
                data-testid="test"
              />
            );
          })}
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
