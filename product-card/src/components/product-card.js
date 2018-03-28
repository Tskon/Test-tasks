import React from 'react';

export default class ProductCard extends React.Component{
  render(){
    return pug`
      div.product-card
        div.product-card__description
          img(src="#")
        div.product-card__price-section
    `;
  }
}