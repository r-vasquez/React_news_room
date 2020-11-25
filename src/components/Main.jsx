import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import Tecnologia from './routes/Tecnologia';
import Content from '../redux/containers/ContentContainer';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/tecnologia' component={Tecnologia} />
        <Route
          path='/politica'
          key='politica'
          render={props => <Content {...props} category={1} />}
        />
        <Route
          path='/deportes'
          key='deportes'
          render={props => <Content {...props} category={5} />}
        />
        <Route path='/diseno' key='diseno' render={props => <Content {...props} category={6} />} />
        <Route
          path='/internacionales'
          key='internacionales'
          render={props => <Content {...props} category={2} />}
        />
      </Switch>
    </main>
  );
}

export default Main;
