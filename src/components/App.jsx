// import { Component } from 'react';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   handleFormSubmit = data => {
//     console.log('this is data', data);
//     this.setState({
//       contacts: [data, ...this.state.contacts],
//     });
//   };

//   filter = e => {
//     console.log(e.target.value);
//   };
//   // deleteContact = e => {
//   //   this.setState(prevState => )({
//   //     contacts: prevState.contacts.filter(({id} => id !== e.currentTarget.elements.id))
//   //   })
//   // };

//   render() {
//     return (
//       <>
//         <h1>Phone book</h1>
//         <ContactForm onSubmit={this.handleFormSubmit} />

//         <h2>Contacts</h2>
//         <Filter onChangeEvent={this.filter} filter={this.state.filter} />
//         <ContactList
//           contacts={this.state.contacts}
//           deleteContact={this.deleteContact}
//         />
//       </>
//     );
//   }
// }

import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Anna', number: '898989' }],
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number, contacts } = this.state;
    // const id = nanoid();

    this.setState({
      contacts: [...contacts, { name, number, id: nanoid() }],
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleClickDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  filter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const filteredContacts =
      filter && contacts.length
        ? contacts.filter(({ name }) =>
            name.trim().toLowerCase().includes(filter.trim().toLowerCase())
          )
        : contacts;

    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          Number
          <input
            onChange={this.handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contacts
          <input type="text" name="filter" onChange={this.filter} />
        </label>
        <ul>
          {contacts.length > 0 &&
            filteredContacts.map(({ name, number, id }) => (
              <li key={id}>
                <span>{name}</span>
                <span>{number}</span>
                <button
                  type="button"
                  onClick={() => this.handleClickDelete(id)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </>
    );
  }
}
