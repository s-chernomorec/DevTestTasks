import React from 'react';
import PropTypes from 'prop-types';

const Product = props => {

  return (
    <div className="product-wrapper">
      <div className="product">
        <img src={props.product.img}/>
        <div className="product-description">
          <div className="product-name">{props.product.name}</div>
          {props.product.oldPrice
            ? <div className="product-price">
                <span className="product-price-old">{props.product.oldPrice}</span>
                <span className="product-price-new">{props.product.price}</span>
              </div>
            : <div className="product-price">{props.product.price}</div>
}
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string
  }).isRequired
};

export default Product
