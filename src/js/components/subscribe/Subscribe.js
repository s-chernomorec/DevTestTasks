import React from 'react';

import Section from '../common/Section';
import Email from './Email';

const Subscribe = () => {
  return (
    <Section wrapperClass="subscribe-wrapper" sectionClass="subscribe">
      <div className="subscribe-bg">
        <span className="subscribe-text">subscribe</span>
        <h2 className="subscribe-header">Stay updated on news</h2>
        <Email/>
      </div>
    </Section>
  );
}

export default Subscribe;
