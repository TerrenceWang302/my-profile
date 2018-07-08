import React from 'react';
import Landing from '../../../assets/sample-image-1.png';
import classes from './Work.css';

const Work = () => (
  <div className={classes.Work}>
    <h2>Responsive Landing Page</h2>
    <p>This is a fully responsive website suiteable for small businesses or individuals to use as a landing page</p>
    <a href="https://terrencewang302.github.io/landingPage/" target="_blank" rel="noopener noreferrer">
      <img src={Landing} alt="Page interface" />
    </a>
  </div>
);

export default Work;
