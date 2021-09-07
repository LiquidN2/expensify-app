import React, { useState } from 'react';
// import DayPicker from 'react-day-picker';
import moment from 'moment';
import 'moment/locale/en-au';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
// import LocaleUtils from 'react-day-picker/moment';

const ExpenseForm = props => {
  const [description, setDescription] = useState(props.description || '');
  const [amount, setAmount] = useState(props.amount / 100 || '');
  const [note, setNote] = useState(props.note);
  const [createdAt, setCreatedAt] = useState(
    moment(props.createdAt).format('YYYY-MM-DD')
  );
  const [error, setError] = useState(null);

  const handleInputChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value.trim();
    if (fieldName === 'description') return setDescription(fieldValue);
    if (fieldName === 'note') return setNote(fieldValue);
    if (fieldName === 'amount' && fieldValue.match(/^\d{1,}(\.\d{0,2})?$/))
      return setAmount(fieldValue);
    if (fieldName === 'createdAt') return setCreatedAt(fieldValue);
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
      createdAt: moment(createdAt, 'YYYY-MM-DD'),
    });
    setError(null);
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-12">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          placeholder="Enter your expense description"
          required
          value={description}
          onChange={handleInputChange}
          autoFocus
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="amount" className="form-label">
          Amount ($ AUD)
        </label>
        <input
          type="number"
          className="form-control"
          id="amount"
          name="amount"
          required
          value={amount}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="createdAt" className="form-label">
          Date spent
        </label>
        <input
          type="date"
          id="createdAt"
          name="createdAt"
          className="form-control"
          value={createdAt}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="col-12">
        <label htmlFor="note" className="form-label">
          Note
        </label>
        <textarea
          className="form-control"
          id="note"
          name="note"
          value={note}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

// const ExpenseForm = props => {
//   const [description, setDescription] = useState(props.description || '');
//   const [amount, setAmount] = useState(props.amount / 100 || '');
//   const [note, setNote] = useState(props.note);
//   const [createdAt, setCreatedAt] = useState(moment(props.createdAt).toDate());
//   const [error, setError] = useState(null);
//
//   const handleInputChange = e => {
//     const fieldName = e.target.name;
//     const fieldValue = e.target.value.trim();
//     if (fieldName === 'description') return setDescription(fieldValue);
//     if (fieldName === 'note') return setNote(fieldValue);
//     if (fieldName === 'amount' && fieldValue.match(/^\d{1,}(\.\d{0,2})?$/))
//       return setAmount(fieldValue);
//   };
//
//   const handleDateChange = selectedDate => {
//     if (!selectedDate) return;
//     setCreatedAt(selectedDate);
//   };
//
//   const handleSubmit = e => {
//     e.preventDefault();
//
//     if (!amount || !description) {
//       return setError('Please provide description and amount.');
//     }
//
//     props.handleSubmit({
//       description,
//       amount: parseFloat(amount, 10) * 100,
//       note,
//       createdAt: createdAt.valueOf(),
//     });
//     setError(null);
//   };
//
//   return (
//     <div>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           aria-label="description"
//           value={description}
//           onChange={handleInputChange}
//           autoFocus
//         />
//         <input
//           type="text"
//           name="amount"
//           placeholder="Amount"
//           aria-label="amount"
//           value={amount}
//           onChange={handleInputChange}
//         />
//         <DayPickerInput
//           formatDate={formatDate}
//           parseDate={parseDate}
//           format={process.env.DATE_FORMAT}
//           value={createdAt}
//           onDayChange={handleDateChange}
//           placeholder="select date"
//           dayPickerProps={{
//             locale: process.env.DATE_FORMAT,
//             LocaleUtils: MomentLocaleUtils,
//           }}
//         />
//         <textarea
//           name="note"
//           placeholder="Add a note for your expense (optional)"
//           value={note}
//           onChange={handleInputChange}
//           aria-label="note"
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {/* <DayPicker /> */}
//     </div>
//   );
// };

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
