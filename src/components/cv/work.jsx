import React from 'react';

const WorkShow = (props) => {
  return (
    <div className='workDivContainer'>
            <h3>Experience</h3>
      {props.work.map((index) => {
        return (
          <div className="workDiv" key={index.id}>
            <div className="jobTitle">{index.title}</div>
            <div className="companyName">{index.company}</div>
            <div className="companyLocation">{index.location}</div>
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

export default WorkShow;
