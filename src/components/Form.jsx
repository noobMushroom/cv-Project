import React from 'react';
import { Component } from 'react';
import Name from './formElements/name';
import Contact from './formElements/ContactInfo';
import Education from './formElements/Education';
import WorkExperience from './formElements/WorkExperience';
import Skills from './formElements/skill';
import Cv from './cv';
import uniqid from 'uniqid';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
    this.state = {
      personalInfo: {
        name: 'cool',
        lastName: 'person',
        description: 'I am very cool',
      },
      contact: {
        contactNumber: 8998989,
        email: 'something@some.com',
        address: 'candy land',
        website: 'candyland.com',
      },
      skills: [{ skill: '', id: uniqid() }],
    };
  }

  handlePersonalInfo = (e) => {
    if (e.target.id === 'firstName')
      this.setState((current) => {
        return {
          ...current,
          personalInfo: { ...current.personalInfo, name: e.target.value },
        };
      });
    if (e.target.id === 'lastName')
      this.setState((current) => {
        return {
          ...current,
          personalInfo: { ...current.personalInfo, lastName: e.target.value },
        };
      });
    if (e.target.id === 'description')
      this.setState((current) => {
        return {
          ...current,
          personalInfo: {
            ...current.personalInfo,
            description: e.target.value,
          },
        };
      });
  };

  handleContactInfo = (e) => {
    if (e.target.id === 'phoneNumber')
      this.setState((current) => {
        return {
          ...current,
          contact: { ...current.contact, contactNumber: e.target.value },
        };
      });
    if (e.target.id === 'email')
      this.setState((current) => {
        return {
          ...current,
          contact: { ...current.contact, email: e.target.value },
        };
      });
    if (e.target.id === 'address')
      this.setState((current) => {
        return {
          ...current,
          contact: { ...current.contact, address: e.target.value },
        };
      });
    if (e.target.id === 'website')
      this.setState((current) => {
        return {
          ...current,
          contact: { ...current.contact, website: e.target.value },
        };
      });
  };

  handleSkillsChange = (e, id) => {
    let comp = this.state.skills.find((element) => element.id === id);
    comp.skill = e.target.value;
    let temp = this.state.skills.filter((element) => element.id !== id);
    this.setState((current) => {
      return {
        ...current,
        skills: [...temp, { ...comp }],
      };
    });
  };

  addSkill = (e) => {
    this.setState((current) => {
      return {
        ...current,
        skills: [...current.skills, { skill: '', id: uniqid() }],
      };
    });
  };

  removeSkill = (id) => {
    let newArray = this.state.skills.filter((element) => element.id !== id);
    this.setState((current) => {
      return {
        ...current,
        skills: [...newArray],
      };
    });
  };

  clickHandle(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onClick={this.clickHandle}>
          <fieldset>
            <legend>Bio</legend>
            <Name handleChange={this.handlePersonalInfo} />
          </fieldset>
          <fieldset>
            <legend>Contact</legend>
            <Contact handleChange={this.handleContactInfo} />
          </fieldset>
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
            <Skills
              {...this.state}
              handleChange={this.handleSkillsChange}
              addSkill={this.addSkill}
              deleteSkill={this.removeSkill}
            />
          </fieldset>
          <button typeof="submit">Generate Cv</button>
        </form>
        <Cv {...this.state} />
      </div>
    );
  }
}

export default Form;
