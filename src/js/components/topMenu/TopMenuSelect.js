import React from 'react';
import PropTypes from 'prop-types';

const TopMenuSelect = props => {

  const toggleSelect = e => {
    e.preventDefault();
  }

  return (
    <li className={`top-menu-select ${props.liClass}`}>
      <span className="top-menu-select-text">{props.text.toUpperCase()}</span>
      <span className="top-menu-select-icon" onClick={toggleSelect}>
        <span className="fa fa-angle-down"></span>
      </span>
    </li>
  );
}

TopMenuSelect.defaultValues = {
  liClass: ''
}

TopMenuSelect.propTypes = {
  text: PropTypes.string.isRequired,
  liClass: PropTypes.string
}

export default TopMenuSelect;
