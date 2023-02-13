import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map((contact, idx) => (
          <ContactItem
            key={idx}
            name={contact.name}
            number={contact.number}
            deleteContact={deleteContact}
          />
        ))}
    </ul>
  );
};
