import React from 'react';
import classes from './Works.css';
import Thin from '../../components/Bars/Thin';
import Work from './Work/Work';

const Works = () => (
      <div className={classes.Works}>
        <h1>Keep Perfecting <strong>MY WORKS</strong></h1>
        <Thin />
        <Work />
      </div>
);

export default Works;
