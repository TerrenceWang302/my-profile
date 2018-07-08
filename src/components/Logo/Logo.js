import React from 'react';
import Blur from '../../assets/self.png';
import classes from './Logo.css';
import BackgroundImage from 'react-background-image-loader';

const logo = () => (
  <div className={classes.Logo}>
    <BackgroundImage src={Blur} className={classes.Container}>
    </BackgroundImage>
  </div>
);

export default logo;
