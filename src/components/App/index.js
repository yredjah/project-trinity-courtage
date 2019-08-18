// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Contact from 'src/containers/Contact';

// == Import : local
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <header>
      <Header />
    </header>
    <main>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

// == Export
export default App;
