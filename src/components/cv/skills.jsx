import React from 'react';

const Skills = (props) => {
  return (
    <div className="skillDiv">
      <h3>Expertise</h3>
      <ul>
        {Object.values(props).map((index) => {
          return <li key={index.id}>{index.skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
