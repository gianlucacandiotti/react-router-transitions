import React from 'react';
import AnimatedWrapper from "./AnimatedWrapper";

const Subpage = () => (
  <div className="page">
    <h1>Subpage</h1>
    <p>Hello from a sub page!</p>
  </div>
);

Subpage.displayName = 'Subpage';

export default AnimatedWrapper(Subpage);
