import React from 'react';
import PersonalInfo from './cv/personalInfo';
import ContactInfoShow from './cv/contact';
import Skills from './cv/skills';
import EducationShow from './cv/education';
import WorkShow from './cv/work';

class Cv extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <PersonalInfo {...this.props.personalInfo} />
        <ContactInfoShow {...this.props.contact} />
        <Skills {...this.props.skills} />
        <EducationShow {...this.props} />
        <WorkShow {...this.props} />
      </div>
    );
  }
}

export default Cv;
