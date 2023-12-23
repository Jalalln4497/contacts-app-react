import React from 'react';
import { getData } from '../utils/data';
import ContactList from './ContactList';
import ContactInput from './ContactInput';

class ContactApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    }
    
    this.onDeleteHandler = this.onDeleteHandler.bind(this); // Nama variabel boleh diganti
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    console.log(contacts);
    console.log('==================');
    console.log({contacts});
    this.setState({ contacts });
  }

  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: './images/default.jpg'
          }
        ],
      }
    });
  }

  render() {
      return (
            <div className="contact-app">
              <h1>{this.props.titleApp}</h1>
              <h2>Add Contact</h2>
              <ContactInput addContact={this.onAddContactHandler.bind(this)} />
              <h2>Contact List</h2>
              <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
            </div>
      );

  }
}

export default ContactApp;
