import PropTypes from 'prop-types';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Notification } from 'components/common/Notification/Notification.styled';
import { ContactInfo, ContactItem, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ deleteContact, filteredContacts }) => {
  return (
    <ul>
      {filteredContacts.length ? (
        filteredContacts.map(({ name, number, id }) => (
          <ContactItem key={id}>
            <div>
              <ContactInfo>{name}</ContactInfo>
              <ContactInfo>{number}</ContactInfo>
            </div>
            <DeleteBtn type="button" onClick={() => deleteContact(id)}>
              <FaRegTrashAlt />
            </DeleteBtn>
          </ContactItem>
        ))
      ) : (
        <Notification>Sorry, no matches found</Notification>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
};
