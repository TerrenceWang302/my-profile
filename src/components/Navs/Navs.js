import React, { Component } from 'react';
import classes from './Navs.css';
import Nav from './Nav/Nav';

class Navs extends Component {
  state = {
    navnames: ["profile", "works"]
  };

  render() {
    const navPresenter = this.state.navnames.map(nav => <Nav navname={nav.toUpperCase()} address={'/' + nav} />);

    return (
      <div className={classes.Navs}>
        {navPresenter}
      </div>
    );
  }
}

export default Navs;
