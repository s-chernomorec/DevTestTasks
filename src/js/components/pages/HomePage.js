import React, {Component} from 'react';

import Section from '../common/Section';
import PageHeader from '../common/PageHeader';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section sectionClass="catalog-page">
        <PageHeader header="Home"/>
      </Section>
    );
  }
}

export default HomePage;
