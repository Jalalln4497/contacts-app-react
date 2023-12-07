import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImg from './ContactItemImg';

const ContactItem = ({ imageUrl, name, tag }) => {
  return (
    <div className="contact-item">
      <ContactItemImg imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
    </div>
  );
}

export default ContactItem;
