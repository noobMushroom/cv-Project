import React from 'react';
import PersonalInfo from './cv/personalInfo';
import ContactInfoShow from './cv/contact';
import Skills from './cv/skills';
import EducationShow from './cv/education';
import WorkShow from './cv/work';
import ProfilePic from './cv/image';
import Description from './cv/description';

class Cv extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="cvWrapper" id='cv'>
        <div className="left_side">
          <PersonalInfo {...this.props.personalInfo} />
          <Description {...this.props.personalInfo} />
          <WorkShow {...this.props} />
          <EducationShow {...this.props} />
        </div>
        <div className="right_side">
          <ProfilePic {...this.props.personalInfo} />
          <ContactInfoShow {...this.props.contact} />
          <Skills {...this.props.skills} />
        </div>
      </div>
    );
  }
}

export default Cv;
