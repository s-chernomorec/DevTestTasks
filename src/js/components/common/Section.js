import React from 'react';
import PropTypes from 'prop-types';

const Section = props => {
  return (
    <div className={`section-wrapper ${props.wrapperClass}`}>
      <div className={`section ${props.sectionClass}`}>
        {props.children}
      </div>
    </div>
  );
}

Section.defaultProps = {
  wrapperClass: '',
  sectionClass: ''
}

Section.propTypes = {
  wrapperClass: PropTypes.string,
  sectionClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node).isRequired,
    PropTypes.node
  ])
}

export default Section;
