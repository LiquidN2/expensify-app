import moment from 'moment';
import { customRender, fireEvent } from '../../test/testUtils.js';

import ExpenseFilters from '../ExpenseFilters';

const beginOfLastMonth = moment()
  .subtract(1, 'months')
  .startOf('month')
  .format('MM/DD/YYYY');

const endOfLastMonth = moment().endOf('month').format('MM/DD/YYYY');

const setup = () => {
  const utils = customRender(<ExpenseFilters />);
  const descriptionInput = utils.getByLabelText('description-filter');
  const sortBySelect = utils.getByLabelText('sortby-filter');
  const fromDatePickerInput = utils.getByPlaceholderText(/From/i);
  const toDatePickerInput = utils.getByPlaceholderText(/To/i);
  return {
    descriptionInput,
    sortBySelect,
    fromDatePickerInput,
    toDatePickerInput,
    ...utils,
  };
};

describe('ExpenseFilters', () => {
  it('should render filters with default values', () => {
    const {
      descriptionInput,
      sortBySelect,
      fromDatePickerInput,
      toDatePickerInput,
    } = setup();

    expect(descriptionInput).toBeInTheDocument();
    expect(descriptionInput.value).toBe('');

    expect(sortBySelect).toBeInTheDocument();
    expect(sortBySelect.value).toBe('date');

    expect(fromDatePickerInput).toBeInTheDocument();
    expect(fromDatePickerInput.value).toBe(beginOfLastMonth);

    expect(toDatePickerInput).toBeInTheDocument();
    expect(toDatePickerInput.value).toBe(endOfLastMonth);
  });

  it('should render input value for description filter', () => {
    const { descriptionInput } = setup();
    fireEvent.change(descriptionInput, { target: { value: 'Rent' } });
    expect(descriptionInput.value).toBe('Rent');
  });

  it('should render chage option value', () => {
    const { sortBySelect } = setup();
    fireEvent.change(sortBySelect, { target: { value: 'amount' } });
    expect(sortBySelect.value).toBe('amount');
  });
});
