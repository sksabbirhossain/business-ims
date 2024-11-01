const TextArea = ({ label, type, name, placeholder, value, ...rest }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="" className="text-base font-normal capitalize">
        {label}
      </label>
      <textarea
        type={type}
        placeholder={placeholder}
        value={value}
        {...rest}
        className="rounded-[3px] px-1.5 py-2 text-sm ring-1 ring-primary focus:outline-none"
      ></textarea>
    </div>
  );
};

export default TextArea;
