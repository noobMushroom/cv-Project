import React from 'react';

const SkillList = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.maps((task) => {
        return <li>{task.text}</li>;
      })}
    </ul>
  );
};
