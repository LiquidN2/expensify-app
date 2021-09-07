import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import React from 'react';

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
    <div className="mt-4 mb-4 container max-width-60r">
      <h1 className="mb-4">Update expense</h1>
      <ExpenseForm
        handleSubmit={handleEditExpense}
        {...props.expense}
        removeExpense={handleRemoveExpense}
      />
      <button className="btn btn-secondary mt-3" onClick={handleRemoveExpense}>
        Remove
      </button>
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
