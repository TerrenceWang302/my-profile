import React, {Component} from 'react';
import classes from './Work.css';
import Landing from '../../../assets/sample-image-1.png';
import Modern from '../../../assets/sample-image-2.png';

class Work extends Component {
  state = {
    works : [
      {
        title: 'Responsive Landing Page',
        description: 'This is a fully responsive website suiteable for small businesses or individuals to use as a landing page',
        link: 'https://terrencewang302.github.io/landingPage/',
        imageSource: Landing
      },
      {
        title: 'Modern Responsive Home Page',
        description: 'A template built with Bootstrap and jQuery',
        link: 'https://terrencewang302.github.io/modern/',
        imageSource: Modern
      }
    ]
  };

  render() {
    const works = this.state.works.map(wk => {
      return (
        <div className={classes.Indi}>
          <h2>{wk.title}</h2>
          <p>{wk.description}</p>
          <a href={wk.link} target="_blank" rel="noopener noreferrer">
            <img src={wk.imageSource} alt="Page interface" />
          </a>
        </div>
      );
    });

    return (
      <div className={classes.Work}>
        {works}
      </div>
    );
  }
}

export default Work;
