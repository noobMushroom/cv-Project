import React from 'react';

const EducationShow = (props) => {
  return (
    <div>
      {props.education.map((index) => {
        return (
          <div key={index.id}>
            <div>{index.course}</div>
            <div>{index.college}</div>
            <div>{index.startingYear}</div>
            <div>{index.endingYear}</div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationShow;
