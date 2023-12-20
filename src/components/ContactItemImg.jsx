import React from 'react';

const ContactItemImg = ({ imageUrl }) => {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="contact image" />
    </div>
  );
}

export default ContactItemImg;
