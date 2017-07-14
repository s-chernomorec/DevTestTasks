import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => {

  const classWithBorders = props.borders === true ? 'menu-with-borders' : '';

  return (
    <ul className={`menu ${props.menuClass} ${classWithBorders}`} style={props.menuStyle}>{props.children}</ul>
  );
}

Menu.defaultProps = {
  menuClass: '',
  menuStyle: {},
  borders: false
}

Menu.propTypes = {
  menuClass: PropTypes.string,
  menuStyle: PropTypes.object,
  borders: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node).isRequired,
    PropTypes.node
  ])
}

export default Menu;
