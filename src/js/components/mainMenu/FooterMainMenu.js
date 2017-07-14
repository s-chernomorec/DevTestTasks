import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import Section from '../common/Section';
import Menu from '../common/Menu';
import MenuLink from '../common/MenuLink';
import CopyrightBlock from './CopyrightBlock';

const FooterMainMenu = ({links}) => {
  return (
    <Section wrapperClass="main-menu-wrapper" sectionClass="main-menu-section">
      <div className="menu-logo">
        <NavLink to='/'><img src="img/logo.jpg"/></NavLink>
      </div>
      <Menu menuClass="main-menu" menuStyle={{
        marginRight: 0
      }}>

        {links.map((link, i) => (<MenuLink key={i} text={link.text} link={link.to} liClass="main-menu-item main-menu-footer-item" classOnActive="menu-link-active"/>))}
      </Menu>
      <CopyrightBlock/>
    </Section>
  );
}

FooterMainMenu.defaultProps = {
  links: []
};

FooterMainMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string.isRequired, to: PropTypes.string.isRequired})).isRequired
};

export default FooterMainMenu;
