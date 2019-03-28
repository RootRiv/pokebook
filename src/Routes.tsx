import * as React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import PokeBook from './container/PokeBook/PokeBook';

export class Routes extends React.Component {

  public render() {
    return (
      <div>
        <Header color="textPrimary" type="h5" />
        <Switch>
          <Route exact={true} path="/" component={PokeBook} />
          <Route exact={true} path="/pokebook" component={PokeBook} />
        </Switch>
      </div>
    );
  }
}
