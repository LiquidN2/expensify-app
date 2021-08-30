import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpense = props => {
  const { id: expenseId } = props.match.params;

  const handleEditExpense = updates => {
    props.dispatch(editExpense(expenseId, updates));
    props.history.push('/');
  };

  const handleRemoveExpense = () => {
    props.dispatch(removeExpense(expenseId));
    props.history.push('/');
  };

  return (
    <div>
      <p>Editing the expense id {expenseId}</p>
      <ExpenseForm handleSubmit={handleEditExpense} {...props.expense} />
      <button onClick={handleRemoveExpense}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const expense = state.expenses.find(
    expense => expense.id === ownProps.match.params.id
  );

  return { expense };
};

export default connect(mapStateToProps)(EditExpense);
