export const Filter = ({ filter, onChangeEvent }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={onChangeEvent} value={filter} />
    </label>
  );
};
