// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react'; 


// == Import : local
import './home.scss';

// == Composant
const Home = ({ logo }) => {
  return (
    <div className="home">
      <div className="elem-home" >
        <div className="homePage-img" width={7}>
          <img className="home-img" src='/assets/img/home.jpeg' alt='' />
        </div>
        <div className="homePage-text" width={10}>
          <h2 className="home-title" >Qui sommes nous ?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolor? Quaerat consectetur magnam, provident delectus, modi facere sequi pariatur, nobis ab quia consequuntur veniam commodi aliquam officiis! Possimus culpa expedita nulla facere unde aliquam dolorem voluptatem sint quaerat reiciendis eius odit officiis magni libero suscipit ipsam ea rerum animi, exercitationem voluptatibus corrupti. Totam sint quia perspiciatis esse sunt ipsa! Dicta beatae repellat soluta in enim laborum dignissimos, explicabo aut optio eligendi non dolores commodi natus! Sed voluptate, aspernatur, tenetur sint obcaecati architecto impedit ipsam illum vitae libero nobis soluta dicta placeat voluptas quasi voluptates autem! Maiores sed incidunt temporibus fuga.</p>
        </div>
      </div>

      <div className="partners">
        <h2 className="home-title-part" >Nos partenaires :</h2>
        <div className="part-caintainer">
          {logo.map(logo => (
            <Grid.Row columns={4} key={logo.id}>
              <Image className="home-part" src={logo.image} />
            </Grid.Row>
          ))}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  logo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// == Export
export default Home;
