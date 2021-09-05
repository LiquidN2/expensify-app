import {
  customRender,
  renderWithReduxNRouter,
  screen,
  fireEvent,
} from '../../test/testUtils';
import { createBrowserHistory } from 'history';

import AddExpense from '../AddExpense';
import Dashboard from '../Dashboard';

const setupAddExpense = () => {
  const history = createBrowserHistory();
  // history.push('/add');
  const utils = customRender(<AddExpense history={history} />);
  // const utils = renderWithReduxNRouter(<AddExpense />);
  const descriptionInput = utils.getByLabelText('description');
  const amountInput = utils.getByLabelText('amount');
  const noteTextArea = utils.getByLabelText('note');
  const datePicker = utils.getByPlaceholderText(/select date/i);
  const submitBtn = utils.getByRole('button', { name: 'Submit' });
  return {
    history,
    descriptionInput,
    amountInput,
    noteTextArea,
    datePicker,
    submitBtn,
    ...utils,
  };
};

describe('AddExpense', () => {
  it('should add expense and automatically navigate to Dashboard page', () => {
    const { history, descriptionInput, amountInput, noteTextArea, submitBtn } =
      setupAddExpense();
    fireEvent.change(descriptionInput, { target: { value: 'Coffee' } });
    fireEvent.change(amountInput, { target: { value: 450 } });
    fireEvent.change(noteTextArea, { target: { value: 'Afternoon booster' } });
    fireEvent.click(submitBtn);
    expect(history.location.pathname).toBe('/');

    customRender(<Dashboard />);
    const item = screen.getByText(/Coffee/i);
    expect(item).toBeInTheDocument();
  });
});
