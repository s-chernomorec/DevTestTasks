import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {filterByCategory} from '../../helpers';
import Section from '../common/Section';
import PageHeader from '../common/PageHeader';
import Menu from '../common/Menu';
import FilterMenuItem from '../common/FilterMenuItem';
import Product from '../common/Product';

class CatalogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCategory: 'all'
    };

    this.changeActiveCategory = this.changeActiveCategory.bind(this);
  }

  changeActiveCategory(category) {
    this.setState({activeCategory: category});
  }

  render() {

    const filteredCatalog = filterByCategory(this.state.activeCategory, this.props.catalog);

    return (
      <Section sectionClass="catalog-page">
        <PageHeader header="Catalog"/>
        <Menu menuClass="filter-menu">
          <FilterMenuItem changeActiveCategory={category => this.changeActiveCategory(category)} category={'all'} isActive={this.state.activeCategory === 'all'}/>
          {this.props.categories.map((item, i) => (
            <FilterMenuItem
              key={i}
              isActive={this.state.activeCategory === item}
              changeActiveCategory={category => this.changeActiveCategory(category)}
              category={item}
            />
          ))}
        </Menu>
        <div className="products-list">
          {filteredCatalog.map(product => (<Product key={product.id} product={product}/>))}
        </div>
        <div className="load-more-wrapper">
          <span className="load-more">load more...</span>
        </div>
      </Section>
    );
  }
}

CatalogPage.defaultProps = {
  catalog: []
}

CatalogPage.propTypes = {
  catalog: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    isNew: PropTypes.bool.isRequired
  })).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string)
};

export default CatalogPage;
