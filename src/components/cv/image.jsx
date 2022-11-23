import React from 'react';

const ProfilePic = (props) => {
  return (
    <div className="imageContainer">
      <img src={props.image} alt="profile pic" />
    </div>
  );
};

export default ProfilePic;
