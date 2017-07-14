import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = props => {
  return (
    <div className="page-header-block">
      <h1 className="page-header">{props.header}</h1>
    </div>
  );
}

PageHeader.defaultProps = {
  header: 'Header'
}

PageHeader.propTypes = {
  header: PropTypes.string.isRequired
}

export default PageHeader;
