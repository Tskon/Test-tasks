import React from 'react';

import ProductCard from '../components/product-card';
import products from '../products.json';

export default class ProductList extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      currentCardNum: 5,
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState({
      currentCardNum: this.state.currentCardNum + 5
    })
  }

  render() {
    const currentList = products.slice(0, this.state.currentCardNum);

    const cards = currentList.map((item, i) => {
      return <ProductCard key={i} data={item}/>
    });

    return (
      <div className="content">
        <div className="card-list">
          {cards}
        </div>
        <input type='button' value='Загрузить еще' onClick={this.loadMore}/>
      </div>
    );
  }
}