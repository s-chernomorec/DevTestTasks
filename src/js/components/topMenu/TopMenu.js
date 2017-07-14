import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Section from '../common/Section';
import Menu from '../common/Menu';
import MenuLink from '../common/MenuLink';
import TopMenuSelect from './TopMenuSelect';

class TopMenu extends Component {
  render() {
    return (
      <Section wrapperClass="top-menu-wrapper" sectionClass="top-menu">
        <Menu menuClass="top-menu-block top-menu-block-left">
          {this.props.links.map((link, i) => (
            <MenuLink key={i} text={link.text} link={link.to} liClass="top-menu-item" classOnActive="menu-link-active"/>
          ))}
        </Menu>

        <Menu menuClass="top-menu-block top-menu-block-right" borders={true}>
          <TopMenuSelect text="dollars" liClass="top-menu-item-right-border"/>
          <TopMenuSelect text="en"/>
        </Menu>
      </Section>
    );
  }
}

TopMenu.defaultProps = {
  links: []
};

TopMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({text: PropTypes.string.isRequired, to: PropTypes.string.isRequired})).isRequired
};

export default TopMenu;
