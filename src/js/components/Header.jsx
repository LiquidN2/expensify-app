import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="p-1 bg-dark text-white">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container max-width-60r">
        <NavLink className="navbar-brand" to="/">
          Expensify App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse disable-flex-grow"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add" className="nav-link" activeClassName="active">
                Add Expense
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/help" className="nav-link" activeClassName="active">
                Help
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
