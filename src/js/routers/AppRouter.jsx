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
      <Route exact path="/" component={Dashboard} />
      <Route path="/add" component={AddExpense} />
      <Route path="/edit/:id" component={EditExpense} />
      <Route path="/help" component={Help} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
