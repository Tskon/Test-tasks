import React from 'react';
import ReactDOM from 'react-dom';

import ProductList from './layouts/product-list-layout';

ReactDOM.render(
  <ProductList/>,
  document.querySelector('main .product__area')
);