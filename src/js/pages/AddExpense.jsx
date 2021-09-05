import { connect } from 'react-redux';

import ExpenseForm from '../components/ExpenseForm';
import { addExpense } from '../actions/expenses.js';

const AddExpense = props => {
  const handleAddExpense = expense => {
    props.dispatch(addExpense(expense));
    props.history.push('/');
  };

  return (
    <div data-testid="add-expense-page">
      <h1>Add Expense</h1>
      <ExpenseForm handleSubmit={handleAddExpense} />
    </div>
  );
};

export default connect()(AddExpense);
