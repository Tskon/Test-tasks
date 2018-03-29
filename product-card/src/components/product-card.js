import React from 'react';

export default class ProductCard extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      saleByPackage: false
    };

    this.isSaleByPackage = this.isSaleByPackage.bind(this);
  }

  isSaleByPackage(bool) {
    this.setState({
      saleByPackage: bool
    })
  }

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
            <div className="product-card__gold-price">
              <span className="product-card__price-txt">По карте <br/> клуба</span>
              {Math.round(((this.state.saleByPackage) ? this.props.data.priceGold
                : this.props.data.priceGoldAlt) * 100) / 100}
            </div>
            <div className="product-card__retail-price">
              {Math.round(((this.state.saleByPackage) ? this.props.data.priceRetail
                : this.props.data.priceRetailAlt) * 100) / 100}
              </div>
            <div className="price-switcher">
              <span className={(!this.state.saleByPackage) ? "price-switcher__item_active" : ""} onClick={() => {
                this.isSaleByPackage(false)
              }}>За м.кв.</span>
              <span className={(this.state.saleByPackage) ? "price-switcher__item_active" : ""} onClick={() => {
                this.isSaleByPackage(true)
              }}>За упаковку</span>
            </div>
          </div>
          <div className="product-card__controls">
            <div className="product-card__counter">
              <input type="text" className="product-card__count" defaultValue="1"/>
              <div>
                <div className="product-card__incr"/>
                <div className="product-card__decr"/>
              </div>
            </div>
            <div className="product-card__buy-btn" data-product-id={this.props.data.productId}>
              <span className="product-card__buy-btn-ico"/>
              В корзину
            </div>
          </div>
        </div>
      </div>
    );
  }
}