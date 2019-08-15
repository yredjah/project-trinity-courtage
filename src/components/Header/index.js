// == Import : npm
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Button } from 'semantic-ui-react';
import logo from './logo.png';
// == Import : local
import './header.scss';

// == Composants

class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div className="header">
        <div className="container-header" >
          <h1 id="title"><img className="logo" src={logo} alt="" /></h1>
          <div className="nav">
            <Menu>
              <Menu.Item>
                <Button primary>Qui sommes nous ?</Button>
              </Menu.Item>
              <Menu.Item>
                <Button primary>Assurances</Button>
              </Menu.Item>
              <Menu.Item>
                <Button primary>Placement financier</Button>
              </Menu.Item>
              <Menu.Item>
                <Button primary>Immobilier</Button>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    )
  }
}

// == Export
export default Header; 
