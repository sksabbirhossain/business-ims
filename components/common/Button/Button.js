/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

const Button = ({ children, className, loading, isPending, disabled }) => {
  return (
    <button
      disabled={disabled || loading || isPending}
      type="submit"
      className={`${className} rounded-[3px] bg-primary px-7 py-1.5 text-center font-medium capitalize text-white ring-1 ring-primary transition-all duration-500 ease-in-out hover:bg-secondary hover:shadow-md hover:shadow-primary hover:ring-secondary disabled:bg-primary/90 disabled:shadow-none disabled:ring-0 ${loading || isPending ? "cursor-wait" : ""}`}
    >
      {loading || isPending ? (
        <p className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-6"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5, 5"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 12 12"
                to="360 12 12"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </p>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
