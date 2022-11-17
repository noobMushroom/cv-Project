import React from 'react';
import { Component } from 'react';
import Name from './name';
import Contact from './ContactInfo';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './skill';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.skills = [];
  }

  clickHandle(e) {
    e.preventDefault();
  }
  render() {
    return (
      <form onClick={this.clickHandle}>
        <Name />
        <Contact />
        <fieldset>
          <legend>Work Experience</legend>
          <WorkExperience />
        </fieldset>
        <fieldset>
          <legend>Education Information</legend>
          <Education />
        </fieldset>
        <fieldset>
          <legend>Skills</legend>
          <Skills />
        </fieldset>
        <button typeof="submit">Generate Cv</button>
      </form>
    );
  }
}

export default Form;
