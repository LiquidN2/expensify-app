import moment from 'moment';

const getVisibleExpenses = (
  expenses = [],
  { text, sortBy, startDate, endDate } = {}
) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);

      // filter by startDate
      const startDateMatch = startDate
        ? moment(startDate).isSameOrBefore(createdAtMoment, 'day')
        : true;

      // filter by endDate
      const endDateMatch = endDate
        ? moment(endDate).isSameOrAfter(createdAtMoment, 'day')
        : true;

      // filter by description text
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((firstEl, secondEl) => {
      // sort by amount in descending order
      if (sortBy === 'amount') return secondEl.amount - firstEl.amount;
      return secondEl.createdAt - firstEl.createdAt;
    });
};

export default getVisibleExpenses;
