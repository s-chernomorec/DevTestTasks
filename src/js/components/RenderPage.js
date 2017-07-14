import React from 'react';

import * as h from '../helpers';
import TopMenu from './topMenu/TopMenu';
import MainMenu from './mainMenu/MainMenu';
import FooterMainMenu from './mainMenu/FooterMainMenu';
import Subscribe from './subscribe/Subscribe';

const RenderPage = (Page, _props, routeProps) => {

  const props = routeProps !== undefined
    ? h.assign(_props, routeProps)
    : _props;

  return (
    <div className="wrapper">
      <TopMenu links={props.topLinks}/>
      <MainMenu links={props.mainLinks}/>
      <Page {...props}/>
      <Subscribe/>
      <FooterMainMenu links={props.mainLinks}/>
    </div>
  );
}

export default RenderPage;
