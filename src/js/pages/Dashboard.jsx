import ExpenseList from '../components/ExpenseList';
import ExpenseFilters from '../components/ExpenseFilters';

const Dashboard = () => (
  <div className="container max-width-60r">
    <ExpenseFilters />
    <ExpenseList />
  </div>
);

export default Dashboard;
