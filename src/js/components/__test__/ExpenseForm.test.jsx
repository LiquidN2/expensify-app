import moment from 'moment';
import { customRender, fireEvent } from '../../test/testUtils.js';

import ExpenseForm from '../ExpenseForm.jsx';

const setup = () => {
  const utils = customRender(<ExpenseForm />);
  const descriptionInput = utils.getByLabelText('description');
  const amountInput = utils.getByLabelText('amount');
  const noteTextArea = utils.getByLabelText('note');
  const datePicker = utils.getByPlaceholderText(/select date/i);
  return {
    descriptionInput,
    amountInput,
    noteTextArea,
    datePicker,
    ...utils,
  };
};

describe('ExpenseForm', () => {
  it('should render default expense form', () => {
    const { descriptionInput, amountInput, noteTextArea, datePicker } = setup();

    expect(descriptionInput).toBeInTheDocument();
    expect(descriptionInput.value).toBe('');

    expect(amountInput).toBeInTheDocument();
    expect(amountInput.value).toBe('');

    expect(noteTextArea).toBeInTheDocument();
    expect(noteTextArea.value).toBe('');

    expect(datePicker).toBeInTheDocument();
    expect(datePicker.value).toBe(moment().format('MM/DD/YYYY'));
  });

  it('should render description input value', () => {
    const { descriptionInput } = setup();
    const inputValue = 'Rent';
    fireEvent.change(descriptionInput, { target: { value: inputValue } });
    expect(descriptionInput.value).toBe(inputValue);
  });

  it('should render amount input value', () => {
    const { amountInput } = setup();
    const inputValue = 123.45;
    fireEvent.change(amountInput, { target: { value: inputValue } });
    expect(amountInput.value).toBe(inputValue + '');
  });

  it('should not render amount input value when type in letter', () => {
    const { amountInput } = setup();
    const inputValue = 'some value';
    fireEvent.change(amountInput, { target: { value: inputValue } });
    expect(amountInput.value).toBe('');
  });
});
