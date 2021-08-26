const EditExpense = props => {
  console.log(props);
  return <div>Editing the expense id {props.match.params.id}</div>;
};

export default EditExpense;
