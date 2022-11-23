import React from 'react';

const PersonalInfo = (props) => {
  return (
    <div className="personalInfo">
      <div className="firstName">
        <h1>{props.name}</h1>
      </div>
      <div className="lastName">
        <h1>{props.lastName}</h1>
      </div>
    </div>
  );
};

export default PersonalInfo;
