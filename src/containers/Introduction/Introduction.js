import React from 'react';
import classes from './Introduction.css';
import Labels from '../../components/Labels/Labels';
import Thick from '../../components/Bars/Thick';
import Thin from '../../components/Bars/Thin';
import Resume from '../Resume/Resume';

const Introduction = () => {
  return(
    <div className={classes.Introduction}>
      <h1>Hello, I am <strong>QINLI WANG</strong> <br />
      Front-end Developer and Business Analyst</h1>
      <Thin />
      <p className={classes.Content}>Nothing is more satisfying than <strong>understanding</strong> and
       therefore building things people really love and need. Very often, a <strong>wonderful journey</strong> that
      leads to <strong>great outcomes</strong> starts with <strong>nice communications</strong>. So if the same feeling happens to be in your mind, too,
      I am looking forward to our converstation... </p>
      <br />
      <p className={classes.Content}>By the way, call me <strong>Terrence</strong>, as I found this makes things,
      well sometimes, a bit easier...</p>
      <h2>Personal Info</h2>
      <Thick />
      <Labels />
      <h2>This is me, <strong>Technically</strong></h2>
      <Thick />
      <Resume />
    </div>
  );
}

export default Introduction;
