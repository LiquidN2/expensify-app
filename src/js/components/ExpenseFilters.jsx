import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import 'moment/locale/en-au';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../actions/filters';

const ExpenseFilters = props => {
  const [from, setFrom] = useState(
    moment(props.filters.startDate).format('YYYY-MM-DD')
  );
  const [to, setTo] = useState(
    moment(props.filters.endDate).format('YYYY-MM-DD')
  );

  const handleTextFilter = e => props.dispatch(setTextFilter(e.target.value));

  const handleSortBy = e => {
    if (e.target.value === 'date') return props.dispatch(sortByDate());
    if (e.target.value === 'amount') return props.dispatch(sortByAmount());
  };

  const handleDateChange = e => {
    if (e.target.name === 'from') {
      setFrom(e.target.value);
      props.dispatch(setStartDate(moment(e.target.value, 'YYYY-MM-DD')));
    }

    if (e.target.name === 'to') {
      setTo(e.target.value);
      props.dispatch(setEndDate(moment(e.target.value, 'YYYY-MM-DD')));
    }
  };

  return (
    <div className="row g-3 mt-4 mb-4">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Filter by expense description"
          value={props.filters.text}
          onChange={handleTextFilter}
        />
      </div>
      <div className="col-md-6">
        <select
          className="form-select"
          aria-label="Default select example"
          value={props.filters.sortBy}
          onChange={handleSortBy}
        >
          <option value="date">Newest to Oldest</option>
          <option value="amount">Largest to Smallest</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="createdAt" className="form-label">
          From
        </label>

        <input
          type="date"
          id="from"
          name="from"
          className="form-control"
          value={from}
          onChange={handleDateChange}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="createdAt" className="form-label">
          To
        </label>
        <input
          type="date"
          id="to"
          name="to"
          className="form-control"
          value={to}
          onChange={handleDateChange}
          required
        />
      </div>
    </div>
  );
};

// const ExpenseFilters = props => {
//   const [from, setFrom] = useState(moment(props.filters.startDate).toDate());
//   const [to, setTo] = useState(moment(props.filters.endDate).toDate());
//
//   const handleFromDateChange = selectedDate => {
//     if (!selectedDate) return;
//     setFrom(selectedDate);
//     props.dispatch(setStartDate(selectedDate.valueOf()));
//   };
//
//   const handleToDateChange = selectedDate => {
//     if (!selectedDate) return;
//     setTo(selectedDate);
//     props.dispatch(setEndDate(selectedDate.valueOf()));
//   };
//
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Expense description filter"
//         aria-label="description-filter"
//         value={props.filters.text}
//         onChange={e => {
//           props.dispatch(setTextFilter(e.target.value));
//         }}
//       />
//
//       <select
//         value={props.filters.sortBy}
//         aria-label="sortby-filter"
//         onChange={e => {
//           // console.log(e.target.value);
//           e.target.value === 'date' && props.dispatch(sortByDate());
//           e.target.value === 'amount' && props.dispatch(sortByAmount());
//         }}
//       >
//         <option value="date">Date</option>
//         <option value="amount">Amount</option>
//       </select>
//
//       <div className="filters__date-range">
//         <DayPickerInput
//           format={process.env.DATE_FORMAT}
//           locale="en-au"
//           formatDate={formatDate}
//           parseDate={parseDate}
//           placeholder="From"
//           value={from}
//           onDayChange={handleFromDateChange}
//           dayPickerProps={{
//             selectedDays: [from, { from, to }],
//             disabledDays: { after: to },
//             modifiers: { start: from, end: to },
//             locale: process.env.LOCALE,
//             LocaleUtils: MomentLocaleUtils,
//             toMonth: to,
//             numberOfMonths: 2,
//           }}
//         />{' '}
//         -{' '}
//         <DayPickerInput
//           format={process.env.DATE_FORMAT}
//           formatDate={formatDate}
//           parseDate={parseDate}
//           placeholder="To"
//           value={to}
//           onDayChange={handleToDateChange}
//           dayPickerProps={{
//             selectedDays: [to, { from, to }],
//             disabledDays: { before: from },
//             modifiers: { start: from, end: to },
//             locale: process.env.LOCALE,
//             LocaleUtils: MomentLocaleUtils,
//             month: from,
//             fromMonth: from,
//             numberOfMonths: 2,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseFilters);
