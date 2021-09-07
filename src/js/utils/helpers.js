import moment from 'moment';

export const removeElfromArrById = (arr = [], id = '') => {
  if (!id) return arr;
  const updatedArr = Array.from(arr);
  const index = updatedArr.findIndex(el => el.id === id);
  if (index === -1) return arr;
  updatedArr.copyWithin(index, index + 1);
  --updatedArr.length;
  return updatedArr;
};

export const updateElfromArrById = (arr = [], id = '', updates = {}) => {
  if (!id) return arr;
  const updatedArr = Array.from(arr);
  const index = updatedArr.findIndex(el => el.id === id);
  if (index === -1) return arr;
  updatedArr[index] = {
    ...updatedArr[index],
    ...updates,
  };
  return updatedArr;
};

export const formatCurrency = amount => {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(amount / 100);
};

export const timeFromNow = date => {
  if (moment().diff(date, 'days') <= 5) return moment(date).fromNow();
  return moment(date).format(process.env.DATE_FORMAT);
};
