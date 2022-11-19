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
      skills: [],
      education: [],
      work: [
        {
          title: 'developer',
          company: 'google',
          startingYear: 'something',
          endingYear: 'something ending',
          location: 'candy land',
          id: uniqid(),
        },
      ],
    };
  }

  // updating personal info
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

  // handlining contact info
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

  // handling change in skills
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

  // adding skills in the array
  addSkill = () => {
    this.setState((current) => {
      return {
        ...current,
        skills: [...current.skills, { skill: '', id: uniqid() }],
      };
    });
  };
  // remove skills
  removeSkill = (id) => {
    let newArray = this.state.skills.filter((element) => element.id !== id);
    this.setState((current) => {
      return {
        ...current,
        skills: [...newArray],
      };
    });
  };

  // handling eductaion divs
  handleEducation = (e, id) => {
    let comp = this.state.education.find((element) => element.id === id);
    switch (e.target.id) {
      case 'course':
        comp.course = e.target.value;
        break;
      case 'college':
        comp.college = e.target.value;
        break;
      case 'startingYear':
        comp.startingYear = e.target.value;
        break;
      case 'endingYear':
        comp.endingYear = e.target.value;
        break;
      default:
    }
    let temp = this.state.education.filter((element) => element.id !== id);
    this.setState((current) => {
      return {
        ...current,
        education: [...temp, { ...comp }],
      };
    });
  };

  addEducation = () => {
    this.setState((current) => {
      return {
        ...current,
        education: [
          ...current.education,
          {
            course: '',
            college: '',
            startingYear: '',
            endingYear: '',
            id: uniqid(),
          },
        ],
      };
    });
  };

  removeEducation = (id) => {
    let newArray = this.state.education.filter((element) => element.id !== id);
    this.setState((current) => {
      return {
        ...current,
        education: [...newArray],
      };
    });
  };
  // handling work
  handleWork = (e, id) => {
    let comp = this.state.work.find((element) => element.id === id);
    switch (e.target.id) {
      case 'title':
        comp.title = e.target.value;
        break;
      case 'company':
        comp.company = e.target.value;
        break;
      case 'startingYear':
        comp.startingYear = e.target.value;
        break;
      case 'endingYear':
        comp.endingYear = e.target.value;
        break;
      case 'location':
        comp.location = e.target.value;
        break;
      default:
    }
    let temp = this.state.work.filter((element) => element.id !== id);
    this.setState((current) => {
      return {
        ...current,
        work: [...temp, { ...comp }],
      };
    });
  };

  addWork = () => {
    this.setState((current) => {
      return {
        ...current,
        work: [
          ...current.work,
          {
            title: '',
            company: '',
            startingYear: '',
            endingYear: '',
            location: '',
            id: uniqid(),
          },
        ],
      };
    });
  };

  removeWork = (id) => {
    let newArray = this.state.work.filter((element) => element.id !== id);
    this.setState((current) => {
      return {
        ...current,
        work: [...newArray],
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
            <WorkExperience
              {...this.state}
              handleChange={this.handleWork}
              addWork={this.addWork}
              removeWork={this.removeWork}
            />
          </fieldset>
          <fieldset>
            <legend>Education Information</legend>
            <Education
              {...this.state}
              handleChange={this.handleEducation}
              addEducation={this.addEducation}
              removeEducation={this.removeEducation}
            />
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
