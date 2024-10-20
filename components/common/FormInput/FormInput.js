const FormInput = ({ label, type, name, placeholder, value, ...rest }) => {
  return (
    <div className="flex w-full flex-col space-y-2">
      {label != 0 && (
        <label htmlFor="" className="text-base font-medium capitalize">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        {...rest}
        className="w-full rounded-[3px] px-1 py-2 ring-2 ring-primary focus:outline-none"
      />
    </div>
  );
};

export default FormInput;
