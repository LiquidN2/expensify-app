const getVisibleExpenses = (
  expenses = [],
  { text, sortBy, startDate, endDate } = {}
) => {
  return expenses
    .filter(expense => {
      // filter by startDate
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;

      // filter by endDate
      const endDateMatch =
        typeof startDate !== 'number' || expense.createdAt <= endDate;

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
