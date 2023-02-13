export const ContactItem = ({ name, number, deleteContact }) => {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button type="button" onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};
