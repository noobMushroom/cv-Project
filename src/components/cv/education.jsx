import React from 'react';

const EducationShow = (props) => {
  return (
    <div className="educationDivContainer">
      <h3>My Education</h3>
      {props.education.map((index) => {
        return (
          <div className="educationDiv" key={index.id}>
            <div className="mainInfo">
              <div className="degreeName">{index.course}</div>
              <div className="collegeName">{index.college}</div>
            </div>
            <div className="dates">
              <div className="date">{index.startingYear}</div>
              <div className="date">{index.endingYear}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationShow;
