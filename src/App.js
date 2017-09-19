import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import AnimatedRoutes from "./AnimatedRoutes";

import Home from './Home';
import Subpage from './Subpage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/subpage">Subpage</Link>
        </div>


        <AnimatedRoutes>
          <Route exact path="/" component={Home} />
          <Route path="/subpage" component={Subpage} />
        </AnimatedRoutes>
      </div>
    );
  }
}

export default App;
