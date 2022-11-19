import React from 'react';

const WorkShow = (props) => {
  return (
    <div>
      {props.work.map((index) => {
        return (
          <div key={index.id}>
            <div>{index.title}</div>
            <div>{index.company}</div>
            <div>{index.location}</div>
            <div>{index.startingYear}</div>
            <div>{index.endingYear}</div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkShow;
