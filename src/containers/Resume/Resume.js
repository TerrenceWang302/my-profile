import React, { Component } from 'react';
import classes from './Resume.css';

class Resume extends Component {
  state = {
    frontEnd : ["HTML5 + CSS3", "JavaScript", "jQuery", "Bootstrap", "React.js"],
    ba : [
      "Business Process Analysis",
      "Use Cases", "Business Activity Analysis",
      "Product Specification",
      "Requirements Gathering",
      "Stakeholder Communication"]
  }

  render() {
    const front = this.state.frontEnd.map(f => {
      return (<div className={classes.Indi}><p>{f}</p></div>);
    });

    const business = this.state.ba.map(b => {
      return (<div className={classes.Indi}><p>{b}</p></div>);
    });

    return (
      <div className={classes.Resume}>
        <h3>Skill Set: <strong>Front-End</strong></h3>
        <div className={classes.Skill}>
          {front}
        </div>
        <h3>Skill Set: <strong>Business Analysis</strong></h3>
        <div className={classes.Skill}>
          {business}
        </div>
      </div>
    );
  }
}

export default Resume;
