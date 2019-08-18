// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';


// == Import : local

import './footer.scss';

// == Composant
const Footer = () => (
  <div id="footer">
    <div className="linkdiv">
      <div className="link">
        <Link className="foot-link" to="/contact" exact>
          Nous Contacter
        </Link>
        <Link className="foot-link" to="/mention_legale" exact>
          Mention légale
        </Link>
        <Link className="foot-link" to="/" exact>
          Accueil
        </Link>
      </div>
    </div>
  </div>
);


// == Export
export default Footer;

