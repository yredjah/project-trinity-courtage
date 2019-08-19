// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Contact from 'src/containers/Contact';
import Legal from 'src/components/Legal';
import Insurance from 'src/components/Insurance';
import Finance from 'src/components/Finance';
import Retirement from 'src/components/Retirement';
import Health from 'src/components/Health';
import Credit from 'src/components/Credit';


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
      <Route path="/mention_legale" exact component={Legal} />
      <Route path="/assurances" exact component={Insurance} />
      <Route path="/finance" exact component={Finance} />
      <Route path="/retraite" exact component={Retirement} />
      <Route path="/sante_prevoyance" exact component={Health} />
      <Route path="/assurance_de_pret" exact component={Credit} />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

// == Export
export default App;
