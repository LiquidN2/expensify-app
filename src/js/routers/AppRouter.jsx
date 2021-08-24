import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Dashboard />
      </Route>

      <Route path="/add">
        <AddExpense />
      </Route>

      <Route path="/edit">
        <EditExpense />
      </Route>

      <Route path="/help">
        <Help />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
