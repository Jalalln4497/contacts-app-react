import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
  <div className="contact-list">
    {
      contacts.map((contact) => (
        <ContactItem {...contact} onDelete={onDelete} key={contact.id} />
      ))
    }
  </div>
  );
}

export default ContactList;
