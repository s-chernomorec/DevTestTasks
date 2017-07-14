import React, {Component} from 'react';
import {render} from 'react-dom';

import * as h from './helpers';
import Router from './components/Router';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catalog: [],
      categories: ['t-shirts', 'sweaters', 'shorts', 'jackets', 'accessories']
    };
  }

  componentDidMount() {
    fetch('/data.json').then(response => response.json()).then(data => {
      this.setState({catalog: data.catalog});
    }).catch(e => console.log(e));
  }

  render() {

    let props = h.assign(this.state);

    return (<Router {...props}/>);
  }
}

render(
  <App/>, document.getElementById('app'));
