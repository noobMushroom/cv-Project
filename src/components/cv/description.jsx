import React from 'react';

const Description = (props) => {
  return (
    <div className="description">
      <h3>About Me</h3>
      {props.description}
    </div>
  );
};

export default Description;
