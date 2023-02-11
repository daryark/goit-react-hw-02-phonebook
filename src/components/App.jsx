import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleFormSubmit = data => {
    console.log('this is data', data);
    this.setState(prevState => {
      prevState.contacts.push(data);
    });
  };

  //
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleFormSubmit} />

        <h2>Contacts</h2>
        {/* <Filter/> */}
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}
