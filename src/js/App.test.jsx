import {
  customRender,
  renderWithReduxNRouter,
  screen,
  fireEvent,
} from './test/testUtils';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './App';

const setup = () => {
  // const Wrapper = ({ children }) => (
  //   <Provider store={configureStore()}>{children}</Provider>
  // );
  // const utils = render(<AppRouter />, { wrapper: Wrapper });
  const utils = renderWithReduxNRouter(<App />);
  const addExpenseLink = utils.getByRole('link', { name: 'Add Expense' });
  const helpPageLink = utils.getByRole('link', { name: 'Help' });
  return {
    addExpenseLink,
    helpPageLink,
    ...utils,
  };
};

describe('AppRouter', () => {
  it('should navigation to Add expense page when click on Add Expense nav link', () => {
    const { addExpenseLink } = setup();
    fireEvent.click(addExpenseLink);
    const addExpenseComponent = screen.getByTestId('add-expense-page');
    expect(addExpenseComponent).toBeInTheDocument();
    expect(global.window.location.pathname).toBe('/add');
  });

  // it('should render the help page', () => {
  //   const { helpPageLink } = setup();
  //   fireEvent.click(helpPageLink);
  //   const pageContent = screen.getByText(/This is the Help page/i);
  //   expect(pageContent).toBeInTheDocument();
  // });

  it('should render the not found page', () => {
    renderWithReduxNRouter(<App />, '/not/exist');
    const pageContent = screen.getByText(/404! Page not found/i);
    expect(pageContent).toBeInTheDocument();
  });
});
