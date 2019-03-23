import * as React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import App from './container/top/App';
import Submit from './container/SubmitPage/Submit';
import Header from './components/header/Header';
import PokeBook from './container/PokeBook/PokeBook';

export class Routes extends React.Component {

  public render() {
    return (
      <div>
        <Header color="textPrimary" type="h5"/>
        <h1>Route sample</h1>
        <Switch>
          <Route exact={true} path="/" component={PokeBook} />
          <Route exact={true} path="/app" component={App} />
          <Route exact={true} path="/form" component={Submit} />
        </Switch>
      </div>
    );
  }
}
