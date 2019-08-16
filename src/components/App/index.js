// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'src/components/Header';
import Body from 'src/components/Body';
import Footer from 'src/components/Footer';

// == Import : local
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
      <Header />
      <Body />
      <Footer />
  </div>
);

// == Export
export default App;
