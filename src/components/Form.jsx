import React from 'react';
import { Component } from 'react';
import Name from './formElements/name';
import Contact from './formElements/ContactInfo';
import Education from './formElements/Education';
import WorkExperience from './formElements/WorkExperience';
import Skills from './formElements/skill';
import Cv from './cv';
import uniqid from 'uniqid';
import jsPDF from 'jspdf';



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        image: '',
        name: 'Mark',
        lastName: 'Something',
        description: 'I am very cool',
      },
      contact: {
        contactNumber: 899898909,
        email: 'something@some.com',
        address: 'tokyo',
        website: 'john.com',
      },
      skills: [],
      education: [],
      work: [],
    };
  }

  // updating personal info
  handlePersonalInfo = (e) => {
    e.preventDefault();
    if (e.target.id === 'image') {
      this.setState((current) => {
        return {
          ...current,
          personalInfo: {
            ...current.personalInfo,
            image: URL.createObjectURL(e.target.files[0]),
          },
        };
      });
    }
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
    e.preventDefault();
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
    e.preventDefault();
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
  addSkill = (e) => {
    e.preventDefault();
    this.setState((current) => {
      return {
        ...current,
        skills: [...current.skills, { skill: '', id: uniqid() }],
      };
    });
  };
  // remove skills
  removeSkill = (e, id) => {
    e.preventDefault();
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
    e.preventDefault();
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

  addEducation = (e) => {
    e.preventDefault();
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

  removeEducation = (e, id) => {
    e.preventDefault();
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
    e.preventDefault();
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

  addWork = (e) => {
    e.preventDefault();
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

  removeWork = (e, id) => {
    e.preventDefault();
    let newArray = this.state.work.filter((element) => element.id !== id);
    this.setState((current) => {
      return {
        ...current,
        work: [...newArray],
      };
    });
  };
//todo add print function
  // print=()=>{
  //   let doc = new jsPDF()
  //   doc.html(document.querySelector('#cv',{
  //     callback:function(doc){
  //       doc.save('myCv.pdf')
  //     }
  //   }))
  // }

  render() {
    return (
      <div className="container">
        <form>
          <fieldset className="bio">
            <legend className="bio__legend">Bio</legend>
            <Name handleChange={this.handlePersonalInfo} />
          </fieldset>
          <fieldset className="contact">
            <legend className="contact__legend">Contact</legend>
            <Contact handleChange={this.handleContactInfo} />
          </fieldset>
          <fieldset className="work">
            <legend className="work__legend">Work Experience</legend>
            <WorkExperience
              {...this.state}
              handleChange={this.handleWork}
              addWork={this.addWork}
              removeWork={this.removeWork}
            />
          </fieldset>
          <fieldset className="education">
            <legend className="education__legend">Education Information</legend>
            <Education
              {...this.state}
              handleChange={this.handleEducation}
              addEducation={this.addEducation}
              removeEducation={this.removeEducation}
            />
          </fieldset>
          <fieldset className="skills">
            <legend className="skills__legend">Skills</legend>
            <Skills
              {...this.state}
              handleChange={this.handleSkillsChange}
              addSkill={this.addSkill}
              deleteSkill={this.removeSkill}
            />
          </fieldset>
        </form>
        <Cv {...this.state} />
        {/* <div className='printBtn'>
          <button  onClick={this.print}  type="primary"className='btn'>Print Cv</button>
        </div> */}
      </div>
    );
  }
}

export default Form;
