import React from 'react';

export default class ProductCard extends React.Component {
  render() {
    return (
      <div className="product-card">
        <div className="product-card__about">
          <div className="product-card__product-code-wrapper">
            <span className="product-card__product-code">Код: {Math.floor(this.props.data.code)}</span>
            <span className={(this.props.data.isActive) ? "product-card__product-available"
              : "product-card__product-available product-card__product-available_available_false"}>Наличие</span>
          </div>
          <img src={this.props.data.primaryImageUrl.slice(0, -4) + "_220x220_1.jpg"} alt=""
               className="product-card__img"/>
          <a href="#" className="product-card__title">{this.props.data.title}</a>
          <div className="product-card__additional">Могут понадобиться: {this.props.data.assocProducts}</div>
        </div>
        <div className="product-card__price-section">
          <div className="product-card__price">
            <div>
              <span>По карте клуба:&nbsp;</span>
              {this.props.data.priceGold}
            </div>
            <div>{this.props.data.priceRetail}</div>
            <div>
              <span>За м.кв.</span>
              <span>За упаковку</span>
            </div>
          </div>
          <div className="product-card__controls">
            <div>
              <input type="text"/>
              <div className="product-card__incr"/>
              <div className="product-card__decr"/>
            </div>
            <div><input type="button" value="В корзину"/></div>
          </div>
        </div>
      </div>

    );
  }
}