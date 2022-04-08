import React, { Component } from 'react';

class Header extends Component {
  render() {
    const nome = 'Sistema Solar';
    return (
      <header>
        <h1>{nome}</h1>
      </header>
    );
  }
}

export default Header;
