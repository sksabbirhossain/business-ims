const FormInput = ({ label, type, name, placeholder, value, ...rest }) => {
  return (
    <div className="flex w-full flex-col space-y-1">
      {label != 0 && (
        <label htmlFor="" className="text-base capitalize text-text">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        {...rest}
        className="w-full rounded-[3px] px-1.5 py-2 text-sm ring-1 ring-primary focus:outline-none focus:ring-green-700"
      />
    </div>
  );
};

export default FormInput;
