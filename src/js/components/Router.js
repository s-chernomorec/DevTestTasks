import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import * as h from '../helpers';
import RenderPage from './RenderPage';
import PAGE_PLACEHOLDER from './pages/PAGE_PLACEHOLDER';
import CatalogPage from './pages/CatalogPage';

const topLinks = [
  {
    to: '/delivery',
    text: 'delivery'
  }, {
    to: '/faq',
    text: 'faq'
  }, {
    to: '/help',
    text: 'help'
  }
];

const mainLinks = [
  {
    to: '/',
    text: 'home'
  }, {
    to: '/catalog',
    text: 'catalog'
  }, {
    to: '/news',
    text: 'news'
  }, {
    to: '/sale',
    text: 'sale'
  }, {
    to: '/about',
    text: 'about'
  }, {
    to: '/contact',
    text: 'contact'
  }
];

const Router = _props => {

  const props = h.assign(_props, {topLinks, mainLinks});

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(routeProps) => (RenderPage(PAGE_PLACEHOLDER, props, routeProps))}/>
        <Route path="/catalog" render={() => (RenderPage(CatalogPage, props))}/>
        {topLinks.map((link, i) => (<Route path={link.to} render={(routeProps) => (RenderPage(PAGE_PLACEHOLDER, props, routeProps))} key={i}/>))}
        {mainLinks.map((link, i) => (<Route path={link.to} render={(routeProps) => (RenderPage(PAGE_PLACEHOLDER, props, routeProps))} exact={link.to === '/' ? true : false} key={i}/>))}
      </Switch>
    </BrowserRouter>
  );
};

// const Router = props => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" render={() => (RenderPage(HomePage, props))}/>
//         <Route path="/catalog" render={() => (RenderPage(CatalogPage, props))}/>
//         <Route path="/news" render={() => (RenderPage(NewsPage, props))}/>
//         <Route path="/sale" render={() => (RenderPage(SalePage, props))}/>
//         <Route path="/about" render={() => (RenderPage(AboutPage, props))}/>
//         <Route path="/contact" render={() => (RenderPage(ContactPage, props))}/>
//         <Route component={NoMatch}/>
//       </Switch>
//     </BrowserRouter>
//   );
// };

export default Router;
