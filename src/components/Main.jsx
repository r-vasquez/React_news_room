import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './routes/Home';
import Tecnologia from './routes/Tecnologia';
import Politica from './routes/Politica';
import Deportes from './routes/Deportes';
import Diseño from './routes/Diseño';
import Internacionales from './routes/Internacionales';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/tecnologia' component={Tecnologia} />
        <Route path='/politica' component={Politica} />
        <Route path='/deportes' component={Deportes} />
        <Route path='/diseno' component={Diseño} />
        <Route path='/internacionales' component={Internacionales} />
      </Switch>
    </main>
  );
}

export default Main;
