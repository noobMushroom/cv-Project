import React from 'react';
import image from '../images/GitHub-Mark-Light-32px.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className="foot">
        <div className="gitHub">
          <a href="https://github.com/noobMushroom/cv-project.git">
            <img className="logoImage" src={image} alt="github logo" />
          </a>
        </div>
        created by Mushroom
      </footer>
    );
  }
}

export default Footer;

