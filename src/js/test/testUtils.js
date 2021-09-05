import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { createBrowserHistory, createMemoryHistory } from 'history';

import configureStore from '../store/configureStore';

const store = configureStore();

// const WithProvider = ({ children }) => (
//   <Provider store={store}>
//     <BrowserRouter>{children}</BrowserRouter>
//   </Provider>
// );

// const customRender = (ui, options) =>
//   rtlRender(ui, { wrapper: WithProvider, ...options });

const customRender = (ui, renderOptions) => {
  const Wrapper = props => (
    <Provider store={store}>
      <BrowserRouter>{props.children}</BrowserRouter>
    </Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

const renderWithReduxNRouter = (ui, route = '/', renderOptions) => {
  const history = createMemoryHistory();
  history.push(route);
  console.log(route);
  const Wrapper = props => (
    <Provider store={store}>
      <Router history={history}>{props.children}</Router>
    </Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender, renderWithReduxNRouter, store };
