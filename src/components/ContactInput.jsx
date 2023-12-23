import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tag: '',
    }
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      }
    });
  }

  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      }
    });
  }

  onAddContactEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onAddContactEventHandler.bind(this)}>
        <input type="text" value={this.state.name} onChange={this.onNameChangeEventHandler.bind(this)} placeholder='Name'/>
        <input type="text" value={this.state.tag} onChange={this.onTagChangeEventHandler.bind(this)} placeholder='Tag'/>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
} 

export default ContactInput;
