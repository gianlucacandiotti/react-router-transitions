import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import TransitionGroup from "react-transition-group/TransitionGroup";

import Home from './Home';
import Subpage from './Subpage';

const firstChild = ({ children }) => (
  React.Children.toArray(children)[0] || null
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/subpage">Subpage</Link>
        </div>

        <Switch>
          <Route
            exact
            path="/"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Home {...rest} />}
              </TransitionGroup>
            )}
          />
          <Route
            path="/subpage"
            children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
                {match && <Subpage {...rest} />}
              </TransitionGroup>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
