import ExpenseList from '../components/ExpenseList';
import ExpenseFilters from '../components/ExpenseFilters';

const Dashboard = () => (
  <div>
    <ExpenseFilters />
    <ExpenseList />
  </div>
);

export default Dashboard;
