// imports NPM
import { connect } from 'react-redux';

// imports locaux
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  logo: state.logo,
});

const mapDispatchToProps = {};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// export
export default HomeContainer;
