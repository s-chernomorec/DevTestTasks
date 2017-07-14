import React from 'react';
import PropTypes from 'prop-types';

const ShoppingBlock = props => {
  return (
    <div className="shopping-block">
      <div className="bag-link">
        <span>your bag</span>
      </div>
      <div className="bag-number-block-wrapper">
        <div className="bag-number-block">
          <span>{props.itemsInBag}</span>
        </div>
      </div>
      <span className="search-button">
        <span className="fa fa-search"></span>
      </span>
    </div>
  );
}

ShoppingBlock.defaultProps = {
  itemsInBag: 0
}

ShoppingBlock.propTypes = {
  itemsInBag: PropTypes.number
}

export default ShoppingBlock;
