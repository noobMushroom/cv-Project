import React from 'react';

const ContactInfoShow = (props) => {
  return (
    <div>
      <div>{props.contactNumber}</div>
      <div>{props.email}</div>
      <div>{props.address}</div>
      <div>{props.website}</div>
    </div>
  );
};

export default ContactInfoShow;
