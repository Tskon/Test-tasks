import React from 'react';

export default class ProductCard extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      count: 1,
      saleByPackage: false
    };

    this.isSaleByPackage = this.isSaleByPackage.bind(this);
    this.changeCount = this.changeCount.bind(this);
    this.incrCount = this.incrCount.bind(this);
    this.decrCount = this.decrCount.bind(this);
  }

  changeCount(e) {
    const num = +(e.target.value);
    if ((!isNaN(parseFloat(num)) && isFinite(num)) && num >= 0) {
      this.setState({
        count: num
      })
    } else {
      e.target.value = this.state.count;
    }
  }

  decrCount() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  incrCount() {
    this.setState({
      count: this.state.count + 1
    });
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
          <div className="product-card__additional"><b>Могут понадобиться: </b>
            {
              this.props.data.assocProducts.split(';').map((item, i, arr) => {
                if (item) {
                  if (arr.length - 2 > i) {
                    return <a href="#" key={i}>{item},</a>
                  }else{
                    return <a href="#" key={i}>{item}.</a>
                  }
                }
              })
            }
          </div>
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
            <p className="product-card__points-price">
              Можно купить за {Math.round(((this.state.saleByPackage) ? this.props.data.priceGold
              : this.props.data.priceGoldAlt) * 0.6 * 100) / 100} балла
            </p>
            <div className="price-switcher">
              <span className={(!this.state.saleByPackage) ? "price-switcher__item_active" : ""} onClick={() => {
                this.isSaleByPackage(false)
              }}>За м.кв.</span>
              <span className={(this.state.saleByPackage) ? "price-switcher__item_active" : ""} onClick={() => {
                this.isSaleByPackage(true)
              }}>За упаковку</span>
            </div>
          </div>
          <div className="product-card__counter-descr">
            <div/>
            <div>
              Продается упаковками:<br/>
              1 упак. = {Math.round((this.props.data.priceRetail / this.props.data.priceRetailAlt) * 100) / 100} м. кв.
            </div>
          </div>
          <div className="product-card__controls">
            <div className="product-card__counter">
              <input type="text" className="product-card__count"
                     value={this.state.count}
                     onChange={this.changeCount}
              />
              <div>
                <div className="product-card__incr" onClick={this.incrCount}/>
                <div className="product-card__decr" onClick={this.decrCount}/>
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