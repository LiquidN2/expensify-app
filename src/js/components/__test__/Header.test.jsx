import { render } from '../../test/testUtils.js';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

const setup = () => {
  const Wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
  const utils = render(<Header />, { wrapper: Wrapper });
  const navLinks = utils.getAllByTestId(/nav-link/i);
  const homeNavLink = utils.getByText(/Dashboard/i);
  const addExpenseNavLink = utils.getByText(/Add Expense/i);
  return {
    navLinks,
    homeNavLink,
    addExpenseNavLink,
    ...utils,
  };
};

describe('Header', () => {
  it('should render nav links', () => {
    const { navLinks } = setup();
    expect(navLinks[0]).toBeInTheDocument();
    expect(navLinks.length).toBe(3);
  });

  it('should render link to home/dashboard page', () => {
    const { homeNavLink } = setup();
    expect(homeNavLink).toBeInTheDocument();
    expect(homeNavLink).toHaveAttribute('href', '/');
  });

  it('should render link to add expense page', () => {
    const { addExpenseNavLink } = setup();
    expect(addExpenseNavLink).toBeInTheDocument();
    expect(addExpenseNavLink).toHaveAttribute('href', '/add');
  });
});
