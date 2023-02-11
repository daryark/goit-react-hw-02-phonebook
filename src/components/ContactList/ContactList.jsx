import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
  // console.log(contacts.map(_ => console.log(_)));
  console.log('contacts in list', contacts);
  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map(contact => (
          <ContactItem name={contact.name} number={contact.number} />
        ))}
      <li> hello</li>
    </ul>
  );
};
