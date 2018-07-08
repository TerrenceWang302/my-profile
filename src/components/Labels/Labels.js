import React, {Component} from 'react';
import Label from './Label/Label';
import classes from './Labels.css';

class Labels extends Component {
  state = {
    info: [
      ["name", "Qinli Wang"],
      ["university", "Monash"],
      ["subject", "Business Information Systems"],
      ["e-mail", "terrencewang122@gmail.com"],
      ["phone", "0000000000"]
    ]
  };

  render() {
    const showLabels = this.state.info.map(info => {
      return (<Label title={info[0].toUpperCase()} content={info[1]} />);
    });

    return (
      <div className={classes.Labels}>
        {showLabels}
      </div>
    );
  }
}

export default Labels;
