import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-left">
          <h1>
            <span className="glyphicon glyphicon-globe">
              Atlas
            </span>
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;
