import React from "react";

const RadioButton = ({ name, value, ...rest }) => {
  return (
    <div class="flex w-full gap-x-3 rounded-[3px] px-1.5 py-2.5 text-sm ring-1 ring-primary placeholder:capitalize focus:outline-none focus:ring-1 focus:ring-green-700">
      <input
        id="checkbox"
        type="checkbox"
        value={value}
        name={name}
        {...rest}
      />
      <label
        htmlFor="checkbox"
        className="w-full cursor-pointer select-none font-semibold"
      >
        Add in Stock
      </label>
    </div>
  );
};

export default RadioButton;
