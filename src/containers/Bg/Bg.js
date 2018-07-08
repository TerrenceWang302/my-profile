import React from 'react';
import classes from './Bg.css';
import Introduction from '../Introduction/Introduction';
import Works from '../Works/Works';
import {Route, Switch, Redirect} from 'react-router-dom';

const Bg = () => {
  return (
    <div className={classes.Bg}>
      <Switch>
        <Route path='/works' component={Works} />
        <Route path='/my-profile' component={Introduction} />
        <Redirect from='/' to='/my-profile' />
      </Switch>
    </div>
  );
}

export default Bg;
