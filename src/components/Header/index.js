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
                <Link to="/assurances" exact>
                  <Menu.Item
                    name='assurances'
                    active={activeItem === 'assurances'}
                    onClick={this.handleItemClick}
                    className="menu-nav"
                  >
                    Assurances
                  </Menu.Item>
                </Link>
                <Link to="/finance" exact>
                  <Menu.Item 
                    name='placement-financier' 
                    active={activeItem === 'placement-financier'} 
                    onClick={this.handleItemClick}
                    className="menu-nav"
                  >
                    Placement financier
                  </Menu.Item>
                </Link>
                <Link to="/retraite" exact>
                  <Menu.Item
                    name='retraite'
                    active={activeItem === 'retraite'}
                    onClick={this.handleItemClick}
                    className="menu-nav"
                  >
                    Retraite
                  </Menu.Item>
                </Link>
                <Link to="/sante_prevoyance" exact>
                  <Menu.Item
                    name='santé-prévoyance'
                    active={activeItem === 'santé-prévoyance'}
                    onClick={this.handleItemClick}
                    className="menu-nav"
                  >
                    Santé / Prévoyance
                  </Menu.Item>
                </Link>
                <Link to="/assurance_de_pret" exact>
                  <Menu.Item
                    name='assurance-de-prêt'
                    active={activeItem === 'assurance-de-prêt'}
                    onClick={this.handleItemClick}
                    className="menu-nav"
                  >
                    Assurance de prêt
                  </Menu.Item>
                </Link>
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
