import React, { useState } from 'react';
// import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'moment/locale/en-au';

const ExpenseForm = props => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [createdAt, setCreatedAt] = useState(formatDate());
  const [error, setError] = useState(null);

  const handleInputChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value.trim();
    if (fieldName === 'description') return setDescription(fieldValue);
    if (fieldName === 'note') return setNote(fieldValue);
    if (fieldName === 'amount' && fieldValue.match(/^\d{1,}(\.\d{0,2})?$/))
      return setAmount(fieldValue);
  };

  const handleDateChange = selectedDate => {
    if (!selectedDate) return;
    setCreatedAt(selectedDate);
    console.log(selectedDate.valueOf());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!amount || !description) {
      return setError('Please provide description and amount.');
    }

    props.handleSubmit({
      description,
      amount: parseFloat(amount, 10) * 100,
      note,
      createdAt: createdAt.valueOf(),
    });
    setError(null);
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={handleInputChange}
          autoFocus
        />
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={amount}
          onChange={handleInputChange}
        />
        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          locale={process.env.LOCALE}
          format={process.env.DATE_FORMAT}
          value={createdAt}
          onDayChange={handleDateChange}
          placeholder={`${formatDate(
            new Date(),
            process.env.DATE_FORMAT,
            process.env.LOCALE
          )}`}
        />
        <textarea
          name="note"
          placeholder="Add a note for your expense (optional)"
          value={note}
          onChange={handleInputChange}
        />
        <button type="submit">Add Expense</button>
      </form>
      {/* <DayPicker /> */}
    </div>
  );
};

// class ExpenseForm extends React.Component {
//   state = {
//     description: '',
//     amount: '',
//     note: '',
//   };

//   handleInputChange = e => {
//     const fieldName = e.target.name;
//     const fieldValue = e.target.value.trim();
//     this.setState(prevState => ({
//       ...prevState,
//       [fieldName]: fieldValue,
//     }));
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="description"
//             placeholder="Description"
//             value={this.state.description}
//             onChange={this.handleInputChange}
//             autoFocus
//           />
//           <input
//             type="number"
//             name="amount"
//             placeholder="Amount"
//             value={this.state.amount}
//             onChange={this.handleInputChange}
//           />
//           <textarea
//             name="note"
//             placeholder="Add a note for your expense (optional)"
//             value={this.state.note}
//             onChange={this.handleInputChange}
//           />
//           <button>Add Expense</button>
//         </form>
//       </div>
//     );
//   }
// }

export default ExpenseForm;
