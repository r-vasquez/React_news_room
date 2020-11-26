import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../redux/containers/HomeContainer';
import Content from '../redux/containers/ContentContainer';
import {
  home,
  tecnologia,
  politica,
  deportes,
  diseno,
  internacionales
} from '../headers';

function Main() {
  return (
    <main>
      <Switch>
        <Route
          exact
          path='/'
          key='home'
          render={props => <Home {...props} {...home} />}
        />
        <Route
          path='/tecnologia'
          key='tecnologia'
          render={props => <Content {...props} {...tecnologia} />}
        />
        <Route
          path='/politica'
          key='politica'
          render={props => <Content {...props} {...politica} />}
        />
        <Route
          path='/deportes'
          key='deportes'
          render={props => <Content {...props} {...deportes} />}
        />
        <Route
          path='/diseno'
          key='diseno'
          render={props => <Content {...props} {...diseno} />}
        />
        <Route
          path='/internacionales'
          key='internacionales'
          render={props => <Content {...props} {...internacionales} />}
        />
      </Switch>
    </main>
  );
}

export default Main;
