import { NavLink } from 'react-router-dom';

const navLinks = [
  { url: '/', name: 'Dashboard', exact: true },
  { url: '/add', name: 'Add Expense', exact: false },
  { url: '/help', name: 'Help', exact: false },
];

const Header = () => (
  <header>
    <nav>
      <ul>
        {navLinks.map((link, i) => (
          <li key={i}>
            <NavLink
              to={link.url}
              exact={link.exact}
              activeClassName="link--active"
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
