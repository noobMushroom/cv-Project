import React from 'react';

const PersonalInfo = (props) => {
  return (
    <div>
      <div className="firstName">{props.name}</div>
      <div className="lastName"> {props.lastName}</div>
      <div className="description"> {props.description} </div>
    </div>
  );
};

export default PersonalInfo;
