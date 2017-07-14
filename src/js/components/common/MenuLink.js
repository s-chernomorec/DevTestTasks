import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuLink = props => {
  return (
    <li className={`menu-item ${props.liClass}`}>
      <NavLink to={props.link} exact={true} activeClassName={props.classOnActive}>{props.text.toUpperCase()}</NavLink>
    </li>
  );
}

MenuLink.defaultProps = {
  liClass: '',
  classOnActive: ''
}

MenuLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classOnActive: PropTypes.string,
  liClass: PropTypes.string
}

export default MenuLink;
