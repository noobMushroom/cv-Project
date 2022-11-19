import React from 'react';
import PersonalInfo from './cv/personalInfo';
import ContactInfoShow from './cv/contact';
import Skills from './cv/skills';

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
      </div>
    );
  }
}

export default Cv;
