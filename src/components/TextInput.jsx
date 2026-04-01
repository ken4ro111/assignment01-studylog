export const TextInput = (props) => {
  const { name, placeholder, type, value, onChange } = props;

  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};