import React from 'react';
import PersonalInfo from './cv/personalInfo';
import ContactInfoShow from './cv/contact';

class Cv extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <PersonalInfo {...this.props.personalInfo} />
        <ContactInfoShow {...this.props.contact} />
      </div>
    );
  }
}

export default Cv;
