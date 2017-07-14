// **
// *
// *  This is temporary component to return different page components when navigating the app,
// *  made in order to avoid creating same empty pages with different titles
// *
// **

import React from 'react';
import PropTypes from 'prop-types';

import Section from '../common/Section';
import PageHeader from '../common/PageHeader';

const PAGE_PLACEHOLDER = ({location}) => {

  const title = location.pathname !== '/'
    ? location.pathname[1].toUpperCase() + location.pathname.slice(2)
    : "Home";

  return (
    <Section sectionClass="catalog-page">
      <PageHeader header={title}/>
    </Section>
  );
}

PAGE_PLACEHOLDER.propTypes = {
  location: PropTypes.object.isRequired
}

export default PAGE_PLACEHOLDER;
