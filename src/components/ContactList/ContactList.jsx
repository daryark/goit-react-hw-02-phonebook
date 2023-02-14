import PtopTypes from 'prop-types';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Notification } from 'components/common/Notification/Notification.styled';
import { ContactInfo, ContactItem, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ deleteContact, filter }) => {
  return (
    <ul>
      {filter.length ? (
        filter
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ name, number, id }) => (
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
        <Notification>Sorry, no find contacts</Notification>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  // filter: PropTypes.arrayOf(),
};
