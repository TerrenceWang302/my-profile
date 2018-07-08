import React from 'react';
import Logo from '../../components/Logo/Logo';
import Navs from '../../components/Navs/Navs';
import classes from './FunctionBar.css';
import Footer from '../../components/Footer/Footer';

const FunctionBar = () => {
  return (
    <div className={classes.FunctionBar}>
      <Logo />
      <Navs />
      <Footer />
    </div>
  );
};

export default FunctionBar;
