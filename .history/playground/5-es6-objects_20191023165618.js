const name = 'Kimbee';
const age = '25';
const location = 'Makati';

const user = {
  name,
  age,
  location
};

console.log(user);

const product = {
  label: 'Red Notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
};

const { label, stock } = product;
