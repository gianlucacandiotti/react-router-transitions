import React from 'react';
import AnimatedWrapper from "./AnimatedWrapper";

const Home = () => (
  <div className="page">
    <h1>Home</h1>
    <p>Hello from the home page!</p>
  </div>
);

Home.displayName = 'Home';

export default AnimatedWrapper(Home);
