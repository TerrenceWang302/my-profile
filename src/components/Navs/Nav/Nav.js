import React from 'react';
import classes from './Nav.css';
import {NavLink} from 'react-router-dom';

const Nav = (props) => (
  <NavLink to={props.address} className={classes.Nav} activeStyle={{
    color: "#fecc09"
  }}>
    {props.navname}
  </NavLink>
);

export default Nav;
