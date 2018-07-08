import React from 'react';
import classes from './Label.css';

const Label = (props) => (
  <div className={classes.Label}>
    <div className={classes.Left}>{props.title}</div>
    <div className={classes.Right}>{props.content}</div>
  </div>
);

export default Label;
