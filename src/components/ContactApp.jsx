import React from 'react';
import getData from '../utils/data';
import ContactList from './ContactList';

const ContactApp = ({ titleApp }) => {
  const contacts = getData();

  return (
    <div className="contact-app">
      <h1>{titleApp}</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default ContactApp;
