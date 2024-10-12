const Button = ({ children, className, loading, disabled }) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`${className} rounded-[3px] bg-primary px-7 py-2 text-center font-medium capitalize text-white ring-2 ring-primary transition-all duration-500 ease-in-out hover:bg-secondary hover:shadow-md hover:shadow-primary hover:ring-secondary disabled:bg-primary/90 disabled:shadow-none disabled:ring-0${loading ? "cursor-wait" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
