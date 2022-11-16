import React from 'react';
import { Component } from 'react';
import Name from './components/name';
import Contact from './components/ContactInfo';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';

class App extends React.Component {
  render() {
    return (
      <div>
        <Name />
        <Contact />
        <WorkExperience />
        <Education />
      </div>
    );
  }
}

export default App;
