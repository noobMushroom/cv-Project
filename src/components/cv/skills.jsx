import React from 'react';

const Skills = (props) => {
  return (
    <div>
      <ul>
        {Object.values(props).map((index) => {
          return <li key={index.id}>{index.skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
