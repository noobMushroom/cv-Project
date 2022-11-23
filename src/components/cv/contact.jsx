import React from 'react';

const ContactInfoShow = (props) => {
  return (
    <div className="contactDiv">
      <h3>Contact</h3>
      <div className='mobileNumber'>{props.contactNumber}</div>
      <div className='emailDiv'>{props.email}</div>
      <div className='addressDiv'>{props.address}</div>
      <div className='websiteDiv'>{props.website}</div>
    </div>
  );
};

export default ContactInfoShow;
