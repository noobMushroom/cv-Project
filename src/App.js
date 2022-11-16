import React from 'react';
import { Component } from 'react';
import Name from './components/name';
import Contact from './components/ContactInfo';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/skill';

class App extends React.Component {
  render() {
    return (
      <form>
        <Name />
        <Contact />
        <fieldset>
          <legend>Work Experience</legend>
          <WorkExperience />
          <button>Delete</button>
          <button>Add</button>
        </fieldset>
        <fieldset>
          <legend>Education Information</legend>
          <Education />
          <button>Edit</button>
          <button>Delete</button>
        </fieldset>
        <fieldset>
          <legend>Skills</legend>
          <Skills />
          <button>Delete</button>
          <button>Add</button>
        </fieldset>
        <button typeof="submit">Generate Cv</button>
      </form>
    );
  }
}

export default App;
