import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';
import EditExpense from './pages/EditExpense';
import Help from './pages/Help';
import NotFound from './pages/NotFound';
import Header from './components/Header';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/add" component={AddExpense} />
      <Route path="/edit/:id" component={EditExpense} />
      <Route path="/help" component={Help} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
