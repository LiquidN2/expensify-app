import { customRender, render, screen, store } from '../../test/testUtils.js';
import ExpenseList from '../ExpenseList';
import { addExpense } from '../../actions/expenses';
import moment from 'moment';
import 'moment/locale/en-au';

const expenses = [
  {
    description: 'Gas bill',
    amount: 19050,
    createdAt: moment().startOf('month').valueOf(),
  },
  {
    description: 'Rent',
    amount: 40000,
    createdAt: moment().startOf('month').add(15, 'days').valueOf(),
  },
  {
    description: 'Water bill',
    amount: 26000,
    createdAt: moment().endOf('month').valueOf(),
  },
];

const setUpMockExpenses = () => {
  expenses.forEach(expense => store.dispatch(addExpense(expense)));
};

describe('ExpenseList', () => {
  beforeAll(() => setUpMockExpenses());

  it('should render expense list from store', () => {
    customRender(<ExpenseList />);
    const listItemElems = screen.getAllByRole('listitem');
    expect(listItemElems.length).toBe(3);
  });

  it('should render one item on list correctly', () => {
    customRender(<ExpenseList />);
    const itemDescriptionElem = screen.getByText(/Rent/i);
    expect(itemDescriptionElem).toBeInTheDocument();
    const itemAmountElem = screen.getByText(/400.00/i);
    expect(itemAmountElem).toBeInTheDocument();
  });
});
