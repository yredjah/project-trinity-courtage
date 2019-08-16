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
          Nous contacter
          Mention légale
          Accueil
      </div>
    </div>
  </div>
);


// == Export
export default Footer;

