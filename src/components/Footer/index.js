// == Import : npm
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import logo from './logo.png';

// == Import : local

import './footer.scss';

// == Composant
class Footer extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <div id="footer">
    <div className="linkdiv">
      <div className="link">
        <Menu className="nav-foot" secondary vertical>
          <Menu.Item
            name='contact'
            active={activeItem === 'account'}
            onClick={this.handleItemClick}
            className="menu-foot"
          />
          <Menu.Item
            name='Mentions légales'
            active={activeItem === 'settings'}
            onClick={this.handleItemClick}
            className="menu-foot"
          />
        </Menu>
      </div>
    </div>
    <div className="textfooter">
    </div>
    <div className="icons">
      <img className="logo-foot" src={logo} alt="" />
    </div>
  </div>
    )
  }
}


// == Export
export default Footer;

