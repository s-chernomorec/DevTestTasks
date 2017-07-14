import React from 'react';
import PropTypes from 'prop-types';

const FilterMenuItem = props => {

  const changeActiveCategory = () => {
    props.changeActiveCategory(props.category);
  }

  const activeClass = props.isActive ? 'menu-link-active' : '';

  return (
    <li className="menu-item filter-menu-item">
      <span className={activeClass} onClick={changeActiveCategory}>{props.category.toUpperCase()}</span>
    </li>
  );
}

FilterMenuItem.defaultProps = {
  category: 'all'
}

FilterMenuItem.propTypes = {
  category: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  changeActiveCategory: PropTypes.func.isRequired
}

export default FilterMenuItem;
