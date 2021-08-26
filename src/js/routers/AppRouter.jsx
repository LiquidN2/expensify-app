import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Dashboard from '../pages/Dashboard';
import AddExpense from '../pages/AddExpense';
import EditExpense from '../pages/EditExpense';
import Help from '../pages/Help';
import NotFound from '../pages/NotFound';

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
