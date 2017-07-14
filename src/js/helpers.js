import _ from 'lodash';

const assign = (...objects) => _.assign({}, ...objects);

const filterByCategory = (category, products) => {
  if (category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
}

export {assign, filterByCategory};
