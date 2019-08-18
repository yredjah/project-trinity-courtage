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
          <Link to="/" exact><h1 id="title"><img className="logo" src={logo} alt="" /></h1></Link>
          <div className="nav">
            <Segment inverted>
              <Menu inverted secondary size='small'>
                <Menu.Item
                  name='assurances'
                  active={activeItem === 'assurances'}
                  onClick={this.handleItemClick}
                  className="menu-nav"
                >
                  Assurances
                </Menu.Item>
                <Menu.Item
                  name='prévoyance'
                  active={activeItem === 'prévoyance'}
                  onClick={this.handleItemClick}
                  className="menu-nav"
                >
                  Prévoyance
                </Menu.Item>
                <Menu.Item 
                  name='placement-financier' 
                  active={activeItem === 'placement-financier'} 
                  onClick={this.handleItemClick}
                  className="menu-nav"
                >
                  Placement financier
                </Menu.Item>

                <Menu.Item
                  name='immobilier'
                  active={activeItem === 'immobilier'}
                  onClick={this.handleItemClick}
                  className="menu-nav"
                >
                  Immobilier
                </Menu.Item>
              </Menu>
            </Segment>
          </div>
        </div>
      </div>
    )
  }
}

// == Export
export default Header; 
