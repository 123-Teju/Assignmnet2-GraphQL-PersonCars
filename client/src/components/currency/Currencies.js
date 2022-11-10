export const currencyFormatter = (value) => {
  return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
// Got this code from the Stack overflow.

export const currencyParser = (value) => {
  try {
    if (typeof value === 'string' && !value.length) {
      value = '0.0';
      return value;
    }
    return value.replace(/\$\s?|(,*)/g, '');
  } catch (error) {
    console.error(error);
  }
};
