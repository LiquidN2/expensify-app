import moment from 'moment';
import { customRender, fireEvent, store } from '../../test/testUtils';
import { setupMockExpenses } from '../../actions/expenses';

import Dashboard from '../Dashboard';

const expenses = [
  {
    id: '1',
    description: 'Gas bill',
    amount: 19050,
    createdAt: moment().startOf('month').valueOf(),
  },
  {
    id: '2',
    description: 'Rent',
    amount: 40000,
    createdAt: moment().startOf('month').add(15, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'Water bill',
    amount: 26000,
    createdAt: moment().endOf('month').valueOf(),
  },
];

const setup = () => {
  const utils = customRender(<Dashboard />);
  const expenseItems = utils.getAllByRole('listitem');
  const expenseItemOneLink = utils.getByLabelText('expense-link--0');
  const descriptionInputFilter = utils.getByLabelText('description-filter');
  return {
    expenseItems,
    descriptionInputFilter,
    expenseItemOneLink,
    utils,
  };
};

describe('Dashboard', () => {
  beforeAll(() => store.dispatch(setupMockExpenses(expenses)));

  it('should render dashboard with expense list', () => {
    const { expenseItems } = setup();
    expect(expenseItems.length).toBe(3);
  });

  it('should filter by description', () => {
    const { descriptionInputFilter, utils } = setup();
    fireEvent.change(descriptionInputFilter, { target: { value: 'bill' } });
    const expenseItems = utils.getAllByRole('listitem');
    expect(expenseItems.length).toBe(2);
  });

  it('should navigate to edit page when click on expense link', () => {
    const { expenseItemOneLink } = setup();
    fireEvent.click(expenseItemOneLink);
    expect(global.window.location.pathname).toBe('/edit/3');
  });
});
